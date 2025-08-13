const Footer = () => {
  return (
    <footer className="mt-16 border-t border-border/60">
      <div className="container mx-auto py-10 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="font-semibold mb-2">AFFORT</div>
          <p className="text-muted-foreground">Ваш надёжный партнёр в бизнес-путешествии.</p>
        </div>
        <div>
          <div className="font-medium mb-2">Контент</div>
          <ul className="space-y-1 text-muted-foreground">
            <li><a href="#cases" className="hover:text-accent">Кейсы</a></li>
            <li><a href="#db" className="hover:text-accent">Компании</a></li>
            <li><a href="#pricing" className="hover:text-accent">Пакеты</a></li>
            <li><a href="/privacy-policy" className="hover:text-accent">Политика конфиденциальности</a></li>
            <li><a href="/user-agreement" className="hover:text-accent">Пользовательское соглашение</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-2">Контакты</div>
          <p className="text-muted-foreground">hello@affort.ru</p>
          <a href="https://t.me/voevodinalex" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Написать в TG
          </a>
          <p className="text-muted-foreground mt-4">© {new Date().getFullYear()} AFFORT</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
