import case1 from "@/assets/trust-case1.jpg";
import case2 from "@/assets/trust-case2.jpg";
import case3 from "@/assets/trust-case3.jpg";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Trust = () => {
  const items = [
    {
      img: case1,
      title: "Российский экспортный центр",
      desc: "Бизнес‑миссия в Латинскую Америку и Азию с ЩёлковоАгроХим и другими экспортёрами."
    },
    {
      img: case2,
      title: "Messe Frankfurt / trade‑time",
      desc: "Организация российских делегаций на Automechanika под брендом trade‑time."
    },
    {
      img: case3,
      title: "РЖД проект реализации очной бизнес миссии в Китае",
      desc: "25+ компаний за 8 дней, 15+ пилотных проектов."
    },
  ];

  return (
    <section id="cases" aria-labelledby="trust-title" className="container mx-auto py-16">
      <h2 id="trust-title" className="text-2xl md:text-3xl font-semibold mb-8">Экспертиза</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <Card key={it.title} className="hover:translate-y-[-2px] transition-transform">
            <CardHeader>
              <CardTitle className="text-lg">{it.title}</CardTitle>
              <CardDescription>{it.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <img src={it.img} loading="lazy" alt={`${it.title} — фотокейс`} className="rounded-md w-full h-48 object-cover" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Trust;
