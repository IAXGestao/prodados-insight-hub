import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (sectionId: string) => {
    if (isHomePage) {
      // Se estiver na página inicial, apenas faça scroll
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Se estiver em outra página, vá para a página inicial e depois faça scroll
      window.location.href = `/#${sectionId}`;
    }
  };

  const NavLink = ({ href, sectionId, children, className = "" }: { 
    href?: string; 
    sectionId?: string; 
    children: React.ReactNode; 
    className?: string;
  }) => {
    if (href) {
      return (
        <Link to={href} className={`text-foreground hover:text-primary transition-colors font-medium ${className}`}>
          {children}
        </Link>
      );
    }
    
    if (sectionId) {
      return (
        <button 
          onClick={() => handleNavClick(sectionId)}
          className={`text-foreground hover:text-primary transition-colors font-medium ${className}`}
        >
          {children}
        </button>
      );
    }
    
    return <span className={className}>{children}</span>;
  };

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
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                PRODADOS
              </h1>
              <span className="ml-2 text-sm text-muted-foreground hidden sm:block">
                Pesquisa & Insight Hub
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-6">
              <NavigationMenuItem>
                <NavLink sectionId="inicio">
                  Início
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink sectionId="sobre">
                  Sobre
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink sectionId="servicos">
                  Serviços
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors font-medium bg-transparent">
                  Hub de Pesquisas
                </NavigationMenuTrigger>
                <NavigationMenuContent className="z-50">
                  <div className="w-80 p-4 bg-background border border-border rounded-lg shadow-lg">
                    <div className="grid gap-3">
                      <NavigationMenuLink asChild>
                        <Link to="/hub-pesquisas" className="block p-3 hover:bg-accent rounded-lg transition-colors">
                          <div className="font-medium mb-1">Ver Todas as Pesquisas</div>
                          <div className="text-sm text-muted-foreground">Explore nossa base completa de dados</div>
                        </Link>
                      </NavigationMenuLink>
                      <div className="border-b my-2"></div>
                      <NavLink sectionId="pesquisas" className="block p-2 hover:bg-accent rounded-lg transition-colors text-sm">
                        Hub na Página Inicial
                      </NavLink>
                      <div className="text-sm font-medium text-muted-foreground mb-2">Categorias Principais:</div>
                      <NavigationMenuLink asChild>
                        <Link to="/hub-pesquisas?categoria=demografia" className="block p-2 hover:bg-accent rounded-lg transition-colors text-sm">
                          Demografia e População
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/hub-pesquisas?categoria=economia" className="block p-2 hover:bg-accent rounded-lg transition-colors text-sm">
                          Economia e Renda
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/hub-pesquisas?categoria=educacao" className="block p-2 hover:bg-accent rounded-lg transition-colors text-sm">
                          Educação
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/hub-pesquisas?categoria=saude" className="block p-2 hover:bg-accent rounded-lg transition-colors text-sm">
                          Saúde e Qualidade de Vida
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink href="/conteudo-gratuito">
                  Conteúdo Gratuito
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink href="/dados-publicos">
                  Dados Públicos
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink sectionId="noticias">
                  Notícias
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button 
                  variant="default" 
                  size="sm" 
                  onClick={() => handleNavClick('contato')}
                >
                  Contato
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

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
              <button 
                onClick={() => {
                  handleNavClick('inicio');
                  toggleMenu();
                }}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Início
              </button>
              <button 
                onClick={() => {
                  handleNavClick('sobre');
                  toggleMenu();
                }}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => {
                  handleNavClick('servicos');
                  toggleMenu();
                }}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Serviços
              </button>
              <Link 
                to="/hub-pesquisas" 
                className="text-foreground hover:text-primary transition-colors font-medium" 
                onClick={toggleMenu}
              >
                Hub de Pesquisas
              </Link>
              <Link 
                to="/conteudo-gratuito" 
                className="text-foreground hover:text-primary transition-colors font-medium" 
                onClick={toggleMenu}
              >
                Conteúdo Gratuito
              </Link>
              <Link 
                to="/dados-publicos" 
                className="text-foreground hover:text-primary transition-colors font-medium" 
                onClick={toggleMenu}
              >
                Dados Públicos
              </Link>
              <button 
                onClick={() => {
                  handleNavClick('noticias');
                  toggleMenu();
                }}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Notícias
              </button>
              <Button 
                variant="default" 
                size="sm" 
                className="w-fit" 
                onClick={() => {
                  handleNavClick('contato');
                  toggleMenu();
                }}
              >
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