import heroImg from "@/assets/affort-hero.jpg";
import { Button } from "@/components/ui/button";
import CTAForm from "@/components/CTAForm";
import { useEffect, useState } from "react";

const Hero = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPos({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `radial-gradient(600px 400px at ${pos.x}% ${pos.y}%, hsl(var(--gold) / 0.18), transparent 60%)`,
        }}
        aria-hidden
      />
      <img src={heroImg} alt="Ночной бизнес-скайллайн — символ международных миссий" loading="eager" className="w-full h-[56vh] md:h-[68vh] object-cover opacity-80" />
      <div className="container mx-auto -mt-24 md:-mt-36 relative">
        <div className="max-w-3xl bg-card/60 backdrop-blur-md p-6 md:p-8 rounded-lg border border-border shadow-[var(--shadow-elevate)]">
          <p className="text-xs tracking-widest text-muted-foreground uppercase mb-3">Миссия AFFORT</p>
          <h1 id="hero-title" className="text-3xl md:text-5xl font-semibold leading-tight">
            Международные бизнес‑миссии для российских корпораций
          </h1>
          <p className="mt-4 text-muted-foreground text-base md:text-lg">
            Полный цикл: от аналитики целевых компаний до пост‑визитной имплементации. Быстрые инсайты, проверенные партнёры, измеримые результаты.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <CTAForm />
            <a href="#" aria-label="Скачать кейс РЭЦ">
              <Button variant="outline" size="lg">Скачать кейс РЭЦ</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;