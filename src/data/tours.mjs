export const tourFilters = [
  { key: "all", label: "Todos" },
  { key: "trekking", label: "Trekking" },
  { key: "climbing", label: "Climbing" },
  { key: "amazon", label: "Amazon" },
  { key: "classic-tours", label: "Classic Tours" }
];

export const tourSections = [
  {
    id: "trekking",
    eyebrow: "Trekking",
    title: "Senderos de altura y travesias historicas",
    summary:
      "Rutas para caminar la Cordillera Real y los antiguos caminos andinos con perfiles que van desde panoramicas de altura hasta travesias largas.",
    metrics: [
      { label: "Clasicos", value: "Choro, Takesi, Condoriri" },
      { label: "Aclimatacion", value: "Pico Austria" },
      { label: "Travesia larga", value: "Trans Cordillera Real" }
    ],
    cards: [
      {
        variant: "hero",
        category: "Trekking",
        height: "4700 m / 1100 m",
        title: "Choro",
        image: "assets/images/el_choro.jpg",
        imageAlt: "Ruta El Choro",
        description:
          "Camino preincaico que cruza desde las montanas de nieve hacia los Yungas pacenos, mostrando en pocos dias un cambio climatico y visual muy marcado.",
        tags: ["Camino preincaico", "Yungas de La Paz", "Cambio de ecosistema"]
      },
      {
        variant: "blue",
        category: "Trekking",
        height: "",
        title: "Takesi",
        image: "assets/images/takesi.jpeg",
        imageAlt: "Camino Takesi",
        description:
          "Uno de los senderos del Inca mejor preservados en Bolivia, descendiendo desde los valles altos hasta una vegetacion tropical rodeada de rios y cambio de paisaje constante.",
        tags: ["Sendero del Inca", "Vegetacion tropical", "Rios de montana"]
      },
      {
        variant: "tall",
        category: "Trekking",
        height: "5100 m / 5648 m",
        title: "Condoriri Trek",
        image: "assets/images/condoriri.jpg",
        imageAlt: "Trekking en Condoriri",
        description:
          "Caminata de altura con vistas al macizo Condoriri, lagunas glaciares y posibilidades reales de ver condores sobre la Cordillera Real.",
        tags: ["13 picos nevados", "Lagunas glaciares", "Observacion de condores"]
      },
      {
        variant: "wide",
        category: "Trekking",
        height: "",
        title: "Pico Austria",
        image: "assets/images/pico_austria.jpg",
        imageAlt: "Vista panoramica de laguna y cumbres",
        description:
          "Ascenso panoramico con acceso relativamente amable, ideal para sentir la altura sin entrar todavia en la exigencia tecnica de una gran cumbre.",
        tags: ["Vistas panoramicas", "Ascenso accesible", "Buena aclimatacion"]
      },
      {
        variant: "yellow",
        category: "Trekking",
        height: "200 km",
        title: "Trans Cordillera Real",
        image: "assets/images/Cordillera_laguna.jpg",
        imageAlt: "Cordillera y laguna de altura",
        description:
          "Gran travesia de la Cordillera Real, desde Sorata hasta la zona este de Huayna Potosi, con jornadas largas y una lectura continua del territorio.",
        tags: ["Cordillera Real", "Sorata", "Varios dias"]
      }
    ]
  },
  {
    id: "climbing",
    eyebrow: "Climbing",
    title: "Cumbres iconicas y progresion tecnica",
    summary:
      "Ascensiones pensadas para combinar aclimatacion, tecnica y grandes montanas bolivianas en un bloque claro de alta montana.",
    metrics: [
      { label: "Iconicas", value: "Huayna Potosi, Illimani, Sajama" },
      { label: "Progresion", value: "Condoriri, Pequeno Alpamayo, Mururata" },
      { label: "Volcanes", value: "Parinacota, Acotango" }
    ],
    cards: [
      {
        variant: "hero",
        category: "Climbing",
        height: "6088 m",
        title: "Huayna Potosi",
        image: "assets/images/huayna_1.avif",
        imageAlt: "Fotografia de altura en Huayna Potosi",
        description:
          "Una de las montanas mas visitadas de Bolivia para iniciarse en altura. Combina acceso razonable, glaciar permanente y una vista potente sobre la Cordillera Real.",
        tags: ["Ideal para iniciarse", "Glaciares perpetuos", "Visible desde La Paz"]
      },
      {
        variant: "blue",
        category: "Climbing",
        height: "6490 m",
        title: "Illimani",
        image: "assets/images/Illimani.jpg",
        imageAlt: "Ruta de alta montana",
        description:
          "El protector de La Paz y una de las montanas mas iconicas de Sudamerica por su presencia, su exigencia intermedia y las vistas abiertas sobre la ciudad.",
        tags: ["Cumbre emblematica", "Dificultad media", "Vistas de La Paz"]
      },
      {
        variant: "tall",
        category: "Climbing",
        height: "6542 m",
        title: "Sajama",
        image: "assets/images/Sajama_2.jpg",
        imageAlt: "Paisaje del Sajama",
        description:
          "El pico mas alto de Bolivia, rodeado por volcanes y nevados del altiplano. La ascension se complementa con un entorno amplio y aguas termales al regreso.",
        tags: ["Pico mas alto", "Aguas termales", "Altiplano abierto"]
      },
      {
        variant: "yellow",
        category: "Climbing",
        height: "5648 m",
        title: "Condoriri",
        image: "assets/images/condoriri_2.jpg",
        imageAlt: "Macizo Condoriri",
        description:
          "El macizo Condoriri concentra varias lineas memorables. Su cumbre principal, conocida como la Cabeza del Condor, destaca por su perfil afilado y exigencia real.",
        tags: ["Cabeza del Condor", "Perfil iconico", "Ruta exigente"]
      },
      {
        category: "Climbing",
        height: "5871 m",
        title: "Mururata",
        image: "assets/images/mururata.jpg",
        imageAlt: "Arista de montana",
        description:
          "Vecino del Illimani y cercano a La Paz, ofrece una cara sur mas retadora para montanistas que buscan hielo, roca y una linea menos evidente.",
        tags: ["Cerca del Illimani", "Hielo y roca", "Cara sur"]
      },
      {
        category: "Climbing",
        height: "5425 m",
        title: "Pequeno Alpamayo",
        image: "assets/images/pequeno_alpamayo.jpg",
        imageAlt: "Campamento de altura",
        description:
          "Pico de altitud moderada, muy util para aclimatar y probar una ascension mas alta segun el objetivo y la evolucion del grupo.",
        tags: ["Altitud moderada", "Aclimatacion", "Progresion tecnica"]
      },
      {
        variant: "white",
        category: "Climbing",
        height: "6330 m",
        title: "Parinacota",
        image: "assets/images/Paranicota.jpg",
        imageAlt: "Paisaje volcanico del altiplano",
        description:
          "Volcan de cima amplia con crater visible y un panorama dominante sobre el Parque Nacional Sajama y sus grandes conos volcanicos.",
        tags: ["Crater en cumbre", "Parque Sajama", "Volcan andino"]
      },
      {
        category: "Climbing",
        height: "6052 m",
        title: "Acotango",
        image: "assets/images/acotango.jpg",
        imageAlt: "Volcan y ruta de altura",
        description:
          "Ascenso accesible en ambiente desertico de altura, con presencia de azufre y vistas limpias a las grandes piramides volcanicas del altiplano.",
        tags: ["Muy accesible", "Azufre", "Piramides volcanicas"]
      }
    ]
  },
  {
    id: "amazon",
    eyebrow: "Amazon",
    title: "Fauna y selva boliviana",
    summary:
      "Experiencias de naturaleza en tierras bajas para quienes quieren combinar observacion de fauna, humedad tropical y un ritmo distinto al de la montana.",
    metrics: [
      { label: "Fauna", value: "Pampas" },
      { label: "Selva", value: "Jungla" },
      { label: "Base habitual", value: "Rurrenabaque" }
    ],
    cards: [
      {
        variant: "hero",
        category: "Amazon",
        height: "",
        title: "Pampas",
        image: "assets/images/pampas.jpg",
        imageAlt: "Pampas amazonicas",
        description:
          "Programa centrado en observacion de fauna en habitat natural, ideal para quienes quieren una experiencia selvatica abierta y accesible.",
        tags: ["Fauna silvestre", "Habitat natural", "Experiencia amazonica"]
      },
      {
        variant: "blue",
        category: "Amazon",
        height: "",
        title: "Jungla",
        image: "assets/images/jungla_boliviana.jpg",
        imageAlt: "Jungla boliviana",
        description:
          "Exploracion de la selva tropical boliviana con entrada habitual por Rurrenabaque, en una experiencia mas humeda, densa e impredecible.",
        tags: ["Selva tropical", "Rurrenabaque", "Amazonia boliviana"]
      }
    ]
  },
  {
    id: "classic-tours",
    eyebrow: "Classic Tours",
    title: "Clasicos de paisaje, cultura y salidas cortas",
    summary:
      "Una seleccion pensada para viajeros que quieren combinar historia, altiplano, lagos, glaciares cercanos y rutas iconicas de Bolivia.",
    metrics: [
      { label: "Cultura", value: "Copacabana, Tiwanaku, Lago Titicaca" },
      { label: "Naturaleza", value: "Charquini, Salar de Uyuni" },
      { label: "Ruta extra", value: "Camino de la Muerte" }
    ],
    cards: [
      {
        variant: "hero",
        category: "Classic Tours",
        height: "",
        title: "Copacabana",
        image: "assets/images/copacabana.jpg",
        imageAlt: "Vista de Copacabana",
        description:
          "Destino lacustre con miradores, travesias en lancha y acceso a la Isla del Sol y la Isla de la Luna, en un entorno cargado de simbolismo andino.",
        tags: ["Calvario", "Isla del Sol", "Paisaje lacustre"]
      },
      {
        variant: "blue",
        category: "Classic Tours",
        height: "",
        title: "Tiwanaku",
        image: "assets/images/tiwanaku.webp",
        imageAlt: "Sitio arqueologico Tiwanaku",
        description:
          "Uno de los sitios arqueologicos mas importantes de Bolivia, clave para entender el desarrollo religioso y cultural de Tiwanaku.",
        tags: ["Arqueologia", "Historia andina", "Patrimonio"]
      },
      {
        variant: "tall",
        category: "Classic Tours",
        height: "",
        title: "Charquini",
        image: "assets/images/charquini.jpg",
        imageAlt: "Glaciar de Charquini",
        description:
          "Salida corta desde La Paz hacia un glaciar con vistas de hielo, nieve y la conocida Laguna Esmeralda como punto visual central.",
        tags: ["Glaciar", "Hielo y nieve", "Laguna Esmeralda"]
      },
      {
        variant: "wide",
        category: "Classic Tours",
        height: "",
        title: "Lago Titicaca",
        image: "assets/images/lago_titicaca.jpg",
        imageAlt: "Lago Titicaca",
        description:
          "Ruta cultural que cruza paisajes abiertos, comunidades del altiplano y ruinas historicas vinculadas a la Isla del Sol.",
        tags: ["Sendero cultural", "Isla del Sol", "Ruinas andinas"]
      },
      {
        category: "Classic Tours",
        height: "",
        title: "Salar de Uyuni",
        image: "assets/images/salar_de_uyuni.webp",
        imageAlt: "Salar de Uyuni",
        description:
          "El salar mas grande del mundo y una region semidesertica de fuerte impacto visual, combinada con lagunas y formaciones volcanicas.",
        tags: ["Gran escala", "Tierras volcanicas", "Lagunas de color"]
      },
      {
        variant: "yellow",
        category: "Classic Tours",
        height: "80 km",
        title: "Camino de la Muerte",
        image: "assets/images/camino_de_la_muerte.jpg",
        imageAlt: "Ruta Camino de la Muerte",
        description:
          "Descenso en bicicleta entre altura y Yungas, conocido por la transicion radical de clima, vegetacion y sensacion de velocidad.",
        tags: ["Descenso en bicicleta", "Yungas", "Adrenalina"]
      }
    ]
  }
];

