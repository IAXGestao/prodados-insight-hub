import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const whatsappNumber = "5585981362242";
    const message = "Olá! Gostaria de conhecer mais sobre os serviços da PRODADOS.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">PRODADOS</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Há 25 anos transformando dados em resultados para empresas de todos os segmentos. 
              Especialistas em pesquisa de mercado e trade marketing com tecnologia própria e 
              operação nacional.
            </p>
            <Button 
              variant="secondary" 
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white border-0"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 opacity-80" />
                <div>
                  <p>(85) 98136-2242</p>
                  <p>(85) 3261-3444</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 opacity-80" />
                <p>prodados@prodadospesquisa.com.br</p>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 opacity-80" />
                <p>Fortaleza, Ceará - Brasil</p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 opacity-80" />
                <p>Seg a Sex: 8h às 18h</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2 text-sm">
              <a href="#inicio" className="block hover:text-accent transition-colors">
                Início
              </a>
              <a href="#sobre" className="block hover:text-accent transition-colors">
                Sobre Nós
              </a>
              <a href="#servicos" className="block hover:text-accent transition-colors">
                Serviços
              </a>
              <a href="#pesquisas" className="block hover:text-accent transition-colors">
                Hub de Pesquisas
              </a>
              <a href="#noticias" className="block hover:text-accent transition-colors">
                Notícias
              </a>
              <a href="#contato" className="block hover:text-accent transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-primary-foreground/80">
            © {currentYear} PRODADOS. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;