import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Heart, Award, Lightbulb, Users, CheckCircle, Zap } from "lucide-react";
import corporateImage from "@/assets/corporate-building.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excelência",
      description: "Busca contínua pela qualidade e precisão em todas as análises e entregas."
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Abertura e proatividade na adoção de novas tecnologias e metodologias para oferecer soluções de ponta."
    },
    {
      icon: Target,
      title: "Orientação para Resultados",
      description: "Foco em gerar valor real e mensurável para os clientes, impulsionando sua empresa nos mercados."
    },
    {
      icon: CheckCircle,
      title: "Integridade",
      description: "Atuação ética e transparente em todas as relações e processos, garantindo a privacidade e segurança dos dados."
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Trabalho em equipe e parceria com clientes para construir soluções conjuntas e eficazes."
    },
    {
      icon: Zap,
      title: "Adaptabilidade",
      description: "Capacidade de se ajustar rapidamente às mudanças do mercado e às necessidades dos clientes."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Sobre a PRODADOS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              25 Anos Transformando Dados em 
              <span className="block text-primary">Estratégias de Sucesso</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A PRODADOS se destaca por sua abrangência de serviços, que vão além da pesquisa de mercado tradicional, 
              incluindo monitoramento, prospecção, planejamento, execução e trade marketing.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={corporateImage} 
                alt="Escritório corporativo moderno da PRODADOS"
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
            <div className="space-y-8">
              {/* Mission */}
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">Nossa Missão</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Existimos para encurtar os caminhos entre a necessidade do cliente e a estratégia da empresa, 
                    transformando dados em ações de mercado que geram vendas e rentabilidade.
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">Nossa Visão</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Ser a principal parceira estratégica para empresas que buscam transformar informações em resultados tangíveis, 
                    liderando a inovação em pesquisa de mercado e trade marketing com tecnologias avançadas.
                  </p>
                </CardContent>
              </Card>

              {/* Differentials */}
              <Card className="bg-primary text-primary-foreground border-0 shadow-glow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="h-6 w-6" />
                    <h3 className="text-xl font-semibold">Nosso Diferencial</h3>
                  </div>
                  <p className="opacity-90">
                    Capacidade de transformar análises em ações de mercado que geram vendas e rentabilidade, 
                    com tecnologia própria (Sistema Sphinx) e operação em todo território nacional.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Nossos Valores</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam nossa atuação e garantem a excelência em todos os projetos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;