import { Button } from "@/components/ui/button";
import CTAForm from "./CTAForm";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { href: "#services", label: "Сервисы" },
    { href: "#cases", label: "Кейсы" },
    { href: "#db", label: "Компании" },
    { href: "#process", label: "Процесс" },
    { href: "#pricing", label: "Пакеты" },
    { href: "#faq", label: "FAQ" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="#" aria-label="AFFORT" className="font-semibold tracking-tight text-lg">AFFORT</a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="hover:text-accent"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </div>
        
        <div className="flex items-center gap-3">
          <a className="hidden md:inline-block" href="https://calendly.com/" aria-label="Забронировать встречу">
            <Button variant="outline" size="sm">Консультация</Button>
          </a>
          <CTAForm />
          
          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Открыть меню">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium hover:text-accent"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                ))}
                <a 
                  href="https://calendly.com/" 
                  className="text-lg font-medium hover:text-accent"
                  onClick={closeMenu}
                >
                  Консультация
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
