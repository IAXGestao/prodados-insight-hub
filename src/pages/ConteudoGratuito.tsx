import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  TrendingUp, 
  GraduationCap, 
  BarChart3, 
  BookOpen,
  FileText,
  Download,
  Play,
  Eye
} from "lucide-react";

const ConteudoGratuito = () => {
  const contentCategories = [
    {
      title: "Liderança",
      author: "Frank Silveira",
      icon: Users,
      color: "bg-blue-600",
      items: [
        "Gestão de Equipes de Alto Desempenho",
        "Liderança Transformacional no Século XXI",
        "Como Desenvolver Soft Skills de Liderança",
        "Comunicação Assertiva para Gestores"
      ]
    },
    {
      title: "Inteligência Artificial e Análise de Dados",
      author: "Frank Silveira/Marcelo",
      icon: BarChart3,
      color: "bg-purple-600",
      items: [
        "IA Aplicada à Pesquisa de Mercado",
        "Machine Learning para Análise de Comportamento",
        "Big Data: Transformando Dados em Insights",
        "Automação de Processos com IA"
      ]
    },
    {
      title: "Economia",
      author: "Igor Lucena",
      icon: TrendingUp,
      color: "bg-green-600",
      items: [
        "Indicadores Econômicos Brasileiros",
        "Análise de Cenários Macroeconômicos",
        "Impactos da Inflação no Consumo",
        "Mercado Financeiro e Investimentos"
      ]
    },
    {
      title: "Trade Marketing e Gestão de PDV",
      author: "Especialista PRODADOS",
      icon: BookOpen,
      color: "bg-orange-600",
      items: [
        "Estratégias de Trade Marketing",
        "Gestão Eficiente de Ponto de Venda",
        "Visual Merchandising e Conversão",
        "Relacionamento com Canais de Distribuição"
      ]
    },
    {
      title: "Pesquisa de Opinião",
      author: "Marcelo Bezerra",
      icon: GraduationCap,
      color: "bg-indigo-600",
      items: [
        "Metodologias de Pesquisa Quantitativa",
        "Pesquisa Qualitativa: Técnicas e Aplicações",
        "Análise Estatística de Dados de Pesquisa",
        "Amostragem e Representatividade"
      ]
    },
    {
      title: "ESG e Sustentabilidade nos Negócios",
      author: "Equipe PRODADOS",
      icon: FileText,
      color: "bg-teal-600",
      items: [
        "ESG: Governança e Impacto Social",
        "Sustentabilidade como Vantagem Competitiva",
        "Métricas de Impacto Ambiental",
        "Relatórios de Sustentabilidade"
      ]
    },
    {
      title: "Comportamento do Consumidor",
      author: "Equipe PRODADOS",
      icon: Users,
      color: "bg-pink-600",
      items: [
        "Jornada do Cliente Digital",
        "Psicologia do Consumo",
        "Tendências de Comportamento Pós-Pandemia",
        "Segmentação e Personas"
      ]
    },
    {
      title: "Tendências e Inovação no Mercado",
      author: "Equipe PRODADOS",
      icon: TrendingUp,
      color: "bg-cyan-600",
      items: [
        "Futuro do Varejo Brasileiro",
        "Tecnologias Disruptivas no Mercado",
        "Inovação em Modelos de Negócio",
        "Startups e Ecossistema de Inovação"
      ]
    }
  ];

  const formatTypes = [
    { name: "E-books", icon: FileText, count: 24 },
    { name: "Webinars", icon: Play, count: 18 },
    { name: "Relatórios", icon: Download, count: 12 },
    { name: "Cases", icon: Eye, count: 15 }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white">
              Conteúdo Gratuito
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Conhecimento de
              <span className="block">Qualidade, Sem Custo</span>
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Acesse gratuitamente nosso acervo de conteúdos especializados, 
              desenvolvidos por nossa equipe de experts com 25 anos de experiência 
              em pesquisa e análise de mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {formatTypes.map((format, index) => (
              <Card key={index} className="text-center bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6">
                  <format.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">{format.count}</div>
                  <div className="text-sm text-muted-foreground">{format.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Áreas de Conhecimento
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore nossos conteúdos organizados por especialidade, 
                cada um desenvolvido por nossos especialistas reconhecidos no mercado.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {contentCategories.map((category, index) => (
                <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`flex items-center justify-center w-12 h-12 ${category.color} rounded-lg text-white`}>
                        <category.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          Por {category.author}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full mt-4">
                      Ver Conteúdos
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-primary text-primary-foreground border-0 shadow-glow">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Receba Novos Conteúdos Primeiro
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Cadastre-se em nossa newsletter e seja o primeiro a acessar nossos 
                materiais exclusivos, webinars e análises de mercado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-2 rounded-lg text-foreground"
                />
                <Button 
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Cadastrar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ConteudoGratuito;