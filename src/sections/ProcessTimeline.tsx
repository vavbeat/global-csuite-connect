import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProcessTimeline = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSteps([0]);
    }, 300);
    
    const timer2 = setTimeout(() => {
      setVisibleSteps([0, 1]);
    }, 600);
    
    const timer3 = setTimeout(() => {
      setVisibleSteps([0, 1, 2]);
    }, 900);
    
    const timer4 = setTimeout(() => {
      setVisibleSteps([0, 1, 2, 3]);
    }, 1200);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const steps = [
    {
      title: "Этап 1: Стратегический анализ",
      duration: "4–6 недель",
      points: [
        "Глубинные интервью с C‑suite",
        "Mapping целей и KPI",
        "Скрининг и выбор 10–15 компаний",
        "Due diligence партнёров и рисков",
      ],
      icon: "🔍",
    },
    {
      title: "Этап 2: Планирование миссии",
      duration: "6–8 недель",
      points: [
        "Согласования на уровне CEO/COO",
        "Дизайн образовательной программы",
        "Логистика: визы, безопасность, переводы",
        "Брифинг‑буки и NDA",
      ],
      icon: "📅",
    },
    {
      title: "Этап 3: Проведение миссии",
      duration: "5–10 дней",
      points: [
        "Брифинг → визит → техсессия → деловой приём",
        "3–4 часа на компанию, 1–2 компании в день",
        "Real‑time протокол и VIP‑консьерж",
        "Документирование инсайтов",
      ],
      icon: "✈️",
    },
    {
      title: "Этап 4: Пост‑миссионная работа",
      duration: "4 недели",
      points: [
        "Аналитический отчёт и roadmap",
        "Follow‑up с партнёрами",
        "KPI‑трекинг пилотов/сделок",
        "Lessons learned",
      ],
      icon: "📊",
    },
  ];

  return (
    <section id="process" aria-labelledby="process-title" className="container mx-auto py-16 overflow-hidden">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-accent text-accent-foreground">Процесс</Badge>
        <h2 id="process-title" className="text-3xl md:text-4xl font-semibold mb-4">
          Как мы работаем
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Четырехэтапный процесс, обеспечивающий максимальную ценность для вашего бизнеса
        </p>
      </div>

      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="relative">
          {/* Timeline line with gradient */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-gold/20 via-gold to-gold/20 transform -translate-x-1/2 -z-10"></div>
          
          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 relative">
            {steps.map((s, i) => (
              <div 
                key={i} 
                className={`md:col-span-1 ${
                  i % 2 === 0 ? "md:justify-self-end md:pr-8 md:text-right" : "md:justify-self-start md:pl-8 md:text-left"
                }`}
              >
                <div 
                  className={`transition-all duration-700 ease-out ${
                    visibleSteps.includes(i) 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <Card className="border-border/60 hover:shadow-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className={`flex ${i % 2 === 0 ? "md:justify-end" : "md:justify-start"} mb-2`}>
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 text-gold text-xl group-hover:bg-gold group-hover:text-white transition-all duration-300">
                          {s.icon}
                        </div>
                      </div>
                      <CardTitle className="flex flex-col">
                        <span>{s.title}</span>
                        <Badge variant="secondary" className="mt-2 w-fit md:ml-auto">
                          {s.duration}
                        </Badge>
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {s.points.length} ключевых активностей
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {s.points.map((p, idx) => (
                          <li 
                            key={idx} 
                            className="flex items-start gap-2 text-sm group-hover:text-foreground transition-colors"
                          >
                            <span className="text-gold mt-1">•</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Parallax effect elements */}
      <div className="absolute top-1/4 left-4 w-2 h-2 bg-gold rounded-full opacity-20 animate-pulse" style={{ animationDelay: '0ms' }}></div>
      <div className="absolute top-1/3 right-8 w-3 h-3 bg-brand rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1000ms' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-gold rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1500ms' }}></div>
    </section>
  );
};

export default ProcessTimeline;
