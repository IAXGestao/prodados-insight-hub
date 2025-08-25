-- Create research categories table
CREATE TABLE public.research_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT NOT NULL,
  color TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create research datasets table
CREATE TABLE public.research_datasets (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category_id UUID NOT NULL REFERENCES public.research_categories(id),
  source TEXT NOT NULL,
  source_url TEXT,
  api_endpoint TEXT,
  status TEXT NOT NULL DEFAULT 'active',
  tags TEXT[] DEFAULT '{}',
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create research data table to store actual data
CREATE TABLE public.research_data (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  dataset_id UUID NOT NULL REFERENCES public.research_datasets(id),
  data JSONB NOT NULL,
  period TEXT, -- e.g., "2024", "2024-Q1", "agosto-2024"
  region TEXT, -- e.g., "Brasil", "Ceará", "Fortaleza"
  last_updated TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.research_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.research_datasets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.research_data ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (since this is public data)
CREATE POLICY "Public can view research categories" 
ON public.research_categories 
FOR SELECT 
USING (true);

CREATE POLICY "Public can view research datasets" 
ON public.research_datasets 
FOR SELECT 
USING (status = 'active');

CREATE POLICY "Public can view research data" 
ON public.research_data 
FOR SELECT 
USING (true);

-- Create policies for admin management
CREATE POLICY "Admins can manage research categories" 
ON public.research_categories 
FOR ALL 
USING (is_admin());

CREATE POLICY "Admins can manage research datasets" 
ON public.research_datasets 
FOR ALL 
USING (is_admin());

CREATE POLICY "Admins can manage research data" 
ON public.research_data 
FOR ALL 
USING (is_admin());

-- Create indexes for better performance
CREATE INDEX idx_research_datasets_category ON public.research_datasets(category_id);
CREATE INDEX idx_research_data_dataset ON public.research_data(dataset_id);
CREATE INDEX idx_research_data_period ON public.research_data(period);
CREATE INDEX idx_research_data_region ON public.research_data(region);

-- Create triggers for updated_at
CREATE TRIGGER update_research_categories_updated_at
BEFORE UPDATE ON public.research_categories
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_research_datasets_updated_at
BEFORE UPDATE ON public.research_datasets
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial categories
INSERT INTO public.research_categories (name, description, icon, color, slug) VALUES
('Demografia e População', 'Dados sobre população, densidade demográfica e estrutura etária', 'Users', 'bg-blue-500', 'demografia'),
('Economia e Renda', 'PIB, renda, emprego e indicadores econômicos', 'DollarSign', 'bg-green-500', 'economia'),
('Educação', 'IDEB, matrículas, alfabetização e qualidade educacional', 'GraduationCap', 'bg-purple-500', 'educacao'),
('Saúde e Qualidade de Vida', 'Mortalidade, expectativa de vida e indicadores de saúde', 'Heart', 'bg-red-500', 'saude'),
('Desenvolvimento Humano', 'IDH, IVS e outros índices de desenvolvimento', 'TrendingUp', 'bg-orange-500', 'desenvolvimento'),
('Segurança Pública', 'Criminalidade, violência e segurança', 'Shield', 'bg-gray-600', 'seguranca'),
('Habitação e Infraestrutura', 'Domicílios, saneamento e infraestrutura urbana', 'Home', 'bg-indigo-500', 'habitacao'),
('Meio Ambiente', 'Cobertura vegetal, poluição e sustentabilidade', 'Leaf', 'bg-green-600', 'ambiente'),
('Mobilidade e Transporte', 'Frota, transporte público e mobilidade', 'Car', 'bg-blue-600', 'mobilidade'),
('Cultura e Turismo', 'Equipamentos culturais e turismo', 'Camera', 'bg-pink-500', 'cultura');

-- Insert sample datasets
INSERT INTO public.research_datasets (title, description, category_id, source, source_url, api_endpoint, tags) 
SELECT 
  'Censo Demográfico 2022',
  'Dados completos sobre população, densidade demográfica e estrutura etária por município',
  id,
  'IBGE',
  'https://sidra.ibge.gov.br/tabela/4714',
  '/4714/n6/all/v/all/p/last/c2/6794/c1/allxt/c58/all',
  ARRAY['População', 'Densidade', 'Censo', 'Municipal']
FROM public.research_categories WHERE slug = 'demografia';

INSERT INTO public.research_datasets (title, description, category_id, source, source_url, api_endpoint, tags)
SELECT 
  'PIB Municipal',
  'Produto Interno Bruto por município brasileiro',
  id,
  'IBGE',
  'https://sidra.ibge.gov.br/tabela/5938',
  '/5938/n6/all/v/37/p/last/c11255/90687',
  ARRAY['PIB', 'Economia', 'Municipal', 'Renda']
FROM public.research_categories WHERE slug = 'economia';

INSERT INTO public.research_datasets (title, description, category_id, source, source_url, api_endpoint, tags)
SELECT 
  'IDEB por Município',
  'Índice de Desenvolvimento da Educação Básica por município',
  id,
  'INEP',
  'https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/indicadores-educacionais/ideb',
  'inep/ideb',
  ARRAY['IDEB', 'Educação', 'Qualidade', 'Municipal']
FROM public.research_categories WHERE slug = 'educacao';