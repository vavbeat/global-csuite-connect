export type APACCompany = {
  id: number;
  name: string;
  country: "Китай" | "Сингапур" | "Малайзия" | "Индонезия";
  industry: string;
  group: "B2C" | "B2B" | "Healthcare" | "Logistics" | "Metallurgy";
  description: string;
  achievements: string[];
  metrics: {
    employees?: string;
    revenue?: string;
    users?: string;
    marketShare?: string;
  };
  innovations: string[];
  visitLocation: string;
};

export const APAC_COMPANIES: APACCompany[] = [
  // Китай (5 компаний)
  {
    id: 1,
    name: "BYD",
    country: "Китай",
    industry: "Автомобилестроение",
    group: "B2B",
    description: "Крупнейший производитель электромобилей в мире с фокусом на устойчивое развитие.",
    achievements: [
      "900,608 сотрудников",
      "Выручка 617 млрд юаней",
      "Лидер в производстве электромобилей"
    ],
    metrics: {
      employees: "900,608",
      revenue: "617 млрд юаней"
    },
    innovations: [
      "Технологии электромобилей",
      "Энергетические решения",
      "Автономные транспортные средства"
    ],
    visitLocation: "Штаб-квартира BYD, Шэньчжэнь"
  },
  {
    id: 2,
    name: "SAIC Motor",
    country: "Китай",
    industry: "Автомобилестроение",
    group: "B2B",
    description: "Крупнейший автопроизводитель Китая с передовыми цифровыми технологиями.",
    achievements: [
      "43 автомобиля/час",
      "Цикл 70 секунд",
      "Снижение энергопотребления на 3,8%"
    ],
    metrics: {
      employees: "120,000+",
      revenue: "100+ млрд USD"
    },
    innovations: [
      "Цифровая трансформация '1+4'",
      "Продуктовая цифровизация",
      "Умное производство"
    ],
    visitLocation: "Завод Lingang, Шанхай"
  },
  {
    id: 3,
    name: "SANY Group",
    country: "Китай",
    industry: "Машиностроение",
    group: "B2B",
    description: "Глобальный лидер в области тяжелого машиностроения с фокусом на автоматизацию.",
    achievements: [
      "Соотношение роботов к людям 5:1",
      "Снижение себестоимости на 29%"
    ],
    metrics: {
      employees: "50,000+",
      revenue: "15+ млрд USD"
    },
    innovations: [
      "Lighthouse Factories",
      "IoT и роботизация",
      "Цифровые платформы производства"
    ],
    visitLocation: "Маяковые заводы, Чанша"
  },
  {
    id: 4,
    name: "Baosteel",
    country: "Китай",
    industry: "Металлургия",
    group: "Metallurgy",
    description: "Крупнейший сталелитейный комплекс Китая с инновациями в области зеленой стали.",
    achievements: [
      "Технология H2-DRI для зеленой стали",
      "Снижение CO2 на 50-80%"
    ],
    metrics: {
      employees: "100,000+",
      revenue: "50+ млрд USD"
    },
    innovations: [
      "Технология водородной стали",
      "Цифровая оптимизация процессов",
      "Энергоэффективные решения"
    ],
    visitLocation: "Заводы в Шанхае"
  },
  {
    id: 5,
    name: "Midea",
    country: "Китай",
    industry: "Производство",
    group: "B2B",
    description: "Глобальный технологический концерн, специализирующийся на бытовой технике и промышленной автоматизации.",
    achievements: [
      "Лидер в бытовой технике",
      "Инвестиции в ИИ и робототехнику"
    ],
    metrics: {
      employees: "160,000+",
      revenue: "45+ млрд USD"
    },
    innovations: [
      "Умные бытовые приборы",
      "Индустриальные роботы",
      "IoT решения"
    ],
    visitLocation: "Штаб-квартира, ФOSHAN"
  },
  
  // Сингапур (5 компаний)
  {
    id: 6,
    name: "DBS Bank",
    country: "Сингапур",
    industry: "Банкинг",
    group: "B2C",
    description: "Крупнейший банк Юго-Восточной Азии с передовыми цифровыми решениями.",
    achievements: [
      "99% приложений в облаке",
      "Платформенная операционная модель"
    ],
    metrics: {
      employees: "30,000+",
      marketShare: "35% рынка банковских услуг Сингапура"
    },
    innovations: [
      "Цифровой банкинг",
      "Облачные технологии",
      "Платформенная архитектура"
    ],
    visitLocation: "DBS Tower, Сингапур"
  },
  {
    id: 7,
    name: "Grab",
    country: "Сингапур",
    industry: "E-commerce/Транспорт",
    group: "B2C",
    description: "Ведущая супер-апп платформа Юго-Восточной Азии, объединяющая транспорт, доставку и финансы.",
    achievements: [
      "190 млн пользователей",
      "35,3% доля рынка e-wallet в Сингапуре"
    ],
    metrics: {
      users: "190 млн",
      marketShare: "35,3% e-wallet в Сингапуре"
    },
    innovations: [
      "Super-app экосистема",
      "Интеграция транспорта, еды, платежей",
      "AI-оптимизация логистики"
    ],
    visitLocation: "Офисы Grab, Сингапур"
  },
  {
    id: 8,
    name: "Raffles Medical",
    country: "Сингапур",
    industry: "Здравоохранение",
    group: "Healthcare",
    description: "Крупнейшая частная медицинская сеть Сингапура с цифровыми инновациями в здравоохранении.",
    achievements: [
      "Omnichannel подход к медицине",
      "Интеграция e-commerce и клиник"
    ],
    metrics: {
      employees: "3,000+",
      revenue: "1+ млрд SGD"
    },
    innovations: [
      "Цифровая медицина",
      "Omnichannel подход",
      "Персонализированное лечение"
    ],
    visitLocation: "Медицинские центры Raffles, Сингапур"
  },
  {
    id: 9,
    name: "Mount Elizabeth",
    country: "Сингапур",
    industry: "Здравоохранение",
    group: "Healthcare",
    description: "Премиальная частная медицинская сеть с фокусом на персонализированное лечение.",
    achievements: [
      "Персонализация опыта пациентов",
      "LizWorld для индивидуального опыта"
    ],
    metrics: {
      employees: "2,000+",
      revenue: "800+ млн SGD"
    },
    innovations: [
      "Персонализированное лечение",
      "Цифровые платформы пациентов",
      "Интеграция технологий"
    ],
    visitLocation: "Медицинские центры Mount Elizabeth, Сингапур"
  },
  {
    id: 10,
    name: "PSA",
    country: "Сингапур",
    industry: "Логистика",
    group: "Logistics",
    description: "Крупнейший портовый оператор мира с передовыми цифровыми решениями в логистике.",
    achievements: [
      "Сокращение пустых пробегов грузовиков на 50%",
      "Технология OptETruck"
    ],
    metrics: {
      employees: "15,000+",
      revenue: "5+ млрд SGD"
    },
    innovations: [
      "Цифровая оптимизация логистики",
      "Технология OptETruck",
      "Автоматизация портовых операций"
    ],
    visitLocation: "Порт PSA, Сингапур"
  },
  
  // Малайзия (4 компании)
  {
    id: 11,
    name: "Maybank",
    country: "Малайзия",
    industry: "Банкинг",
    group: "B2C",
    description: "Крупнейший банк Малайзии с масштабной цифровой трансформацией.",
    achievements: [
      "44,000 сотрудников",
      "22 млн клиентов",
      "Партнерство с Microsoft на $1 млрд"
    ],
    metrics: {
      employees: "44,000",
      users: "22 млн"
    },
    innovations: [
      "Цифровая трансформация",
      "Партнерство с Microsoft",
      "Мобильные банковские решения"
    ],
    visitLocation: "Maybank Tower, Куала-Лумпур"
  },
  {
    id: 12,
    name: "Petronas",
    country: "Малайзия",
    industry: "Нефтегаз",
    group: "B2B",
    description: "Национальная нефтяная корпорация Малайзии с фокусом на цифровые инновации.",
    achievements: [
      "Корпоративный центр данных EDH",
      "Самый ценный бренд Малайзии 12 лет подряд"
    ],
    metrics: {
      employees: "50,000+",
      revenue: "80+ млрд USD"
    },
    innovations: [
      "Цифровая платформа EDH",
      "Устойчивые технологии",
      "Цифровое управление активами"
    ],
    visitLocation: "Petronas Twin Towers, Куала-Лумпур"
  },
  {
    id: 13,
    name: "Genting",
    country: "Малайзия",
    industry: "Развлечения",
    group: "B2C",
    description: "Глобальный концерн развлечений с цифровыми инновациями в индустрии гостеприимства.",
    achievements: [
      "Цифровизация курортов",
      "Интеграция технологий в развлечения"
    ],
    metrics: {
      employees: "50,000+",
      revenue: "5+ млрд USD"
    },
    innovations: [
      "Цифровые курорты",
      "Интеграция AR/VR",
      "Системы персонализации"
    ],
    visitLocation: "Курорты Genting, Пенанг"
  },
  {
    id: 14,
    name: "IOI Corporation",
    country: "Малайзия",
    industry: "Агропромышленность",
    group: "B2B",
    description: "Глобальный лидер в области пальмового масла с устойчивыми цифровыми практиками.",
    achievements: [
      "Цифровизация агропроизводства",
      "Устойчивые практики"
    ],
    metrics: {
      employees: "20,000+",
      revenue: "4+ млрд USD"
    },
    innovations: [
      "Цифровой агротрекинг",
      "Устойчивое производство",
      "Блокчейн для отслеживания"
    ],
    visitLocation: "Производства IOI, Пенанг"
  },
  
  // Индонезия (5 компаний)
  {
    id: 15,
    name: "Gojek",
    country: "Индонезия",
    industry: "E-commerce/Транспорт",
    group: "B2C",
    description: "Супер-апп платформа Юго-Восточной Азии, объединяющая транспорт, доставку и финансы.",
    achievements: [
      "Лидер в многосторонних платформах",
      "Цифровая трансформация услуг"
    ],
    metrics: {
      users: "100+ млн",
      revenue: "5+ млрд USD"
    },
    innovations: [
      "Super-app экосистема",
      "Интеграция сервисов",
      "AI-оптимизация логистики"
    ],
    visitLocation: "Технологические центры Gojek, Джакарта"
  },
  {
    id: 16,
    name: "Tokopedia",
    country: "Индонезия",
    industry: "E-commerce",
    group: "B2C",
    description: "Крупнейшая e-commerce платформа Индонезии с фокусом на цифровые инновации.",
    achievements: [
      "Лидер e-commerce в Индонезии",
      "Цифровая платформа для малого бизнеса"
    ],
    metrics: {
      users: "90+ млн",
      revenue: "2+ млрд USD"
    },
    innovations: [
      "Цифровая платформа для бизнеса",
      "AI-рекомендации",
      "Мобильные решения"
    ],
    visitLocation: "Технологические центры Tokopedia, Джакарта"
  },
  {
    id: 17,
    name: "Traveloka",
    country: "Индонезия",
    industry: "Туризм",
    group: "B2C",
    description: "Ведущая платформа путешествий Юго-Восточной Азии с цифровыми решениями.",
    achievements: [
      "Цифровизация туристической индустрии",
      "Персонализированные предложения"
    ],
    metrics: {
      users: "50+ млн",
      revenue: "1+ млрд USD"
    },
    innovations: [
      "Цифровая платформа путешествий",
      "AI-персонализация",
      "Мобильные решения"
    ],
    visitLocation: "Офисы Traveloka, Джакарта"
  },
  {
    id: 18,
    name: "Sinar Mas",
    country: "Индонезия",
    industry: "Диверсифицированный холдинг",
    group: "B2B",
    description: "Многопрофильный холдинг с цифровыми инновациями в различных отраслях.",
    achievements: [
      "Цифровая трансформация холдинга",
      "5G инновации"
    ],
    metrics: {
      employees: "100,000+",
      revenue: "20+ млрд USD"
    },
    innovations: [
      "5G инновации",
      "Цифровая трансформация",
      "Устойчивые технологии"
    ],
    visitLocation: "Штаб-квартира Sinar Mas, Джакарта"
  },
  {
    id: 19,
    name: "PIDI 4.0",
    country: "Индонезия",
    industry: "Образование/Производство",
    group: "B2B",
    description: "Программа цифровой трансформации с фокусом на обучение и развитие цифровых навыков.",
    achievements: [
      "1,921 обученный работник",
      "Программы цифровой грамотности"
    ],
    metrics: {
      employees: "1,921 обученный"
    },
    innovations: [
      "Программы цифрового обучения",
      "Развитие цифровых навыков",
      "Индустрия 4.0"
    ],
    visitLocation: "Образовательные центры PIDI, Джакарта"
  }
];

export const COUNTRIES = [
  { name: "Китай", count: 5 },
  { name: "Сингапур", count: 5 },
  { name: "Малайзия", count: 4 },
  { name: "Индонезия", count: 5 }
];

export const INDUSTRIES = [
  { name: "B2C услуги", count: 7, description: "Банкинг, финтех, e-commerce, туризм" },
  { name: "B2B производство", count: 6, description: "Автомобилестроение, машиностроение, нефтегаз" },
  { name: "Здравоохранение", count: 2, description: "Цифровая медицина" },
  { name: "Логистика, металлургия и др.", count: 4, description: "Логистика, металлургия и другие отрасли" }
];
