import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export type Company = {
  name: string;
  city: string;
  country: string;
  group: "B2B" | "B2C";
  industry: string;
  indicators: string[];
  readiness: "Да" | "По договоренности" | "Ограничено";
  languages: string[];
};

const DATA: Company[] = [
  { name: "XCMG Group", city: "Сюйчжоу", country: "Китай", group: "B2B", industry: "Машиностроение", indicators: ["AI/Automation", "Smart Factory", "Data Analytics"], readiness: "Да", languages: ["EN", "中文"] },
  { name: "Liebherr", city: "Биберах", country: "Германия", group: "B2B", industry: "Машиностроение", indicators: ["Smart Operations", "CX"], readiness: "По договоренности", languages: ["EN", "DE"] },
  { name: "Baowu Steel", city: "Шанхай", country: "Китай", group: "B2B", industry: "Металлургия", indicators: ["AI/Automation", "Data Analytics", "Smart Factory"], readiness: "Ограничено", languages: ["EN", "中文"] },
  { name: "Nucor Corporation", city: "Шарлотт", country: "США", group: "B2B", industry: "Металлургия", indicators: ["Smart Operations", "Governance"], readiness: "Да", languages: ["EN"] },
  { name: "China State Construction", city: "Пекин", country: "Китай", group: "B2B", industry: "Строительство", indicators: ["AI/Automation", "Smart Operations", "Data Analytics"], readiness: "По договоренности", languages: ["EN", "中文"] },
  { name: "Skanska", city: "Стокгольм", country: "Швеция", group: "B2B", industry: "Строительство", indicators: ["Smart Operations", "Governance"], readiness: "Да", languages: ["EN"] },

  { name: "Alibaba Group", city: "Ханчжоу", country: "Китай", group: "B2C", industry: "E-commerce", indicators: ["AI/Automation", "CX", "Data Analytics"], readiness: "Да", languages: ["EN", "中文"] },
  { name: "Amazon", city: "Сиэтл", country: "США", group: "B2C", industry: "E-commerce", indicators: ["AI/Automation", "CX", "Smart Operations"], readiness: "Ограничено", languages: ["EN"] },
  { name: "Trip.com Group", city: "Шанхай", country: "Китай", group: "B2C", industry: "Туризм", indicators: ["AI/Automation", "CX", "Data Analytics"], readiness: "Да", languages: ["EN", "中文"] },
  { name: "Booking Holdings", city: "Амстердам", country: "Нидерланды", group: "B2C", industry: "Туризм", indicators: ["AI/Automation", "CX"], readiness: "По договоренности", languages: ["EN"] },
  { name: "Ping An Healthcare", city: "Шанхай", country: "Китай", group: "B2C", industry: "Медицина", indicators: ["AI/Automation", "Data Analytics", "CX"], readiness: "По договоренности", languages: ["EN", "中文"] },
  { name: "Teladoc Health", city: "Покипси", country: "США", group: "B2C", industry: "Медицина", indicators: ["AI/Automation", "CX", "Data Analytics"], readiness: "Да", languages: ["EN"] },
];

const INDUSTRIES: Record<"B2B" | "B2C", string[]> = {
  B2B: ["Машиностроение", "Металлургия", "Строительство"],
  B2C: ["E-commerce", "Туризм", "Медицина"],
};

const basePrices = { pilot: 10000, strategic: 15000, enterprise: 25000 } as const;

