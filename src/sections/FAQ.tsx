import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const q = [
    {q: "Сроки согласований с Fortune 500?", a: "Обычно 6–10 недель на согласование визита и доступов, зависит от региона и политики безопасности компании."},
    {q: "Как обеспечивается конфиденциальность?", a: "Работаем по NDA, используем закрытые брифинг‑сессии, ограничиваем доступ к материалам и контактам."},
    {q: "Доступ к производственным площадкам?", a: "Достигается через C‑suite согласования, заранее формируем повестку и список вопросов."},
    {q: "Визовая поддержка и санкционные риски?", a: "Предоставляем маршрутизацию и правовую экспертизу; работаем с альтернативными юрисдикциями при необходимости."},
    {q: "Как измеряется ROI?", a: "Считаем пилоты, сделки и внедрения; фиксируем метрики до/после и формируем roadmap."}
  ];

  return (
    <section id="faq" aria-labelledby="faq-title" className="container mx-auto py-16">
      <h2 id="faq-title" className="text-2xl md:text-3xl font-semibold mb-8">FAQ</h2>
      <Accordion type="single" collapsible className="w-full">
        {q.map((i, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger>{i.q}</AccordionTrigger>
            <AccordionContent>{i.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;