export const tourCount = tourSections.reduce((total, section) => total + section.cards.length, 0);

export const tourPageContent = {
  hero: {
    eyebrow: "Aventuras en Bolivia",
    stamps: ["Trekking", "Climbing", "Amazon", "Classic Tours"],
    title: "Aventuras",
    description:
      "Elige la ruta segun el tipo de experiencia, el nivel y el ritmo con el que quieres recorrer Bolivia.",
    actions: [
      { label: "Disenar mi aventura", href: "pages/contacto.html", variant: "primary" },
      { label: "Ir al catalogo", href: "pages/tours.html#catalogo-aventuras", variant: "secondary" }
    ]
  },
  poster: {
    image: "assets/images/grupo.jpeg",
    imageAlt: "Grupo de viajeros",
    metrics: [
      { value: String(tourCount), label: "rutas activas" },
      { value: String(tourSections.length).padStart(2, "0"), label: "tipos de aventura" },
      { value: "La Paz", label: "base de operacion" }
    ]
  },
  sideNote: {
    label: "Enfoque",
    text: "Rutas armadas con lectura real de altura, tiempos, exposicion y progresion."
  },
  rhythmCards: [
    {
      title: "Elige por experiencia",
      text: "Encuentra rutas de caminata, alta montana, selva y salidas clasicas segun el viaje que quieres hacer."
    },
    {
      title: "Busca mas rapido",
      text: "Filtra por tipo de aventura y revisa solo las opciones que realmente te interesan.",
      variant: "blue"
    },
    {
      title: "Operacion local",
      text: "Cada salida se organiza con logistica clara, tiempos realistas y acompanamiento desde La Paz."
    }
  ],
  cta: {
    label: "Siguiente paso",
    title: "Tu aventura no necesita parecerse a otra.",
    description:
      "Comentanos la fecha y el objetivo. Nosotros lo transformamos en una ruta bien construida, con logistica clara y una propuesta que se vea tan solida como se opera.",
    action: { label: "Reservar aventura", href: "pages/contacto.html", variant: "primary" }
  }
};
