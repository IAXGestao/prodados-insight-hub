import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+5585981362242" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone className="h-3 w-3" />
              (85) 98136-2242
            </a>
            <a href="tel:+558532613444" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone className="h-3 w-3" />
              (85) 3261-3444
            </a>
          </div>
          <a href="mailto:prodados@prodadospesquisa.com.br" className="flex items-center gap-1 hover:text-accent transition-colors">
            <Mail className="h-3 w-3" />
            prodados@prodadospesquisa.com.br
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              PRODADOS
            </h1>
            <span className="ml-2 text-sm text-muted-foreground hidden sm:block">
              Pesquisa & Insight Hub
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium">
              Início
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors font-medium">
              Sobre
            </a>
            <a href="#servicos" className="text-foreground hover:text-primary transition-colors font-medium">
              Serviços
            </a>
            <a href="#pesquisas" className="text-foreground hover:text-primary transition-colors font-medium">
              Hub de Pesquisas
            </a>
            <a href="/conteudo-gratuito" className="text-foreground hover:text-primary transition-colors font-medium">
              Conteúdo Gratuito
            </a>
            <a href="/dados-publicos" className="text-foreground hover:text-primary transition-colors font-medium">
              Dados Públicos
            </a>
            <a href="#noticias" className="text-foreground hover:text-primary transition-colors font-medium">
              Notícias
            </a>
            <Button variant="default" size="sm" onClick={() => document.getElementById('contato')?.scrollIntoView()}>
              Contato
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            className="md:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium" onClick={toggleMenu}>
                Início
              </a>
              <a href="#sobre" className="text-foreground hover:text-primary transition-colors font-medium" onClick={toggleMenu}>
                Sobre
              </a>
              <a href="#servicos" className="text-foreground hover:text-primary transition-colors font-medium" onClick={toggleMenu}>
                Serviços
              </a>
              <a href="#pesquisas" className="text-foreground hover:text-primary transition-colors font-medium" onClick={toggleMenu}>
                Hub de Pesquisas
              </a>
              <a href="/conteudo-gratuito" className="text-foreground hover:text-primary transition-colors font-medium" onClick={toggleMenu}>
                Conteúdo Gratuito
              </a>
              <a href="/dados-publicos" className="text-foreground hover:text-primary transition-colors font-medium" onClick={toggleMenu}>
                Dados Públicos
              </a>
              <a href="#noticias" className="text-foreground hover:text-primary transition-colors font-medium" onClick={toggleMenu}>
                Notícias
              </a>
              <Button variant="default" size="sm" className="w-fit" onClick={() => {
                document.getElementById('contato')?.scrollIntoView();
                toggleMenu();
              }}>
                Contato
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;