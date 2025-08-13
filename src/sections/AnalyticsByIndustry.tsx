import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { APAC_COMPANIES, COUNTRIES, INDUSTRIES } from "@/data/apac-companies";
import { ChevronDown, MapPin, Users, TrendingUp, Lightbulb, Building } from "lucide-react";

const AnalyticsByIndustry = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [expandedCompany, setExpandedCompany] = useState<number | null>(null);

  const filteredCompanies = APAC_COMPANIES.filter(company => {
    const countryMatch = !selectedCountry || company.country === selectedCountry;
    const industryMatch = !selectedIndustry || company.industry === selectedIndustry;
    return countryMatch && industryMatch;
  });

  const toggleCompany = (id: number) => {
    setExpandedCompany(expandedCompany === id ? null : id);
  };

  return (
    <section id="analytics" aria-labelledby="analytics-title" className="container mx-auto py-16">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-accent text-accent-foreground">Экспертиза</Badge>
        <h2 id="analytics-title" className="text-3xl md:text-4xl font-semibold mb-4">
          Аналитика компаний по отраслям
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Исследование 19 лидеров цифровой трансформации в Азиатско-Тихоокеанском регионе
        </p>
      </div>

      {/* Статистика по странам и отраслям */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-gold" />
              Распределение по странам
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Animated World Map */}
              <div className="flex-1 relative">
                <div className="bg-gold/5 rounded-lg p-4 h-full flex items-center justify-center">
                  <div className="relative w-full h-48">
                    {/* Simplified world map visualization */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-gold/10 to-brand/5 border border-gold/20"></div>
                    
                    {/* Animated connection lines */}
                    <div className="absolute top-1/4 left-1/4 w-1 h-16 bg-gold rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
                    <div className="absolute top-1/3 right-1/3 w-16 h-1 bg-gold rounded-full animate-pulse" style={{ animationDelay: '500ms' }}></div>
                    <div className="absolute bottom-1/4 left-1/3 w-1 h-12 bg-gold rounded-full animate-pulse" style={{ animationDelay: '1000ms' }}></div>
                    <div className="absolute bottom-1/3 right-1/4 w-12 h-1 bg-gold rounded-full animate-pulse" style={{ animationDelay: '1500ms' }}></div>
                    
                    {/* Country markers with animation */}
                    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-gold rounded-full animate-ping" style={{ animationDelay: '0ms' }}></div>
                    <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gold rounded-full animate-ping" style={{ animationDelay: '500ms' }}></div>
                    <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-gold rounded-full animate-ping" style={{ animationDelay: '1000ms' }}></div>
                    <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-gold rounded-full animate-ping" style={{ animationDelay: '1500ms' }}></div>
                    
                    {/* Central glow effect */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gold/20 rounded-full blur-xl animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              {/* Country stats */}
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-4">
                  {COUNTRIES.map((country) => (
                    <button
                      key={country.name}
                      onClick={() => setSelectedCountry(selectedCountry === country.name ? null : country.name)}
                      className={`p-4 rounded-lg border transition-all flex flex-col items-center justify-center ${
                        selectedCountry === country.name
                          ? "border-gold bg-gold/10"
                          : "border-border hover:bg-accent"
                      }`}
                    >
                      <div className="font-semibold">{country.name}</div>
                      <div className="text-3xl font-bold text-gold my-2">{country.count}</div>
                      <div className="text-xs text-muted-foreground">компаний</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5 text-gold" />
              Отраслевое покрытие
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {INDUSTRIES.map((industry) => (
                <button
                  key={industry.name}
                  onClick={() => setSelectedIndustry(selectedIndustry === industry.name ? null : industry.name)}
                  className={`w-full text-left p-3 rounded-md transition-all ${
                    selectedIndustry === industry.name
                      ? "bg-gold/10 border border-gold"
                      : "hover:bg-accent"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{industry.name}</span>
                    <Badge variant="secondary">{industry.count}</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{industry.description}</div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ключевые достижения */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="border-gold/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-gold" />
              Производственная эффективность
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-gold">•</span>
                <span>
                  <span className="font-semibold">SAIC Motor:</span> 43 автомобиля/час, цикл 70 секунд, снижение энергопотребления на 3,8%
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">•</span>
                <span>
                  <span className="font-semibold">SANY Group:</span> соотношение роботов к людям 5:1, снижение себестоимости на 29%
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">•</span>
                <span>
                  <span className="font-semibold">PSA Singapore:</span> сокращение пустых пробегов грузовиков на 50% через OptETruck
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-gold/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-gold" />
              Масштаб и охват
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-gold">•</span>
                <span>
                  <span className="font-semibold">BYD:</span> 900,608 сотрудников, выручка 617 млрд юаней, крупнейший производитель электромобилей
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">•</span>
                <span>
                  <span className="font-semibold">Grab:</span> 190 млн пользователей, 35,3% доля рынка e-wallet в Сингапуре
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">•</span>
                <span>
                  <span className="font-semibold">Maybank:</span> 44,000 сотрудников, 22 млн клиентов, партнерство с Microsoft на $1 млрд
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-gold/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-gold" />
              Технологические инновации
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-gold">•</span>
                <span>
                  <span className="font-semibold">Baosteel:</span> технология H2-DRI для зеленой стали, снижение CO2 на 50-80%
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">•</span>
                <span>
                  <span className="font-semibold">DBS Bank:</span> 99% приложений в облаке, платформенная операционная модель
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">•</span>
                <span>
                  <span className="font-semibold">Petronas:</span> корпоративный центр данных EDH, самый ценный бренд Малайзии 12 лет подряд
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Компании */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-6">Лидеры цифровой трансформации</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company, index) => {
            // If this is the last company, render animated divider instead
            if (index === filteredCompanies.length - 1) {
              return (
                <div key="divider" className="col-span-full my-8">
                  <div className="relative h-px bg-gradient-to-r from-transparent via-gold to-transparent animate-pulse">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gold rounded-full animate-ping"></div>
                    <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 w-2 h-2 bg-gold rounded-full animate-pulse" style={{ animationDelay: '500ms' }}></div>
                    <div className="absolute top-1/2 left-3/4 transform -translate-y-1/2 w-2 h-2 bg-gold rounded-full animate-pulse" style={{ animationDelay: '1000ms' }}></div>
                  </div>
                  <div className="text-center mt-6">
                    <h3 className="text-xl font-semibold text-gold">Инновации в цифровой трансформации</h3>
                    <p className="text-muted-foreground mt-2">19 компаний-лидеров из Азиатско-Тихоокеанского региона</p>
                  </div>
                </div>
              );
            }
            
            return (
              <Card 
                key={company.id} 
                className="border-border/60 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{company.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" />
                        {company.country} · {company.industry}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{company.group}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{company.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-1">Ключевые достижения</h4>
                    <ul className="text-xs space-y-1">
                      {company.achievements.slice(0, 2).map((achievement, index) => (
                        <li key={index} className="flex items-start gap-1">
                          <span className="text-gold">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-1">Инновации</h4>
                    <div className="flex flex-wrap gap-1">
                      {company.innovations.slice(0, 3).map((innovation, index) => (
                        <Badge key={index} variant="outline" className="text-xs px-1.5 py-0.5">
                          {innovation}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full justify-between"
                    onClick={() => toggleCompany(company.id)}
                  >
                    <span>Подробнее</span>
                    <ChevronDown 
                      className={`h-4 w-4 transition-transform ${
                        expandedCompany === company.id ? "rotate-180" : ""
                      }`} 
                    />
                  </Button>
                  
                  {expandedCompany === company.id && (
                    <div className="mt-4 pt-4 border-t border-border space-y-3 animate-in slide-in-from-top-2">
                      <div>
                        <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-1">Метрики</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {company.metrics.employees && (
                            <div className="text-xs">
                              <span className="font-medium">Сотрудники:</span> {company.metrics.employees}
                            </div>
                          )}
                          {company.metrics.revenue && (
                            <div className="text-xs">
                              <span className="font-medium">Выручка:</span> {company.metrics.revenue}
                            </div>
                          )}
                          {company.metrics.users && (
                            <div className="text-xs">
                              <span className="font-medium">Пользователи:</span> {company.metrics.users}
                            </div>
                          )}
                          {company.metrics.marketShare && (
                            <div className="text-xs">
                              <span className="font-medium">Доля рынка:</span> {company.metrics.marketShare}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-1">Рекомендуемое место визита</h4>
                        <p className="text-xs">{company.visitLocation}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Программы для изучения */}
      <Card className="border-gold/30">
        <CardHeader>
          <CardTitle>Практические программы для изучения</CardTitle>
          <CardDescription>Стратегические инициативы лидеров цифровой трансформации</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Стратегические инициативы</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>
                    <span className="font-medium">Цифровая трансформация "1+4" (SAIC Motor):</span> продуктовая цифровизация, R&D, маркетинг, умное производство
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>
                    <span className="font-medium">Lighthouse Factories (SANY):</span> сертифицированные ВЭФ заводы будущего с IoT и роботизацией
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>
                    <span className="font-medium">Super-app экосистемы (Grab, Gojek):</span> интеграция транспорта, еды, платежей, логистики
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">HR и управленческие практики</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Замещение офисных профессий ИИ/роботами: реальные кейсы изменения ролей и навыков</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Цифровые навыки: программы обучения от PIDI 4.0 (1,921 обученный работник)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Performance management: системы материальной мотивации на основе данных</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default AnalyticsByIndustry;
