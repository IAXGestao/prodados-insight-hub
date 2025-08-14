import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  ArrowRight,
  Lightbulb,
  TrendingUp,
  Users,
  BarChart3
} from "lucide-react";

const News = () => {
  const newsArticles = [
    {
      category: "P&D",
      title: "Investimento em P&D: O Segredo das Empresas Líderes de Mercado",
      excerpt: "Estudo revela que empresas que investem acima de 3% do faturamento em pesquisa e desenvolvimento apresentam crescimento 40% superior à média do setor.",
      date: "15 Jan 2025",
      readTime: "5 min",
      featured: true
    },
    {
      category: "Inovação", 
      title: "Inteligência Artificial na Pesquisa de Mercado: Tendências 2025",
      excerpt: "Como a IA está revolucionando a coleta e análise de dados, proporcionando insights mais precisos e em tempo real para as decisões estratégicas.",
      date: "12 Jan 2025",
      readTime: "4 min",
      featured: false
    },
    {
      category: "Mercado",
      title: "Comportamento do Consumidor Pós-Pandemia: O Que Mudou?",
      excerpt: "Análise completa das transformações nos hábitos de consumo brasileiro e como as empresas estão se adaptando às novas demandas.",
      date: "10 Jan 2025", 
      readTime: "6 min",
      featured: false
    },
    {
      category: "Estratégia",
      title: "Trade Marketing Digital: Maximizando Resultados no E-commerce",
      excerpt: "Estratégias práticas para otimizar a presença digital e acelerar vendas através de análises de mercado e posicionamento estratégico.",
      date: "08 Jan 2025",
      readTime: "4 min",
      featured: false
    },
    {
      category: "Pesquisa",
      title: "Metodologias Híbridas: Combinando Pesquisa Quantitativa e Qualitativa",
      excerpt: "Abordagens inovadoras que integram dados quantitativos com insights qualitativos para uma visão 360° do mercado.",
      date: "05 Jan 2025",
      readTime: "5 min", 
      featured: false
    }
  ];

  const categories = [
    { name: "P&D", icon: Lightbulb, color: "bg-blue-100 text-blue-800" },
    { name: "Inovação", icon: TrendingUp, color: "bg-green-100 text-green-800" },
    { name: "Mercado", icon: BarChart3, color: "bg-purple-100 text-purple-800" },
    { name: "Estratégia", icon: Users, color: "bg-orange-100 text-orange-800" },
    { name: "Pesquisa", icon: BarChart3, color: "bg-indigo-100 text-indigo-800" }
  ];

  const getCategoryStyle = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.color : "bg-gray-100 text-gray-800";
  };

  return (
    <section id="noticias" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Notícias e Insights
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Últimas Tendências em
              <span className="block text-primary">Pesquisa & Desenvolvimento</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Fique atualizado com as principais novidades, tendências e melhores práticas 
              do mercado de pesquisa e trade marketing.
            </p>
          </div>

          {/* Featured Article */}
          {newsArticles.filter(article => article.featured).map((article, index) => (
            <Card key={index} className="mb-12 bg-background border-0 shadow-elegant overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="bg-gradient-primary p-8 lg:p-12 text-white flex items-center">
                  <div>
                    <Badge className={`mb-4 ${getCategoryStyle(article.category)}`}>
                      {article.category}
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-white/90 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-white/80 mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readTime} de leitura
                      </div>
                    </div>
                    <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                      Ler Artigo Completo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="bg-muted p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <Lightbulb className="h-16 w-16 text-primary" />
                    </div>
                    <p className="text-muted-foreground font-medium">Artigo em Destaque</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {newsArticles.filter(article => !article.featured).map((article, index) => (
              <Card key={index} className="bg-background border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getCategoryStyle(article.category)}>
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight hover:text-primary transition-colors cursor-pointer">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary-dark">
                    Ler mais
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <Card className="bg-primary text-primary-foreground border-0 shadow-glow">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Receba Insights Exclusivos
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Cadastre-se para receber nossa newsletter semanal com as principais 
                tendências e análises do mercado de pesquisa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-2 rounded-lg text-primary bg-white border-0 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Assinar Newsletter
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default News;