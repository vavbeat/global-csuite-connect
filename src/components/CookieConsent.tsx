import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowConsent(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 shadow-lg z-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">
            <p className="mb-2">
              Мы используем файлы cookie для улучшения вашего пользовательского опыта и анализа трафика сайта. 
              Продолжая использовать сайт, вы соглашаетесь с использованием файлов cookie в соответствии с нашей 
              <Link to="/privacy-policy" className="text-primary hover:underline mx-1">Политикой конфиденциальности</Link>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" size="sm" onClick={rejectCookies}>
              Отклонить
            </Button>
            <Button size="sm" onClick={acceptCookies}>
              Принять
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
