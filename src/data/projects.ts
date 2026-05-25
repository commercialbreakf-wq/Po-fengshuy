export interface Project {
  id: number;
  name: string;
  category: "Эконом" | "Комфорт" | "Premium";
  image: string;
  gallery: string[];
  area: string;
  time: string;
  price: string;
  numericPrice: number;
  bedrooms: number;
  bathrooms: number;
  floors: number;
  description: string;
  specifications: {
    foundation: string;
    walls: string;
    roof: string;
    insulation: string;
    facade: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Optima 80",
    category: "Эконом",
    image: "/images/optima_80.png",
    gallery: ["/images/optima_80.png", "/images/interior_economy.png", "/images/house_layout.png"],
    area: "80 м²",
    time: "от 45 дней",
    price: "от 6,8 млн ₽",
    numericPrice: 6800000,
    bedrooms: 2,
    bathrooms: 1,
    floors: 1,
    description: "Компактный и функциональный одноэтажный дом в современном стиле. Отличное решение для молодой семьи или в качестве уютной загородной дачи. Продуманная планировка минимизирует неиспользуемую площадь, сохраняя ощущение простора в гостиной.",
    specifications: {
      foundation: "Железобетонные сваи с деревянным ростверком",
      walls: "Каркасная технология, утеплитель 150 мм",
      roof: "Металлочерепица Grand Line",
      insulation: "Минеральная вата Rockwool",
      facade: "Имитация бруса с покраской Tikkurila"
    }
  },
  {
    id: 2,
    name: "Scandi 110",
    category: "Эконом",
    image: "/images/scandi_110.png",
    gallery: ["/images/scandi_110.png", "/images/interior_economy.png", "/images/house_layout.png"],
    area: "110 м²",
    time: "от 60 дней",
    price: "от 8,9 млн ₽",
    numericPrice: 8900000,
    bedrooms: 3,
    bathrooms: 2,
    floors: 1,
    description: "Просторный одноэтажный дом в традиционном скандинавском стиле. Высокие потолки в зоне кухни-гостиной (второй свет) наполняют дом светом и объемом. Удобное зонирование отделяет спальную зону от общей.",
    specifications: {
      foundation: "Монолитная железобетонная плита 250 мм",
      walls: "Газобетонные блоки D400 с армированием",
      roof: "Кликфальц Pro",
      insulation: "Базальтовая вата Paroc 100 мм",
      facade: "Декоративная штукатурка с деревянными планкенами"
    }
  },
  {
    id: 3,
    name: "Family 150",
    category: "Комфорт",
    image: "/images/family_150.png",
    gallery: ["/images/family_150.png", "/images/interior_comfort.png", "/images/house_layout.png"],
    area: "150 м²",
    time: "от 90 дней",
    price: "от 14,5 млн ₽",
    numericPrice: 14500000,
    bedrooms: 4,
    bathrooms: 2,
    floors: 2,
    description: "Классический двухэтажный загородный дом для постоянного проживания большой семьи. На первом этаже расположена просторная терраса, гостевая спальня и светлая гостиная с камином. На втором этаже — три спальни и гардеробная.",
    specifications: {
      foundation: "Утепленная шведская плита (УШП) с теплым полом",
      walls: "Газобетон D500 с монолитным железобетонным каркасом",
      roof: "Цементно-песчаная черепица Braas",
      insulation: "Экструдированный пенополистирол 150 мм",
      facade: "Облицовочный кирпич ручной формовки"
    }
  },
  {
    id: 4,
    name: "Horizon 180",
    category: "Комфорт",
    image: "/images/horizon_180.png",
    gallery: ["/images/horizon_180.png", "/images/interior_comfort.png", "/images/house_layout.png"],
    area: "180 м²",
    time: "от 110 дней",
    price: "от 18,9 млн ₽",
    numericPrice: 18900000,
    bedrooms: 3,
    bathrooms: 3,
    floors: 1,
    description: "Премиальный одноэтажный дом с плоской кровлей и панорамным остеклением. Роскошная мастер-спальня со своим санузлом и гардеробной. Огромная крытая терраса с зоной барбекю идеально подходит для вечеров в кругу друзей.",
    specifications: {
      foundation: "Монолитный железобетонный фундамент под УШП",
      walls: "Крупноформатные керамические блоки Porotherm",
      roof: "Эксплуатируемая плоская кровля с мембраной Technonicol Logicroof",
      insulation: "PIR-плиты повышенной плотности 200 мм",
      facade: "Термодерево и керамогранитные панели"
    }
  },
  {
    id: 5,
    name: "Residence 250",
    category: "Premium",
    image: "/images/house_premium.png",
    gallery: ["/images/house_premium.png", "/images/lifestyle_interior.png", "/images/house_layout.png"],
    area: "250 м²",
    time: "от 180 дней",
    price: "от 32,5 млн ₽",
    numericPrice: 32500000,
    bedrooms: 4,
    bathrooms: 4,
    floors: 2,
    description: "Ультрасовременная двухэтажная вилла в стиле хай-тек. Архитектурный проект премиум-класса с навесом на 2 автомобиля, вторым светом и эксплуатируемой террасой на втором этаже. Предусмотрена спа-зона с сауной.",
    specifications: {
      foundation: "Монолитный плитный фундамент на буронабивных сваях",
      walls: "Монолитный железобетонный каркас с заполнением кирпичом",
      roof: "Инверсионная плоская кровля с гравийной засыпкой",
      insulation: "Минераловатные плиты повышенной жесткости 250 мм",
      facade: "Натуральный камень (сланец), планкен из лиственницы, HPL-панели"
    }
  },
  {
    id: 6,
    name: "Villa 400",
    category: "Premium",
    image: "/images/house_comfort.png",
    gallery: ["/images/house_comfort.png", "/images/lifestyle_interior.png", "/images/house_layout.png"],
    area: "400 м²",
    time: "от 240 дней",
    price: "от 59,0 млн ₽",
    numericPrice: 59000000,
    bedrooms: 5,
    bathrooms: 5,
    floors: 2,
    description: "Монументальная загородная резиденция для ценителей абсолютного комфорта. Индивидуальный дизайн-проект интерьеров, панорамные раздвижные порталы шириной до 6 метров, собственный бассейн 8х3 метра и встроенный гараж на 2 машины.",
    specifications: {
      foundation: "Усиленная монолитная плита 400 мм с гидроизоляцией премиум уровня",
      walls: "Монолитно-кирпичная конструкция с повышенной звукоизоляцией",
      roof: "Зеленая эксплуатируемая кровля с автоматическим поливом",
      insulation: "Напыляемый полиуретан и PIR-системы 250 мм",
      facade: "Юрский мрамор, термоясень, архитектурный бетон"
    }
  }
];
