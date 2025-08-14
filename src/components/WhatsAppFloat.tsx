import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const whatsappNumber = "5585981362242";
  const message = "Olá! Gostaria de conhecer mais sobre os serviços da PRODADOS.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 text-white shadow-glow transition-all duration-300 hover:scale-110"
        aria-label="Entrar em contato via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Fale conosco no WhatsApp
        <div className="absolute -bottom-1 right-4 w-2 h-2 bg-gray-800 rotate-45"></div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;