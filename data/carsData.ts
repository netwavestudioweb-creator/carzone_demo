export interface Car {
  id: string;
  brand: string;
  model: string;
  category: "SUV" | "Berline" | "Citadine" | "Monospace" | "Pick-up" | string;
  engine: "100% Électrique" | "Hybride Rechargeable" | "Essence / Hybride" | string;
  price?: string;
  image: string;
  features?: string[];
}

export const carsInventory: Car[] = [
  // =========================================================================
  // BYD (Build Your Dream)
  // =========================================================================
  {
    id: "byd-seal",
    brand: "BYD",
    model: "Seal Performance AWD",
    category: "Berline",
    engine: "100% Électrique",
    price: "36 500 000 FCFA",
    image: "/images/cars/byd-seal.jpg",
    features: [
      "Autonomie 570 km (CLTC)",
      "0 à 100 km/h en 3.8s",
      "Batterie Blade haute sécurité",
      "Écran rotatif 15.6 pouces",
      "Sonorisation Dynaudio 12 HP",
    ],
  },
  {
    id: "byd-tang",
    brand: "BYD",
    model: "Tang EV 4WD",
    category: "SUV",
    engine: "100% Électrique",
    price: "42 000 000 FCFA",
    image: "/images/cars/byd-tang.jpg",
    features: [
      "Configuration 7 places grand confort",
      "Autonomie 600 km",
      "Transmission intégrale électrique",
      "Suspension pilotée DiSus-C",
      "Toit panoramique ouvrant",
    ],
  },
  {
    id: "byd-dolphin",
    brand: "BYD",
    model: "Dolphin Fashion Edition",
    category: "Citadine",
    engine: "100% Électrique",
    price: "18 500 000 FCFA",
    image: "/images/cars/byd-dolphin.jpg",
    features: [
      "Autonomie 405 km urbaine & périurbaine",
      "Recharge rapide 30 min",
      "Caméra panoramique 360°",
      "Design bicolore moderne",
      "Agilité optimale en ville",
    ],
  },
  {
    id: "byd-song-plus",
    brand: "BYD",
    model: "Song Plus DM-i Flagship",
    category: "SUV",
    engine: "Hybride Rechargeable",
    price: "28 500 000 FCFA",
    image: "/images/cars/byd-song.jpg",
    features: [
      "Autonomie cumulée 1 200 km",
      "Consommation ultra-basse 4.4L/100 km",
      "Sellerie cuir premium ventilée",
      "Cockpit numérique connecté DiLink",
      "Garantie batterie 8 ans",
    ],
  },
  {
    id: "byd-shark",
    brand: "BYD",
    model: "Shark DMO Super Hybrid",
    category: "Pick-up",
    engine: "Hybride Rechargeable",
    price: "44 000 000 FCFA",
    image: "/images/cars/placeholder-car.jpg",
    features: [
      "Puissance combinée de 430 ch",
      "Capacité de remorquage 2 500 kg",
      "Transmission intégrale tout-terrain électrique",
      "Suspension indépendante aux 4 roues",
      "Fonction alimentation externe V2L",
    ],
  },

  // =========================================================================
  // JETOUR
  // =========================================================================
  {
    id: "jetour-dashing",
    brand: "Jetour",
    model: "DASHING i-DM",
    category: "SUV",
    engine: "Hybride Rechargeable",
    price: "25 500 000 FCFA",
    image: "/images/cars/jetour-dashing.jpg",
    features: [
      "Design avant-gardiste futuriste",
      "Poignées affleurantes rétractables",
      "Double écran géant 15.6 pouces",
      "Conduite semi-autonome niveau 2+",
      "Jantes sport 20 pouces",
    ],
  },
  {
    id: "jetour-traveller",
    brand: "Jetour",
    model: "Traveller T2 4x4",
    category: "SUV",
    engine: "Essence / Hybride",
    price: "31 000 000 FCFA",
    image: "/images/cars/jetour-traveller.jpg",
    features: [
      "Transmission intégrale XWD intelligente",
      "Moteur 2.0T 254 chevaux",
      "Garde au sol 220 mm tout-terrain",
      "Châssis haute résistance renforcé",
      "Système audio Sony 12 HP",
    ],
  },
  {
    id: "jetour-x70-plus",
    brand: "Jetour",
    model: "X70 Plus Luxury 7 Places",
    category: "SUV",
    engine: "Essence / Hybride",
    price: "22 500 000 FCFA",
    image: "/images/cars/placeholder-car.jpg",
    features: [
      "Habitacle spacieux 7 places modulable",
      "Boîte automatique à double embrayage",
      "Purification d'air d'habitacle CN95",
      "Climatisation automatique multi-zones",
      "Coffre XXL pour longs trajets",
    ],
  },

  // =========================================================================
  // CHANGAN & DEEPAL
  // =========================================================================
  {
    id: "changan-uni-k",
    brand: "Changan",
    model: "UNI-K iDD Prestige",
    category: "SUV",
    engine: "Hybride Rechargeable",
    price: "33 000 000 FCFA",
    image: "/images/cars/changan-unik.jpg",
    features: [
      "Ligne de coupé fastback Vision-V",
      "Autonomie combinée 1 100 km",
      "Sièges zéro-gravité avec massage",
      "Système audio immersif 14 HP",
      "Aileron aérodynamique actif",
    ],
  },
  {
    id: "changan-cs75-plus",
    brand: "Changan",
    model: "CS75 Plus 2.0T",
    category: "SUV",
    engine: "Essence / Hybride",
    price: "24 000 000 FCFA",
    image: "/images/cars/placeholder-car.jpg",
    features: [
      "Moteur Blue Core 2.0T avec boîte Aisin 8",
      "Double dalle panoramique 12.3 pouces",
      "Sellerie cuir bordeaux surpiqué",
      "Freinage d'urgence et régulateur adaptatif",
      "Fiabilité mécanique éprouvée",
    ],
  },
  {
    id: "changan-deepal-sl03",
    brand: "Changan",
    model: "Deepal SL03 EV",
    category: "Berline",
    engine: "100% Électrique",
    price: "29 500 000 FCFA",
    image: "/images/cars/changan-deepal.jpg",
    features: [
      "Coefficient de traînée ultra-bas 0.23",
      "Autonomie 705 km",
      "Affichage tête haute en réalité augmentée",
      "Portes sans cadre et toit en verre",
      "Châssis propulsion ultra-dynamique",
    ],
  },
  {
    id: "changan-hunter",
    brand: "Changan",
    model: "Hunter EREV Super 4WD",
    category: "Pick-up",
    engine: "Hybride Rechargeable",
    price: "38 000 000 FCFA",
    image: "/images/cars/placeholder-car.jpg",
    features: [
      "Premier pick-up à prolongateur d'autonomie",
      "Double moteur électrique 272 ch",
      "Autonomie globale supérieure à 1 000 km",
      "Benne ultra-robuste avec prises 220V",
      "Capacité de franchissement exceptionnelle",
    ],
  },

  // =========================================================================
  // HONGQI (Le Luxe d'État Chinois)
  // =========================================================================
  {
    id: "hongqi-ehs9",
    brand: "Hongqi",
    model: "E-HS9 Imperial Flagship",
    category: "SUV",
    engine: "100% Électrique",
    price: "75 000 000 FCFA",
    image: "/images/cars/hongqi-ehs9.jpg",
    features: [
      "Présence majestueuse de limousine SUV",
      "Puissance bi-moteur 551 chevaux AWD",
      "6 écrans tactiles panoramiques intégrés",
      "Sellerie cuir Nappa et boiseries précieuses",
      "Suspension pneumatique adaptative",
    ],
  },
  {
    id: "hongqi-h9",
    brand: "Hongqi",
    model: "H9 Executive Limousine",
    category: "Berline",
    engine: "Essence / Hybride",
    price: "58 000 000 FCFA",
    image: "/images/cars/placeholder-car.jpg",
    features: [
      "Finition bicolore royale",
      "Sièges arrière First-Class inclinables",
      "Insonorisation acoustique multicouche",
      "Moteur V6 Turbo 283 ch",
      "Éclairage d'accueil dynamique à LED",
    ],
  },

  // =========================================================================
  // ZEEKR (Geely Premium EV Group)
  // =========================================================================
  {
    id: "zeekr-001",
    brand: "Zeekr",
    model: "001 Shooting Brake AWD",
    category: "Berline",
    engine: "100% Électrique",
    price: "52 000 000 FCFA",
    image: "/images/cars/zeekr-001.jpg",
    features: [
      "544 chevaux et 0 à 100 km/h en 3.8s",
      "Autonomie 620 km",
      "Suspension pneumatique à hauteur variable",
      "Processeur Snapdragon 8295 nouvelle génération",
      "Sonorisation Yamaha Surround",
    ],
  },
  {
    id: "zeekr-009",
    brand: "Zeekr",
    model: "009 Grand Luxe MPV",
    category: "Monospace",
    engine: "100% Électrique",
    price: "68 000 000 FCFA",
    image: "/images/cars/zeekr-009.jpg",
    features: [
      "Salon VIP roulant 6 places grand luxe",
      "Batterie CATL Qilin avec autonomie 822 km",
      "Calandre avant chromée 'Spring of Light'",
      "Écran cinéma rétractable 15.6 pouces arrière",
      "Accès à bord par portes coulissantes électriques",
    ],
  },
  {
    id: "zeekr-x",
    brand: "Zeekr",
    model: "Zeekr X Urban Elite",
    category: "SUV",
    engine: "100% Électrique",
    price: "32 000 000 FCFA",
    image: "/images/cars/placeholder-car.jpg",
    features: [
      "SUV urbain compact ultra-luxueux",
      "0 à 100 km/h en 3.7 secondes",
      "Écran central coulissant vers le passager",
      "Réfrigérateur de bord intégré",
      "Design minimaliste sans poignées visibles",
    ],
  },

  // =========================================================================
  // VOLKSWAGEN (Gamme ID. Chine)
  // =========================================================================
  {
    id: "vw-id4-crozz",
    brand: "Volkswagen",
    model: "ID.4 Crozz Prime 4Motion",
    category: "SUV",
    engine: "100% Électrique",
    price: "34 000 000 FCFA",
    image: "/images/cars/vw-id4.jpg",
    features: [
      "Plateforme modulaire électrique MEB",
      "Transmission intégrale 4Motion",
      "Autonomie 550 km",
      "Projecteurs Matrix LED adaptatifs IQ.Light",
      "Affichage tête haute en réalité augmentée",
    ],
  },
  {
    id: "vw-id6-crozz",
    brand: "Volkswagen",
    model: "ID.6 Crozz Pro 6/7 Places",
    category: "SUV",
    engine: "100% Électrique",
    price: "41 000 000 FCFA",
    image: "/images/cars/vw-id6.jpg",
    features: [
      "SUV familial 3 rangées de sièges",
      "Autonomie 580 km",
      "Toit en verre panoramique thermique",
      "Système de conduite assistée Travel Assist",
      "Confort de suspension allemand éprouvé",
    ],
  },

  // =========================================================================
  // CHERY
  // =========================================================================
  {
    id: "chery-tiggo-9",
    brand: "Chery",
    model: "Tiggo 9 Prestige Flagship",
    category: "SUV",
    engine: "Essence / Hybride",
    price: "29 500 000 FCFA",
    image: "/images/cars/chery-tiggo9.jpg",
    features: [
      "Moteur 2.0T 261 ch boîte automatique 8",
      "Intérieur cuir Nappa d'exception",
      "Suspension électromagnétique CDC",
      "Système audio surround Sony 14 haut-parleurs",
      "Format 7 places grand luxe",
    ],
  },
  {
    id: "chery-tiggo-8-pro",
    brand: "Chery",
    model: "Tiggo 8 Pro Max 4WD",
    category: "SUV",
    engine: "Essence / Hybride",
    price: "24 500 000 FCFA",
    image: "/images/cars/chery-tiggo8.jpg",
    features: [
      "Transmission 4 roues motrices intelligentes",
      "Double écran intégré 24.6 pouces",
      "Pack complet d'aides à la conduite ADAS",
      "Climatisation bi-zone indépendante arrière",
      "Excellent rapport qualité / prix / équipement",
    ],
  },

  // =========================================================================
  // WULING (SGMW)
  // =========================================================================
  {
    id: "wuling-mini-ev",
    brand: "Wuling",
    model: "Hongguang Mini EV Macaron",
    category: "Citadine",
    engine: "100% Électrique",
    price: "9 500 000 FCFA",
    image: "/images/cars/wuling-mini.jpg",
    features: [
      "N°1 des ventes de citadines électriques",
      "Autonomie 170 à 215 km",
      "Recharge sur simple prise 220V secteur",
      "Coût d'entretien et d'énergie imbattable",
      "Rayon de braquage ultra-court pour Cotonou",
    ],
  },
];
