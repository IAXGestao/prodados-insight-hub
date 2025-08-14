import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Target } from "lucide-react";
import heroImage from "@/assets/hero-research.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Equipe profissional analisando dados de pesquisa de mercado"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transformando
            <span className="block bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              Dados em Resultados
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Há 25 anos encurtando os caminhos entre a necessidade do cliente e a estratégia da empresa, 
            gerando vendas e rentabilidade através de pesquisas de mercado e trade marketing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-glow transition-all transform hover:scale-105"
              onClick={() => document.getElementById('contato')?.scrollIntoView()}
            >
              Solicitar Proposta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary transition-all"
              onClick={() => document.getElementById('sobre')?.scrollIntoView()}
            >
              Conhecer a PRODADOS
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full backdrop-blur-sm">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2">25+</h3>
              <p className="text-white/80">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full backdrop-blur-sm">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2">1000+</h3>
              <p className="text-white/80">Projetos Realizados</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full backdrop-blur-sm">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2">100%</h3>
              <p className="text-white/80">Foco em Resultados</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;