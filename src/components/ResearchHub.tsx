import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  BarChart3, 
  PieChart, 
  LineChart, 
  Calendar,
  ExternalLink,
  RefreshCw
} from "lucide-react";
import dataImage from "@/assets/data-analytics.jpg";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface EconomicData {
  title: string;
  source: string;
  date: string;
  value: string;
  trend: "up" | "down";
  description: string;
}

const ResearchHub = () => {
  const [researchData, setResearchData] = useState<EconomicData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  const fetchEconomicData = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.functions.invoke('fetch-economic-data');
      
      if (error) {
        console.error('Erro ao buscar dados econômicos:', error);
        // Fallback para dados de exemplo em caso de erro
        setResearchData([
          {
            title: "Dados indisponíveis temporariamente",
            source: "Sistema",
            date: new Date().toLocaleDateString('pt-BR'),
            value: "N/A",
            trend: "up" as const,
            description: "Erro ao conectar com as fontes de dados. Tente novamente em alguns minutos."
          }
        ]);
        return;
      }

      if (data?.success && data?.data) {
        setResearchData(data.data);
        setLastUpdated(data.lastUpdated);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEconomicData();
    
    // Atualizar dados a cada 6 horas
    const interval = setInterval(fetchEconomicData, 6 * 60 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { name: "Economia", icon: TrendingUp, count: 12 },
    { name: "Consumo", icon: BarChart3, count: 8 },
    { name: "Mercado", icon: PieChart, count: 15 },
    { name: "Tendências", icon: LineChart, count: 6 }
  ];

  return (
    <section id="pesquisas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Hub de Pesquisas
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Dados Oficiais e
              <span className="block text-primary">Insights de Mercado</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Acesse dados atualizados de órgãos oficiais brasileiros e internacionais, 
              compilados e analisados pela nossa equipe de especialistas.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Categories */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Categorias de Pesquisa</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg">
                            <category.icon className="h-4 w-4 text-primary" />
                          </div>
                          <span className="font-medium">{category.name}</span>
                        </div>
                        <Badge variant="secondary">{category.count}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8">
                <img 
                  src={dataImage} 
                  alt="Dashboard de análise de dados e métricas"
                  className="rounded-lg shadow-elegant w-full"
                />
              </div>
            </div>

            {/* Research Data */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold">Dados Recentes</h3>
                  {lastUpdated && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Última atualização: {new Date(lastUpdated).toLocaleString('pt-BR')}
                    </p>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={fetchEconomicData}
                    disabled={isLoading}
                  >
                    <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                    Atualizar
                  </Button>
                  <Button variant="outline" size="sm">
                    <Calendar className="mr-2 h-4 w-4" />
                    Ver Histórico
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {isLoading ? (
                  <div className="flex items-center justify-center py-8">
                    <RefreshCw className="h-6 w-6 animate-spin text-primary" />
                    <span className="ml-2 text-muted-foreground">Carregando dados oficiais...</span>
                  </div>
                ) : (
                  researchData.map((data, index) => (
                  <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">{data.title}</CardTitle>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>Fonte: {data.source}</span>
                            <span>{data.date}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="text-2xl font-bold text-primary">{data.value}</div>
                        <div className={`flex items-center gap-1 text-sm ${
                          data.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          <TrendingUp 
                            className={`h-4 w-4 ${data.trend === 'down' ? 'rotate-180' : ''}`} 
                          />
                          {data.trend === 'up' ? 'Alta' : 'Baixa'}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {data.description}
                      </p>
                    </CardContent>
                  </Card>
                  ))
                )}
              </div>

              <div className="mt-8 text-center">
                <Button size="lg" variant="outline">
                  Ver Todos os Dados
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-primary text-primary-foreground border-0 shadow-glow">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Precisa de Análises Personalizadas?
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Nossa equipe pode desenvolver pesquisas customizadas e análises específicas 
                para as necessidades do seu negócio, utilizando nossa expertise de 25 anos.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => document.getElementById('contato')?.scrollIntoView()}
              >
                Solicitar Pesquisa Customizada
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResearchHub;