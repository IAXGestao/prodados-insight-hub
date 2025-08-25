import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
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
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-6">
              <NavigationMenuItem>
                <NavigationMenuLink href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium">
                  Início
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#sobre" className="text-foreground hover:text-primary transition-colors font-medium">
                  Sobre
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#servicos" className="text-foreground hover:text-primary transition-colors font-medium">
                  Serviços
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors font-medium bg-transparent">
                  Hub de Pesquisas
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-80 p-4">
                    <div className="grid gap-3">
                      <NavigationMenuLink href="/hub-pesquisas" className="block p-3 hover:bg-accent rounded-lg transition-colors">
                        <div className="font-medium mb-1">Ver Todas as Pesquisas</div>
                        <div className="text-sm text-muted-foreground">Explore nossa base completa de dados</div>
                      </NavigationMenuLink>
                      <div className="border-b my-2"></div>
                      <div className="text-sm font-medium text-muted-foreground mb-2">Categorias Principais:</div>
                      <NavigationMenuLink href="/hub-pesquisas?categoria=demografia" className="block p-2 hover:bg-accent rounded-lg transition-colors text-sm">
                        Demografia e População
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/hub-pesquisas?categoria=economia" className="block p-2 hover:bg-accent rounded-lg transition-colors text-sm">
                        Economia e Renda
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/hub-pesquisas?categoria=educacao" className="block p-2 hover:bg-accent rounded-lg transition-colors text-sm">
                        Educação
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/hub-pesquisas?categoria=saude" className="block p-2 hover:bg-accent rounded-lg transition-colors text-sm">
                        Saúde e Qualidade de Vida
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/conteudo-gratuito" className="text-foreground hover:text-primary transition-colors font-medium">
                  Conteúdo Gratuito
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/dados-publicos" className="text-foreground hover:text-primary transition-colors font-medium">
                  Dados Públicos
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#noticias" className="text-foreground hover:text-primary transition-colors font-medium">
                  Notícias
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="default" size="sm" onClick={() => document.getElementById('contato')?.scrollIntoView()}>
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
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium" onClick={toggleMenu}>
                Início
              </a>
              <a href="#sobre" className="text-foreground hover:text-primary transition-colors font-medium" onClick={toggleMenu}>
                Sobre
              </a>
              <a href="#servicos" className="text-foreground hover:text-primary transition-colors font-medium" onClick={toggleMenu}>
                Serviços
              </a>
              <a href="/hub-pesquisas" className="text-foreground hover:text-primary transition-colors font-medium" onClick={toggleMenu}>
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