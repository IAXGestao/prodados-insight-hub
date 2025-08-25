import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users, DollarSign, GraduationCap, Heart, Shield, Home,
  Leaf, Car, Camera, TrendingUp, Search, Filter, FileText
} from "lucide-react";

const HubPesquisas = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Todas as Categorias", icon: TrendingUp, color: "bg-primary" },
    { id: "demografia", name: "Demografia e População", icon: Users, color: "bg-blue-500" },
    { id: "economia", name: "Economia e Renda", icon: DollarSign, color: "bg-green-500" },
    { id: "educacao", name: "Educação", icon: GraduationCap, color: "bg-purple-500" },
    { id: "saude", name: "Saúde e Qualidade de Vida", icon: Heart, color: "bg-red-500" },
    { id: "desenvolvimento", name: "Desenvolvimento Humano", icon: TrendingUp, color: "bg-orange-500" },
    { id: "seguranca", name: "Segurança Pública", icon: Shield, color: "bg-gray-600" },
    { id: "habitacao", name: "Habitação e Infraestrutura", icon: Home, color: "bg-indigo-500" },
    { id: "ambiente", name: "Meio Ambiente", icon: Leaf, color: "bg-green-600" },
    { id: "mobilidade", name: "Mobilidade e Transporte", icon: Car, color: "bg-blue-600" },
    { id: "cultura", name: "Cultura e Turismo", icon: Camera, color: "bg-pink-500" }
  ];

  const pesquisas = [
    {
      id: 1,
      title: "Censo Demográfico 2022",
      category: "demografia",
      description: "Dados completos sobre população, densidade demográfica e estrutura etária",
      source: "IBGE",
      date: "2024",
      tags: ["População", "Densidade", "Censo"],
      status: "Disponível"
    },
    {
      id: 2,
      title: "PIB Municipal 2023",
      category: "economia",
      description: "Produto Interno Bruto por município e análise setorial",
      source: "IBGE - SIDRA",
      date: "2024",
      tags: ["PIB", "Economia", "Municipal"],
      status: "Disponível"
    },
    {
      id: 3,
      title: "IDEB 2023",
      category: "educacao",
      description: "Índice de Desenvolvimento da Educação Básica por município",
      source: "INEP",
      date: "2024",
      tags: ["Educação", "IDEB", "Qualidade"],
      status: "Disponível"
    },
    {
      id: 4,
      title: "Sistema de Mortalidade (SIM)",
      category: "saude",
      description: "Dados sobre mortalidade e expectativa de vida por região",
      source: "DataSUS",
      date: "2024",
      tags: ["Saúde", "Mortalidade", "Expectativa"],
      status: "Disponível"
    },
    {
      id: 5,
      title: "IDH Municipal",
      category: "desenvolvimento",
      description: "Índice de Desenvolvimento Humano por município",
      source: "PNUD - Atlas Brasil",
      date: "2023",
      tags: ["IDH", "Desenvolvimento", "Social"],
      status: "Disponível"
    },
    {
      id: 6,
      title: "Estatísticas Criminais",
      category: "seguranca",
      description: "Dados sobre criminalidade e segurança pública",
      source: "SINESP",
      date: "2024",
      tags: ["Segurança", "Criminalidade", "Violência"],
      status: "Disponível"
    }
  ];

  const filteredPesquisas = pesquisas.filter(pesquisa => {
    const matchesSearch = pesquisa.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pesquisa.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pesquisa.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || pesquisa.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Hub de Pesquisas
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore nossa ampla base de dados e pesquisas organizadas por categorias para encontrar 
              insights valiosos para seus projetos e análises.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Pesquisar por título, descrição ou tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
          </div>

          {/* Categories Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Filter className="h-6 w-6 text-primary" />
              Categorias de Pesquisa
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((category) => {
                const Icon = category.icon;
                const isSelected = selectedCategory === category.id;
                return (
                  <Button
                    key={category.id}
                    variant={isSelected ? "default" : "outline"}
                    className={`h-auto p-4 flex flex-col items-center gap-2 transition-all hover:scale-105 ${
                      isSelected ? "border-primary shadow-lg" : ""
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <Icon className="h-6 w-6" />
                    <span className="text-sm font-medium text-center leading-tight">
                      {category.name}
                    </span>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Mostrando {filteredPesquisas.length} pesquisa{filteredPesquisas.length !== 1 ? 's' : ''} 
              {selectedCategory !== "all" && ` em ${categories.find(c => c.id === selectedCategory)?.name}`}
              {searchTerm && ` para "${searchTerm}"`}
            </p>
          </div>

          {/* Research Results */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPesquisas.map((pesquisa) => {
              const categoryInfo = categories.find(c => c.id === pesquisa.category);
              const Icon = categoryInfo?.icon || FileText;
              
              return (
                <Card key={pesquisa.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="h-5 w-5 text-primary" />
                        <Badge variant="secondary" className="text-xs">
                          {categoryInfo?.name}
                        </Badge>
                      </div>
                      <Badge 
                        variant={pesquisa.status === "Disponível" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {pesquisa.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">{pesquisa.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {pesquisa.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span><strong>Fonte:</strong> {pesquisa.source}</span>
                        <span><strong>Ano:</strong> {pesquisa.date}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {pesquisa.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" className="flex-1">
                          Ver Dados
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* No Results */}
          {filteredPesquisas.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nenhuma pesquisa encontrada</h3>
              <p className="text-muted-foreground mb-4">
                Tente ajustar seus filtros ou termo de busca.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
              >
                Limpar Filtros
              </Button>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-subtle border-border/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Não encontrou o que procura?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Nossa equipe pode desenvolver pesquisas customizadas para atender suas necessidades específicas.
                </p>
                <Button size="lg" onClick={() => document.getElementById('contato')?.scrollIntoView()}>
                  Solicitar Pesquisa Customizada
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default HubPesquisas;