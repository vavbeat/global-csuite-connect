import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    { name: "Pilot Mission", price: "$8,000–12,000", desc: "5–7 дней, до 10 человек", bullets: ["3–5 ключевых компаний", "Базовый консьерж", "Отчёт и рекомендации"], k: "pilot" },
    { name: "Strategic Mission", price: "$12,000–18,000", desc: "7–10 дней, 10–15 человек", bullets: ["7–10 компаний + конференции", "Премиум VIP‑сервис", "Глубокая аналитика"], k: "strategic" },
    { name: "Enterprise Program", price: "от $25,000", desc: "Индивидуально", bullets: ["Мультисекторные миссии", "Сопровождение сделок", "Long‑term facilitation"], k: "enterprise" },
  ];

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="container mx-auto py-16">
      <h2 id="pricing-title" className="text-2xl md:text-3xl font-semibold mb-8">Пакеты услуг</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map(p => (
          <Card key={p.k} className="relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl">{p.name}</CardTitle>
              <CardDescription>{p.desc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-2xl font-semibold">{p.price} <span className="text-sm text-muted-foreground">/ чел.</span></div>
              <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                {p.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
              <Button variant="hero" className="w-full">Запросить расчёт</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Pricing;