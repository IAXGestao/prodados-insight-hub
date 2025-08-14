import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Building2
} from "lucide-react";
import partnershipImage from "@/assets/business-handshake.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    segment: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.segment) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado pelo interesse na PRODADOS!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      segment: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contato" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Entre em Contato
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vamos Transformar Seus Dados em
              <span className="block text-primary">Resultados Extraordinários</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Solicite uma consultoria gratuita e descubra como a PRODADOS pode impulsionar 
              o crescimento do seu negócio através de pesquisas estratégicas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="bg-background border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Solicitar Proposta</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(85) 99999-9999"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="segment">Segmento da Empresa *</Label>
                      <Select value={formData.segment} onValueChange={(value) => handleInputChange('segment', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o segmento" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="alimenticio">Alimentício</SelectItem>
                          <SelectItem value="automotivo">Automotivo</SelectItem>
                          <SelectItem value="beleza">Beleza e Cosméticos</SelectItem>
                          <SelectItem value="construcao">Construção Civil</SelectItem>
                          <SelectItem value="educacao">Educação</SelectItem>
                          <SelectItem value="farmaceutico">Farmacêutico</SelectItem>
                          <SelectItem value="financeiro">Financeiro</SelectItem>
                          <SelectItem value="industrial">Industrial</SelectItem>
                          <SelectItem value="retail">Retail/Varejo</SelectItem>
                          <SelectItem value="saude">Saúde</SelectItem>
                          <SelectItem value="tecnologia">Tecnologia</SelectItem>
                          <SelectItem value="telecomunicacoes">Telecomunicações</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Conte-nos sobre seu projeto ou necessidade de pesquisa..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full shadow-glow">
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Solicitação
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Image */}
            <div className="space-y-8">
              <div>
                <img 
                  src={partnershipImage} 
                  alt="Parceria empresarial e colaboração"
                  className="rounded-lg shadow-elegant w-full"
                />
              </div>

              <Card className="bg-primary text-primary-foreground border-0 shadow-glow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 opacity-80" />
                      <div>
                        <p className="font-medium">Telefones</p>
                        <p className="text-sm opacity-90">(85) 98136-2242</p>
                        <p className="text-sm opacity-90">(85) 3261-3444</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 opacity-80" />
                      <div>
                        <p className="font-medium">E-mail</p>
                        <p className="text-sm opacity-90">prodados@prodadospesquisa.com.br</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 opacity-80" />
                      <div>
                        <p className="font-medium">Localização</p>
                        <p className="text-sm opacity-90">Fortaleza, Ceará - Brasil</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 opacity-80" />
                      <div>
                        <p className="font-medium">Horário de Atendimento</p>
                        <p className="text-sm opacity-90">Segunda a Sexta: 8h às 18h</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold">Por que escolher a PRODADOS?</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      25 anos de experiência comprovada
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Tecnologia própria (Sistema Sphinx)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Operação nacional
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Equipe altamente qualificada
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Grandes clientes e cases de sucesso
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;