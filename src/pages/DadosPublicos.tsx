import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  DollarSign, 
  GraduationCap, 
  Heart, 
  TrendingUp,
  Shield,
  Home,
  Leaf,
  Car,
  Palette,
  Search,
  ExternalLink,
  Database
} from "lucide-react";

const DadosPublicos = () => {
  const dataCategories = [
    {
      id: "demografia",
      title: "Demografia e População",
      icon: Users,
      color: "bg-blue-600",
      sources: ["IBGE Censo 2022", "PNAD Contínua"],
      indicators: [
        "População total, urbana e rural",
        "Densidade demográfica",
        "Faixa etária (crianças, jovens, adultos, idosos)",
        "Estrutura por gênero",
        "Taxa de crescimento populacional",
        "Taxa de natalidade e mortalidade"
      ],
      application: "Criação de perfis de cidades e bairros com dados básicos de população."
    },
    {
      id: "economia",
      title: "Economia e Renda",
      icon: DollarSign,
      color: "bg-green-600",
      sources: ["IBGE (SIDRA)", "IpeaData", "RAIS", "CAGED"],
      indicators: [
        "PIB municipal e per capita",
        "Renda média domiciliar e individual",
        "Distribuição de renda (Gini)",
        "Nível de emprego e desemprego",
        "Setores de atividade predominantes",
        "Número de empresas ativas (Receita Federal/CNPJ)"
      ],
      application: "Comparação econômica entre cidades e bairros; insights para negócios e investimentos."
    },
    {
      id: "educacao",
      title: "Educação",
      icon: GraduationCap,
      color: "bg-purple-600",
      sources: ["INEP", "Censo Escolar", "IBGE"],
      indicators: [
        "Taxa de alfabetização",
        "Escolaridade média da população",
        "Número de escolas públicas e privadas",
        "IDEB por município e estado",
        "Matrículas no ensino fundamental, médio e superior"
      ],
      application: "Perfis educacionais por localidade; mapeamento de regiões com maior potencial de mão de obra qualificada."
    },
    {
      id: "saude",
      title: "Saúde e Qualidade de Vida",
      icon: Heart,
      color: "bg-red-600",
      sources: ["DataSUS", "IBGE (PNS)", "Atlas Brasil"],
      indicators: [
        "Expectativa de vida",
        "Taxas de mortalidade infantil",
        "Cobertura de saneamento básico",
        "Número de hospitais e unidades de saúde",
        "Incidência de doenças",
        "Acesso a planos de saúde"
      ],
      application: "Indicadores de bem-estar e qualidade de vida de bairros e cidades."
    },
    {
      id: "desenvolvimento",
      title: "Desenvolvimento Humano e Social",
      icon: TrendingUp,
      color: "bg-orange-600",
      sources: ["Atlas Brasil (PNUD)", "IBGE"],
      indicators: [
        "IDH (Índice de Desenvolvimento Humano)",
        "Índice de Vulnerabilidade Social (IVS)",
        "Índice de Desenvolvimento da Educação Básica (IDEB)",
        "Índice FIRJAN de Desenvolvimento Municipal (IFDM)"
      ],
      application: "Rankings comparativos entre cidades ou bairros, facilitando análise para empresas e planejadores urbanos."
    },
    {
      id: "seguranca",
      title: "Segurança Pública",
      icon: Shield,
      color: "bg-yellow-600",
      sources: ["SINESP", "DATASUS", "Secretarias Estaduais de Segurança"],
      indicators: [
        "Taxas de criminalidade por tipo de crime",
        "Violência urbana por bairro ou município",
        "Acidentes de trânsito e letalidade"
      ],
      application: "Conteúdo sobre segurança para planejamentos urbanos e análises de risco."
    },
    {
      id: "habitacao",
      title: "Habitação e Infraestrutura",
      icon: Home,
      color: "bg-indigo-600",
      sources: ["IBGE (Censo e PNAD)", "SNIS"],
      indicators: [
        "Número de domicílios",
        "Tipo de ocupação (próprio, alugado, cedido)",
        "Acesso a internet e energia elétrica",
        "Infraestrutura urbana (vias pavimentadas, iluminação pública)"
      ],
      application: "Perfis de bairros, cruzando com dados de urbanização e mercado imobiliário."
    },
    {
      id: "ambiente",
      title: "Meio Ambiente e Sustentabilidade",
      icon: Leaf,
      color: "bg-teal-600",
      sources: ["IBGE", "MapBiomas", "ANA (Agência Nacional de Águas)"],
      indicators: [
        "Cobertura vegetal",
        "Qualidade da água e ar",
        "Áreas de preservação ambiental",
        "Índices de poluição",
        "Eventos climáticos extremos"
      ],
      application: "Mapas interativos e análises para negócios com foco em ESG e impacto ambiental."
    },
    {
      id: "mobilidade",
      title: "Mobilidade e Transporte",
      icon: Car,
      color: "bg-cyan-600",
      sources: ["DENATRAN", "IBGE", "Plataformas estaduais de transporte"],
      indicators: [
        "Frota de veículos por cidade",
        "Extensão de vias e rodovias",
        "Transporte público (linhas, passageiros, acessibilidade)",
        "Índice de congestionamento e tempo médio de deslocamento"
      ],
      application: "Comparativos sobre mobilidade urbana para planejamentos de logística ou qualidade de vida."
    },
    {
      id: "cultura",
      title: "Cultura, Turismo e Lazer",
      icon: Palette,
      color: "bg-pink-600",
      sources: ["Ministério do Turismo", "IBGE", "Secretarias Estaduais"],
      indicators: [
        "Número de equipamentos culturais",
        "Eventos culturais e turísticos",
        "Taxa de ocupação hoteleira",
        "Locais históricos e patrimônios"
      ],
      application: "Conteúdo para atrair público interessado em turismo ou investimentos culturais."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white">
              Dados Públicos
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Base de Dados
              <span className="block">Oficiais do Brasil</span>
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Acesse informações organizadas e atualizadas de órgãos oficiais brasileiros, 
              compiladas em categorias estratégicas para análises de mercado e tomada de decisão.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Database className="h-4 w-4" />
                <span>10 Categorias</span>
              </div>
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                <span>Dados Atualizados</span>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                <span>Fontes Oficiais</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="demografia" className="w-full">
              {/* Tab Navigation */}
              <TabsList className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-2 h-auto p-2 bg-secondary/30 mb-8">
                {dataCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex flex-col items-center gap-2 p-3 h-auto data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <category.icon className="h-4 w-4" />
                    <span className="text-xs text-center leading-tight">
                      {category.title.split(' ')[0]}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Tab Content */}
              {dataCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <Card className="bg-gradient-card border-0 shadow-elegant">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className={`flex items-center justify-center w-16 h-16 ${category.color} rounded-xl text-white`}>
                          <category.icon className="h-8 w-8" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-3">{category.title}</CardTitle>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {category.sources.map((source, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {source}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold mb-4 text-lg">Indicadores Disponíveis</h4>
                          <ul className="space-y-3">
                            {category.indicators.map((indicator, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                                <span className="text-sm leading-relaxed">{indicator}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-4 text-lg">Aplicação Prática</h4>
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {category.application}
                          </p>
                          <div className="space-y-3">
                            <Button className="w-full">
                              <Search className="mr-2 h-4 w-4" />
                              Consultar Dados
                            </Button>
                            <Button variant="outline" className="w-full">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Ver Fontes Oficiais
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-primary text-primary-foreground border-0 shadow-glow">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Precisa de Análises Customizadas?
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Nossa equipe pode processar e analisar esses dados públicos de acordo 
                com suas necessidades específicas, criando relatórios personalizados 
                e insights estratégicos para seu negócio.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => document.getElementById('contato')?.scrollIntoView()}
              >
                Solicitar Análise Personalizada
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default DadosPublicos;