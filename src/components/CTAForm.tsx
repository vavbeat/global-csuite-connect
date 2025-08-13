import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import ConsentForm from "@/components/ConsentForm";

const CTAForm = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consent) {
      toast({ 
        title: "Ошибка", 
        description: "Пожалуйста, дайте согласие на обработку персональных данных.", 
        variant: "destructive" 
      });
      return;
    }
    
    setOpen(false);
    toast({ title: "Запрос отправлен", description: "Мы свяжемся с вами в течение 1 рабочего дня." });
  };

  const handleDownload = (fileName: string) => {
    const link = document.createElement('a');
    link.href = `/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="hero" size="lg" aria-label="Запросить программу миссии">Запросить программу миссии</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Запросить программу миссии</DialogTitle>
            <DialogDescription>
              Оставьте контакты и пожелания по рынкам/отраслям. Мы подготовим предварительный скоп и таймлайн.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input required placeholder="Имя" aria-label="Имя" />
              <Input required type="email" placeholder="Email" aria-label="Email" />
              <Input placeholder="Компания" aria-label="Компания" className="md:col-span-2" />
              <Input placeholder="Телефон" aria-label="Телефон" className="md:col-span-2" />
            </div>
            <Textarea placeholder="Цели миссии, рынки, отрасли (по желанию)" aria-label="Комментарий" />
            <ConsentForm onConsentChange={setConsent} />
            <DialogFooter>
              <Button type="submit" variant="default">Отправить</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button 
          variant="outline" 
          size="lg" 
          onClick={() => handleDownload('Affort_Brief_Friendly_Adaptive.xlsx')}
          aria-label="Скачать бриф"
        >
          Скачать бриф
        </Button>
      </div>
    </div>
  );
};

export default CTAForm;
