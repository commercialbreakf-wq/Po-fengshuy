export interface PortfolioProject {
  id: string;
  name: string;
  location: string;
  size: string;
  description: string;
  details: string[];
  images: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "volkhov",
    name: "Волхов-2",
    location: "г. Волхов-2, Ленинградская область",
    size: "13 × 11 м",
    description: "Комплексные работы по внешней отделке загородного дома. Основная задача заключалась в повышении энергоэффективности здания и создании премиального внешнего вида с использованием современных фасадных решений.",
    details: [
      "Обшивка стен ветрозащитными плитами Isoplaat для надежной тепло- и звукоизоляции.",
      "Монтаж обрешетки и создание вентилируемого зазора.",
      "Облицовка фасада крашеной на производстве имитацией бруса премиум-качества.",
      "Отделка оконных проемов, монтаж наличников и металлических отливов.",
      "Подшивка свесов кровли и монтаж водосточной системы."
    ],
    images: [
      "/images/portfolio/volkhov/img_1.jpg",
      "/images/portfolio/volkhov/img_2.jpg",
      "/images/portfolio/volkhov/img_3.jpg",
      "/images/portfolio/volkhov/img_4.jpg",
      "/images/portfolio/volkhov/img_5.jpg",
      "/images/portfolio/volkhov/img_6.jpg",
      "/images/portfolio/volkhov/img_7.jpg",
      "/images/portfolio/volkhov/img_8.jpg",
      "/images/portfolio/volkhov/img_9.jpg",
      "/images/portfolio/volkhov/img_10.jpg",
      "/images/portfolio/volkhov/img_11.jpg",
      "/images/portfolio/volkhov/img_12.jpg"
    ]
  },
  {
    id: "krasnoe_selo",
    name: "Каркас Красное Село",
    location: "г. Красное Село, Санкт-Петербург",
    size: "8 × 8 м",
    description: "Возведение силового каркаса дома с монтажом надежной кровельной системы. Дом строился по энергоэффективной технологии с расчетом на круглогодичное проживание семьи.",
    details: [
      "Строительство несущего силового каркаса из сухой строганной доски сечением 195 мм.",
      "Монтаж внутренних перегородок и межэтажных перекрытий.",
      "Устройство стропильной системы с учетом ветровых и снеговых нагрузок региона.",
      "Монтаж кровельного покрытия — металлочерепица с установкой гидро-ветрозащитных мембран.",
      "Обработка всего пиломатериала огнебиозащитными составами."
    ],
    images: [
      "/images/portfolio/krasnoe_selo/img_1.jpg",
      "/images/portfolio/krasnoe_selo/img_2.jpg",
      "/images/portfolio/krasnoe_selo/img_3.jpg",
      "/images/portfolio/krasnoe_selo/img_4.jpg",
      "/images/portfolio/krasnoe_selo/img_5.jpg",
      "/images/portfolio/krasnoe_selo/img_6.jpg",
      "/images/portfolio/krasnoe_selo/img_7.jpg",
      "/images/portfolio/krasnoe_selo/img_8.jpg",
      "/images/portfolio/krasnoe_selo/img_9.jpg",
      "/images/portfolio/krasnoe_selo/img_10.jpg",
      "/images/portfolio/krasnoe_selo/img_11.jpg",
      "/images/portfolio/krasnoe_selo/img_12.jpg"
    ]
  },
  {
    id: "krolik_bar",
    name: "Кролик Бар",
    location: "г. Санкт-Петербург, ул. Большая Конюшенная, д. 2",
    size: "Коммерческий интерьер",
    description: "Внутренние отделочные работы в популярном гастрономическом заведении в историческом центре Санкт-Петербурга. Главный упор делался на износостойкость напольного покрытия при высоком трафике гостей.",
    details: [
      "Подготовка основания пола под нанесение декоративного слоя.",
      "Нанесение высокопрочной полимерной штукатурки на полы с уникальным авторским рисунком.",
      "Покрытие защитными износостойкими полиуретановыми лаками.",
      "Создание бесшовной, гигиеничной поверхности, легкой в уборке.",
      "Работа выполнялась в сжатые сроки для скорейшего открытия заведения."
    ],
    images: [
      "/images/portfolio/krolik_bar/img_1.jpg",
      "/images/portfolio/krolik_bar/img_2.jpg",
      "/images/portfolio/krolik_bar/img_3.jpg",
      "/images/portfolio/krolik_bar/img_4.jpg",
      "/images/portfolio/krolik_bar/img_5.jpg",
      "/images/portfolio/krolik_bar/img_6.jpg",
      "/images/portfolio/krolik_bar/img_7.jpg",
      "/images/portfolio/krolik_bar/img_8.jpg",
      "/images/portfolio/krolik_bar/img_9.jpg",
      "/images/portfolio/krolik_bar/img_10.jpg",
      "/images/portfolio/krolik_bar/img_11.jpg",
      "/images/portfolio/krolik_bar/img_12.jpg"
    ]
  },
  {
    id: "leskolovo",
    name: "Дом Лесколово",
    location: "пос. Лесколово, Новоприозерское шоссе",
    size: "9 × 9 м",
    description: "Строительство фундамента и теплого контура загородного дома на сложном рельефе. Проект сочетал надежные ж/б опоры и современную каркасную технологию стен.",
    details: [
      "Проектирование и монтаж фундамента на железобетонных колоннах.",
      "Сборка перекрытий первого этажа с утеплением.",
      "Возведение каркаса наружных стен из калиброванной доски 145 × 45 мм.",
      "Наружная обшивка стен качественной имитацией бруса с подготовкой под покраску.",
      "Ветрозащитная мембранная изоляция теплого контура."
    ],
    images: [
      "/images/portfolio/leskolovo/img_1.jpg",
      "/images/portfolio/leskolovo/img_2.jpg",
      "/images/portfolio/leskolovo/img_3.jpg",
      "/images/portfolio/leskolovo/img_4.jpg",
      "/images/portfolio/leskolovo/img_5.jpg",
      "/images/portfolio/leskolovo/img_6.jpg",
      "/images/portfolio/leskolovo/img_7.jpg",
      "/images/portfolio/leskolovo/img_8.jpg",
      "/images/portfolio/leskolovo/img_9.jpg",
      "/images/portfolio/leskolovo/img_10.jpg",
      "/images/portfolio/leskolovo/img_11.jpg",
      "/images/portfolio/leskolovo/img_12.jpg"
    ]
  },
  {
    id: "sever_zhemchuzhina",
    name: "Северная Жемчужина",
    location: "Песочное шоссе, КП «Северная Жемчужина»",
    size: "11.5 × 10 м",
    description: "Строительство премиального энергоэффективного каркасного коттеджа. Усиленная толщина стен и кровли гарантирует минимальные затраты на отопление в зимний период.",
    details: [
      "Разработка конструктивного решения под высокие требования по энергосбережению.",
      "Строительство каркасного дома с увеличенным сечением несущих элементов.",
      "Толщина утепления стенокомплекта и кровли — 200 мм (базальтовым утеплителем).",
      "Устройство пароизоляционного контура повышенной герметичности с проклейкой стыков лентами Delta.",
      "Монтаж кровельного пирога и подготовка к финишной отделке фасада."
    ],
    images: [
      "/images/portfolio/sever_zhemchuzhina/img_1.jpg",
      "/images/portfolio/sever_zhemchuzhina/img_2.jpg",
      "/images/portfolio/sever_zhemchuzhina/img_3.jpg",
      "/images/portfolio/sever_zhemchuzhina/img_4.jpg",
      "/images/portfolio/sever_zhemchuzhina/img_5.jpg",
      "/images/portfolio/sever_zhemchuzhina/img_6.jpg",
      "/images/portfolio/sever_zhemchuzhina/img_7.jpg",
      "/images/portfolio/sever_zhemchuzhina/img_8.jpg",
      "/images/portfolio/sever_zhemchuzhina/img_9.jpg",
      "/images/portfolio/sever_zhemchuzhina/img_10.jpg",
      "/images/portfolio/sever_zhemchuzhina/img_11.jpg",
      "/images/portfolio/sever_zhemchuzhina/img_12.jpg"
    ]
  }
];
