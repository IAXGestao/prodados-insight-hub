import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Users, 
  Search, 
  TrendingUp, 
  Target, 
  ShoppingCart, 
  Monitor, 
  Lightbulb,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Pesquisa de Mercado",
      description: "Análises detalhadas do mercado, concorrência e oportunidades de negócio para tomada de decisão estratégica.",
      features: ["Análise Quantitativa", "Análise Qualitativa", "Segmentação de Mercado", "Tendências do Setor"]
    },
    {
      icon: Users,
      title: "Pesquisa de Consumidor",
      description: "Compreenda profundamente seu público-alvo, comportamentos, preferências e motivações de compra.",
      features: ["Perfil do Consumidor", "Jornada do Cliente", "Satisfação e NPS", "Comportamento de Compra"]
    },
    {
      icon: Search,
      title: "Monitoramento & Prospecção",
      description: "Acompanhamento contínuo do mercado e identificação de novas oportunidades de negócio.",
      features: ["Monitoramento Competitivo", "Inteligência de Mercado", "Prospecção de Clientes", "Alertas de Tendências"]
    },
    {
      icon: TrendingUp,
      title: "Trade Marketing",
      description: "Estratégias para otimizar a presença no ponto de venda e acelerar os resultados comerciais.",
      features: ["Análise de PDV", "Estratégia de Canal", "Execução no Varejo", "Performance de Vendas"]
    },
    {
      icon: Target,
      title: "Planejamento Estratégico",
      description: "Desenvolvimento de estratégias baseadas em dados para alcançar objetivos de mercado.",
      features: ["Análise SWOT", "Plano de Marketing", "Roadmap Estratégico", "KPIs e Métricas"]
    },
    {
      icon: Monitor,
      title: "Business Intelligence",
      description: "Dashboards e relatórios inteligentes para acompanhamento de performance em tempo real.",
      features: ["Dashboards Interativos", "Relatórios Automatizados", "Análise Preditiva", "Data Visualization"]
    }
  ];

  const benefits = [
    {
      icon: Lightbulb,
      title: "Decisões Baseadas em Dados",
      description: "Elimine suposições e tome decisões estratégicas fundamentadas em evidências sólidas."
    },
    {
      icon: TrendingUp,
      title: "Aumento de ROI",
      description: "Maximize o retorno sobre investimento com estratégias otimizadas e direcionadas."
    },
    {
      icon: Target,
      title: "Vantagem Competitiva",
      description: "Antecipe tendências e mantenha-se à frente da concorrência no mercado."
    },
    {
      icon: Users,
      title: "Conhecimento do Cliente",
      description: "Compreenda profundamente seu público e desenvolva produtos/serviços mais assertivos."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Nossos Serviços
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Soluções Completas em
              <span className="block text-primary">Pesquisa e Trade Marketing</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Oferecemos uma gama abrangente de serviços que vão além da pesquisa tradicional, 
              transformando dados em ações concretas de mercado.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Por que Contratar uma Empresa de Pesquisa?
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Empresas que investem em pesquisa de mercado têm performance 70% superior 
                e crescem 3x mais rápido que a concorrência.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                className="shadow-glow"
                onClick={() => document.getElementById('contato')?.scrollIntoView()}
              >
                Solicitar Consultoria Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;