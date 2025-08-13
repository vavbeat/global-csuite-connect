import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const blocks = [
    {
      k: "Аналитика целевых рынков",
      p: ["Скрининг компаний по отраслям и цифровой зрелости", "Оценка готовности к приёму делегаций", "Карты конкурентов и технологических лидеров", "ROI‑прогнозы"]
    },
    {
      k: "Организация визитов",
      p: ["Согласования на уровне C‑suite", "Доступ к производственным площадкам", "Технические демонстрации и кейс‑стади", "Протокольное сопровождение"]
    },
    {
      k: "Образовательные программы",
      p: ["Learning journey под цели компании", "Брифинги и воркшопы", "Пост‑визитные отчёты и roadmap", "KPI внедрения"]
    },
    {
      k: "VIP‑консьерж и логистика",
      p: ["Маршруты, визы, безопасность", "Профессиональные переводы", "Культурная программа и нетворкинг", "Премиум‑размещение и трансферы"]
    }
  ];

  return (
    <section id="services" aria-labelledby="services-title" className="container mx-auto py-16">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-8 gap-4">
        <h2 id="services-title" className="text-2xl md:text-3xl font-semibold">Наши сервисы</h2>
        <Badge className="bg-accent text-accent-foreground w-fit">под ключ</Badge>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blocks.map((b) => (
          <Card key={b.k} className="border-border/60">
            <CardHeader>
              <CardTitle className="text-lg">{b.k}</CardTitle>
              <CardDescription>AFFORT обеспечивает полный цикл и прозрачные KPI</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2 text-sm text-muted-foreground">
                {b.p.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
