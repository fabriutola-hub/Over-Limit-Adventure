const shortOfficeAddress = "Calle Sag\u00e1rnaga N\u00b0 339";
const officeAddress = `${shortOfficeAddress}, entre Illampu y Linares, al lado del hotel Maya Inn`;
const mapsQuery = `${officeAddress}, La Paz, Bolivia`;

export const siteConfig = {
  brandName: "Over Limit Adventure",
  logoPath: "assets/images/OverLimitAdventureLogo.png",
  fontStylesheet:
    "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap",
  footerDescription:
    "Agencia especializada en trekking, climbing y experiencias privadas en Bolivia. Dise\u00f1amos aventuras confiables, memorables y visualmente poderosas.",
  headerCta: {
    label: "Reservar ahora",
    href: "pages/contacto.html"
  },
  routes: [
    { id: "home", label: "Inicio", href: "index.html" },
    { id: "tours", label: "Aventuras", href: "pages/tours.html" },
    { id: "about", label: "Nosotros", href: "pages/nosotros.html" },
    { id: "gallery", label: "Galer\u00eda", href: "pages/galeria.html" },
    { id: "contact", label: "Contacto", href: "pages/contacto.html" }
  ],
  footerExplore: [
    { label: "Tours y aventuras", href: "pages/tours.html" },
    { label: "Nuestra agencia", href: "pages/nosotros.html" },
    { label: "Galer\u00eda visual", href: "pages/galeria.html" }
  ],
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/overlimitadventure?igsh=emJpdnFpcjJmeDIw",
      target: "_blank"
    },
    { label: "WhatsApp", href: "https://wa.me/59162364372", target: "_blank" },
    {
      label: "Facebook",
      href: "https://www.facebook.com/share/1J522aN4kD/",
      target: "_blank"
    }
  ],
  contact: {
    email: "overlimitadventure1@gmail.com",
    phoneDisplay: "+591 62364372",
    phoneHref: "+59162364372",
    whatsappNumber: "59162364372",
    whatsappUrl: "https://wa.me/59162364372",
    city: "La Paz, Bolivia",
    shortOfficeAddress,
    officeAddress,
    mapsQuery,
    mapsSearchUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`,
    googleMapsApiKey: ""
  }
};

export const pageDefinitions = [
  {
    id: "home",
    outputPath: "index.html",
    basePath: ".",
    bodyClass: "home-page",
    title: "Over Limit Adventure | Trekking y Climbing en Bolivia",
    description:
      "Over Limit Adventure crea trekking, climbing y expediciones privadas en Bolivia con una direcci\u00f3n visual moderna, operaci\u00f3n seria y rutas memorables."
  },
  {
    id: "tours",
    outputPath: "pages/tours.html",
    basePath: "..",
    bodyClass: "adventures-page",
    title: "Aventuras | Over Limit Adventure",
    description:
      "Aventuras de trekking, climbing y expedici\u00f3n en Bolivia con una direcci\u00f3n visual cuidada, operaci\u00f3n seria y rutas memorables."
  },
  {
    id: "about",
    outputPath: "pages/nosotros.html",
    basePath: "..",
    bodyClass: "about-page",
    title: "Nosotros | Over Limit Adventure",
    description:
      "Conoce Over Limit Adventure, agencia de viajes de aventura en Bolivia especializada en trekking, climbing y biking extremo, con base en Calle Sag\u00e1rnaga N\u00b0 339."
  },
  {
    id: "gallery",
    outputPath: "pages/galeria.html",
    basePath: "..",
    bodyClass: "gallery-page",
    title: "Galer\u00eda | Over Limit Adventure",
    description:
      "Galer\u00eda visual curada de Over Limit Adventure para mostrar rutas, cumbres y paisajes de Bolivia."
  },
  {
    id: "contact",
    outputPath: "pages/contacto.html",
    basePath: "..",
    bodyClass: "contact-page",
    title: "Contacto | Over Limit Adventure",
    description:
      "Contacta a Over Limit Adventure para planear trekking, climbing y rutas privadas en Bolivia con una atenci\u00f3n clara y personalizada.",
    extraMeta: [
      {
        name: "google-maps-api-key",
        content: siteConfig.contact.googleMapsApiKey
      }
    ]
  }
];
