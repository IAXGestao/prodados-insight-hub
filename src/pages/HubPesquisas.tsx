import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ResearchDataViewer from "@/components/ResearchDataViewer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  Users, DollarSign, GraduationCap, Heart, Shield, Home,
  Leaf, Car, Camera, TrendingUp, Search, Filter, FileText, 
  Download, RefreshCw, ExternalLink, Calendar, MapPin
} from "lucide-react";

const HubPesquisas = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState<any[]>([]);
  const [datasets, setDatasets] = useState<any[]>([]);
  const [selectedDataset, setSelectedDataset] = useState<any>(null);
  const [researchData, setResearchData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchCategories();
    fetchDatasets();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('research_categories')
        .select('*')
        .order('name');

      if (error) throw error;

      const allCategories = [
        { id: "all", name: "Todas as Categorias", icon: "TrendingUp", color: "bg-primary", slug: "all" },
        ...data
      ];
      
      setCategories(allCategories);
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar as categorias",
        variant: "destructive"
      });
    }
  };

  const fetchDatasets = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('research_datasets')
        .select(`
          *,
          research_categories (
            id,
            name,
            slug,
            icon,
            color
          )
        `)
        .eq('status', 'active')
        .order('title');

      if (error) throw error;
      setDatasets(data || []);
    } catch (error) {
      console.error('Erro ao buscar datasets:', error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar os datasets",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchResearchData = async (datasetId: string, datasetTitle: string) => {
    setIsLoadingData(true);
    setSelectedDataset({ id: datasetId, title: datasetTitle });
    
    try {
      // First try to get cached data
      const { data: cachedData, error: cacheError } = await supabase
        .from('research_data')
        .select('*')
        .eq('dataset_id', datasetId)
        .order('last_updated', { ascending: false })
        .limit(1)
        .single();

      if (cachedData && !cacheError) {
        setResearchData(Array.isArray(cachedData.data) ? cachedData.data : [cachedData.data]);
        
        // Check if data is fresh (less than 24 hours old)
        const lastUpdated = new Date(cachedData.last_updated);
        const now = new Date();
        const hoursDiff = (now.getTime() - lastUpdated.getTime()) / (1000 * 60 * 60);
        
        if (hoursDiff < 24) {
          setIsLoadingData(false);
          return;
        }
      }

      // Fetch fresh data from API
      const { data: functionData, error: functionError } = await supabase.functions.invoke(
        'fetch-research-data',
        {
          body: { datasetId, region: 'Brasil' }
        }
      );

      if (functionError) throw functionError;

      if (functionData?.success) {
        setResearchData(functionData.data || []);
        toast({
          title: "Sucesso",
          description: `Dados atualizados: ${functionData.count} registros encontrados`,
        });
      } else {
        throw new Error(functionData?.error || 'Erro desconhecido');
      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar os dados da pesquisa",
        variant: "destructive"
      });
      setResearchData([]);
    } finally {
      setIsLoadingData(false);
    }
  };

  const getIconComponent = (iconName: string) => {
    const iconMap: Record<string, any> = {
      Users, DollarSign, GraduationCap, Heart, Shield, Home,
      Leaf, Car, Camera, TrendingUp, FileText
    };
    return iconMap[iconName] || FileText;
  };

  const filteredDatasets = datasets.filter(dataset => {
    const matchesSearch = dataset.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dataset.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dataset.tags?.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || dataset.research_categories?.slug === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Hub de Pesquisas
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore nossa ampla base de dados e pesquisas organizadas por categorias para encontrar 
              insights valiosos para seus projetos e análises.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Pesquisar por título, descrição ou tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
          </div>

          {/* Categories Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Filter className="h-6 w-6 text-primary" />
              Categorias de Pesquisa
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((category) => {
                const Icon = getIconComponent(category.icon);
                const isSelected = selectedCategory === (category.slug || category.id);
                return (
                  <Button
                    key={category.id}
                    variant={isSelected ? "default" : "outline"}
                    className={`h-auto p-4 flex flex-col items-center gap-2 transition-all hover:scale-105 ${
                      isSelected ? "border-primary shadow-lg" : ""
                    }`}
                    onClick={() => setSelectedCategory(category.slug || category.id)}
                  >
                    <Icon className="h-6 w-6" />
                    <span className="text-sm font-medium text-center leading-tight">
                      {category.name}
                    </span>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              {isLoading ? "Carregando..." : 
               `Mostrando ${filteredDatasets.length} pesquisa${filteredDatasets.length !== 1 ? 's' : ''} 
               ${selectedCategory !== "all" ? `em ${categories.find(c => (c.slug || c.id) === selectedCategory)?.name}` : ''}
               ${searchTerm ? `para "${searchTerm}"` : ''}`}
            </p>
          </div>

          {/* Research Results */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDatasets.map((dataset) => {
              const categoryInfo = dataset.research_categories;
              const Icon = getIconComponent(categoryInfo?.icon);
              
              return (
                <Card key={dataset.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="h-5 w-5 text-primary" />
                        <Badge variant="secondary" className="text-xs">
                          {categoryInfo?.name}
                        </Badge>
                      </div>
                      <Badge 
                        variant={dataset.status === "active" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        Disponível
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">{dataset.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {dataset.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span><strong>Fonte:</strong> {dataset.source}</span>
                        <span><strong>Atualizado:</strong> {new Date(dataset.updated_at).getFullYear()}</span>
                      </div>
                      
                      {dataset.tags && dataset.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {dataset.tags.map((tag: string, index: number) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                      
                      <div className="flex gap-2 pt-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              size="sm" 
                              className="flex-1"
                              onClick={() => fetchResearchData(dataset.id, dataset.title)}
                            >
                              Ver Dados
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh]">
                            <DialogHeader>
                              <DialogTitle className="flex items-center gap-2">
                                <Icon className="h-6 w-6 text-primary" />
                                {selectedDataset?.title || dataset.title}
                              </DialogTitle>
                              <DialogDescription>
                                Fonte: {dataset.source} | Categoria: {categoryInfo?.name}
                              </DialogDescription>
                            </DialogHeader>
                            
                            <ScrollArea className="h-[60vh]">
                              {isLoadingData ? (
                                <div className="flex items-center justify-center p-8">
                                  <RefreshCw className="h-8 w-8 animate-spin text-primary" />
                                  <span className="ml-2">Carregando dados...</span>
                                </div>
                              ) : researchData.length > 0 ? (
                                <ResearchDataViewer 
                                  data={researchData}
                                  title={selectedDataset?.title || dataset.title}
                                  source={dataset.source}
                                  sourceUrl={dataset.source_url}
                                />
                              ) : (
                                <div className="text-center p-8">
                                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                                  <p className="text-muted-foreground">Nenhum dado encontrado</p>
                                </div>
                              )}
                            </ScrollArea>
                          </DialogContent>
                        </Dialog>
                        
                        {dataset.source_url && (
                          <Button size="sm" variant="outline" className="flex-1" asChild>
                            <a href={dataset.source_url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Fonte
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* No Results */}
          {!isLoading && filteredDatasets.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nenhuma pesquisa encontrada</h3>
              <p className="text-muted-foreground mb-4">
                Tente ajustar seus filtros ou termo de busca.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
              >
                Limpar Filtros
              </Button>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-subtle border-border/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Não encontrou o que procura?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Nossa equipe pode desenvolver pesquisas customizadas para atender suas necessidades específicas.
                </p>
                <Button size="lg" onClick={() => document.getElementById('contato')?.scrollIntoView()}>
                  Solicitar Pesquisa Customizada
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default HubPesquisas;