const CompanyDatabase = () => {
  const [group, setGroup] = useState<"B2B" | "B2C">("B2B");
  const [industries, setIndustries] = useState<string[]>([INDUSTRIES["B2B"][0]]);
  const [wishlist, setWishlist] = useState<Company[]>([]);
  const [participants, setParticipants] = useState(8);
  const [packageKey, setPackageKey] = useState<keyof typeof basePrices>("pilot");

  const filtered = useMemo(() => DATA.filter(d => d.group === group && industries.includes(d.industry)), [group, industries]);

  const toggleIndustry = (ind: string) => {
    setIndustries(prev => prev.includes(ind)
      ? prev.filter(i => i !== ind)
      : (prev.length < 3 ? [...prev, ind] : prev));
  };

  const addToWish = (c: Company) => {
    setWishlist((prev) => (prev.find((x) => x.name === c.name) ? prev : [...prev, c]));
  };
  const removeFromWish = (name: string) => setWishlist(prev => prev.filter(c => c.name !== name));

  const estimate = useMemo(() => {
    const base = basePrices[packageKey];
    return base * participants;
  }, [participants, packageKey]);

  return (
    <section id="db" aria-labelledby="db-title" className="container mx-auto py-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <h2 id="db-title" className="text-2xl md:text-3xl font-semibold">Аналитика компаний по отраслям</h2>
          <p className="text-muted-foreground">Выберите до 3 отраслей и сформируйте предварительный wishlist компаний.</p>
        </div>
        <div className="flex gap-2">
          {["B2B", "B2C"].map((g) => (
            <Button key={g} variant={group === g ? "default" : "outline"} onClick={() => {
              setGroup(g as "B2B" | "B2C");
              setIndustries([INDUSTRIES[g as "B2B" | "B2C"][0]]);
            }}>{g}</Button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-3 mb-6">
        {INDUSTRIES[group].map((i) => (
          <button key={i} onClick={() => toggleIndustry(i)}
            className={`rounded-md border px-3 py-2 text-sm text-left transition-colors ${industries.includes(i) ? "bg-accent text-accent-foreground" : "hover:bg-muted"}`}
            aria-pressed={industries.includes(i)}>
            {i}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
          {filtered.map((c) => (
            <Card key={c.name} className="border-border/60">
              <CardHeader>
                <CardTitle className="text-base">{c.name}</CardTitle>
                <CardDescription>{c.city}, {c.country}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {c.indicators.map(i => <Badge key={i} variant="secondary">{i}</Badge>)}
                </div>
                <div className="text-sm text-muted-foreground">Готовность: {c.readiness} · Языки: {c.languages.join("/")}</div>
                <Button variant="subtle" onClick={() => addToWish(c)}>Добавить в миссию</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <aside className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Wishlist компаний</CardTitle>
              <CardDescription>Выбрано: {wishlist.length}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {wishlist.length === 0 && (
                <p className="text-sm text-muted-foreground">Пока пусто. Добавьте интересующие компании.</p>
              )}
              <ul className="space-y-2 text-sm">
                {wishlist.map(w => (
                  <li key={w.name} className="flex items-center justify-between gap-2">
                    <span>{w.name}</span>
                    <Button size="sm" variant="ghost" onClick={() => removeFromWish(w.name)}>Удалить</Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Калькулятор стоимости</CardTitle>
              <CardDescription>Черновая оценка на участника</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2">
                {(
                  [
                    {k: "pilot", label: "Pilot"},
                    {k: "strategic", label: "Strategic"},
                    {k: "enterprise", label: "Enterprise"},
                  ] as const
                ).map(o => (
                  <Button key={o.k} variant={packageKey === o.k ? "default" : "outline"} onClick={() => setPackageKey(o.k)}>{o.label}</Button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Input type="number" min={1} value={participants} onChange={(e) => setParticipants(parseInt(e.target.value || "1"))} aria-label="Количество участников" />
                <span className="text-sm text-muted-foreground">участников</span>
              </div>
              <div className="text-base">Оценка бюджета: <span className="font-semibold whitespace-nowrap">${estimate.toLocaleString()}</span></div>
              <p className="text-xs text-muted-foreground">Включает организацию; перелёты/проживание рассчитываются дополнительно.</p>
            </CardContent>
          </Card>
        </aside>
      </div>
    </section>
  );
};

export default CompanyDatabase;
