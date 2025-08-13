import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Trust from "@/sections/Trust";
import Services from "@/sections/Services";
import AnalyticsByIndustry from "@/sections/AnalyticsByIndustry";
import ProcessTimeline from "@/sections/ProcessTimeline";
import Pricing from "@/sections/Pricing";
import FAQ from "@/sections/FAQ";
import Footer from "@/sections/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AFFORT",
    url: "https://affort.ru/",
    description: "Международные бизнес‑миссии под ключ для C‑suite: аналитика, организация, обучение и VIP‑сервис.",
    sameAs: ["https://affort.ru/"],
    serviceOffered: {
      "@type": "Service",
      name: "Организация международных бизнес‑миссий",
      areaServed: "Worldwide",
      audience: "C‑suite",
    },
  };

  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services />
        <AnalyticsByIndustry />
        <ProcessTimeline />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </div>
  );
};

export default Index;
