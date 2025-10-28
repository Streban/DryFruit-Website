export interface Variety {
  id: string;
  name: string;
  clickable?: boolean;
  availability: AvailabilityMonth[];
}

export interface AvailabilityMonth {
  month: string;
  available: boolean;
}

export interface OriginLocation {
  name: string;
  coordinates: [number, number]; // [latitude, longitude]
}

export interface Product {
  id: string;
  name: string;
  heroImage: string;
  description: string;
  detailedDescription: string;
  varieties: Variety[];
  origins: OriginLocation[];
  nutritionalInfo?: string;
  points: string[];
  coverPhoto?: string;
  type: string; // Added type property
  navName: string;
  navLink: string;
}

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Helper function to create availability data
const createAvailability = (availableMonths: number[]): AvailabilityMonth[] => {
  return months.map((month, index) => ({
    month,
    available: availableMonths.includes(index + 1),
  }));
};

export const productsData: Record<string, Product> = {
  KambriAlmondsShelled: {
    id: "kambri-almonds-shelled",
    navLink:'KambriAlmondsShelled',
    name: "Kambri Almonds",
    navName: "Kambri",
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1761567270/Kambri_Almonds_Sheelled_fd2hy1.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634013/Almond_oq1zep.jpg",
    description:
      "Premium quality almonds sourced from the finest orchards of Pakistan. Rich in protein, healthy fats, and essential nutrients.",
    detailedDescription:
      "Our almonds are carefully selected from the best orchards across Pakistan. These nutrient-dense nuts are perfect for snacking, baking, or adding to your favorite recipes. Rich in vitamin E, magnesium, and healthy monounsaturated fats, almonds support heart health and provide sustained energy throughout the day.",
    points: [
      "Firm & Rich: Firm, flavourful, and deeply nutty, offering a satisfying texture with every bite.",
      "Nutty Depth: Known for its rich taste that elevates gourmet blends and fine desserts.",
      "Premium Quality: Ideal for premium nut mixes, dessert toppings like ice creams and yogurts, and chocolate coatings.",
      "Origin: Zhob – renowned for fertile soils and traditional almond cultivation.",
      "Size: 26/28 per ounce.",
      "Storage: Ambient – maintains freshness, aroma, and natural crunch",
    ],
    varieties: [
      {
        id: "kambri-blanched",
        name: "Kambri Almonds",
        availability: createAvailability([10, 11, 12, 1, 2,3]),
      },
    ],
    origins: [
      { name: "Zhob", coordinates: [31.3412, 69.4486] },
    ],
    nutritionalInfo: "High in protein, vitamin E, magnesium, and healthy fats",
    type: "Almonds",
  },
  KambriAlmondsUnshelled: {
    id: "kambri-almonds-unshelled",
    navLink:'KambriAlmondsUnshelled',
    name: "Kambri Almonds",
    navName: "Kambri",
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1761567188/Kambri_Almonds_meztfp.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634013/Almond_oq1zep.jpg",
    description:
      "Premium quality almonds sourced from the finest orchards of Pakistan. Rich in protein, healthy fats, and essential nutrients.",
    detailedDescription:
      "Our almonds are carefully selected from the best orchards across Pakistan. These nutrient-dense nuts are perfect for snacking, baking, or adding to your favorite recipes. Rich in vitamin E, magnesium, and healthy monounsaturated fats, almonds support heart health and provide sustained energy throughout the day.",
    points: [
      "Firm & Rich: Firm, flavourful, and deeply nutty, offering a satisfying texture with every bite.",
      "Nutty Depth: Known for its rich taste that elevates gourmet blends and fine desserts.",
      "Premium Quality: Ideal for premium nut mixes, dessert toppings like ice creams and yogurts, and chocolate coatings.",
      "Origin: Zhob – renowned for fertile soils and traditional almond cultivation.",
      "Size: 11/13 per ounce.",
      "Storage: Ambient – maintains freshness, aroma, and natural crunch",
    ],
    varieties: [
      {
        id: "kambri-blanched",
        name: "Kambri Almonds",
        availability: createAvailability([10, 11, 12, 1, 2 ,3]),
      },
    ],
    origins: [
      { name: "Zhob", coordinates: [31.3412, 69.4486] },
    ],
    nutritionalInfo: "High in protein, vitamin E, magnesium, and healthy fats",
    type: "Almonds",
  },
  KalamDanaAlmondsShelled: {
    id: "kalamdana-almonds-shelled",
    name: "Kalam Dana Almonds",
    navLink:'KalamDanaAlmondsShelled',
    navName: "Kalam Dana",
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760633948/Kalamdana_Almond_shelled_nzxkju.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634013/Almond_oq1zep.jpg",
    description:
      "Premium quality almonds sourced from the finest orchards of Pakistan. Rich in protein, healthy fats, and essential nutrients.",
    detailedDescription:
      "Our almonds are carefully selected from the best orchards across Pakistan. These nutrient-dense nuts are perfect for snacking, baking, or adding to your favorite recipes. Rich in vitamin E, magnesium, and healthy monounsaturated fats, almonds support heart health and provide sustained energy throughout the day.",
    points: [
      "Soft & Aromatic: Slightly bitter-sweet with a distinctive aromatic profile.",
      "Balanced Flavour: Smooth texture with subtle depth, perfect for functional foods.",
      "Functional Use: Commonly used in nutritional supplements, energy/protein bars, and bakery products focused on performance.",
      "Origin: Kalat – an almond-growing region known for rich, mineral soils.",
      "Size: 30/32 per ounce.",
      "Storage: Ambient – preserves texture and nutritional integrity.",
    ],
    varieties: [
      {
        id: "kalamdana",
        name: "Kalamdana Almonds",
        availability: createAvailability([10, 11, 12, 1, 2 ,3]),
      },
    ],
    origins: [
      { name: "Kalat", coordinates: [29.0233, 66.5897] },
    ],
    nutritionalInfo: "High in protein, vitamin E, magnesium, and healthy fats",
    type: "Almonds",
  },
  KalamDanaAlmondsUnshelled: {
    id: "kalamdana-almonds-unshelled",
    navLink:'KalamDanaAlmondsUnshelled',
    name: "Kalam Dana Almonds",
    navName: "Kalam Dana",
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1761567356/Kalamdana_Almonds_trchsz.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634013/Almond_oq1zep.jpg",
    description:
      "Premium quality almonds sourced from the finest orchards of Pakistan. Rich in protein, healthy fats, and essential nutrients.",
    detailedDescription:
      "Our almonds are carefully selected from the best orchards across Pakistan. These nutrient-dense nuts are perfect for snacking, baking, or adding to your favorite recipes. Rich in vitamin E, magnesium, and healthy monounsaturated fats, almonds support heart health and provide sustained energy throughout the day.",
    points: [
      "Soft & Aromatic: Slightly bitter-sweet with a distinctive aromatic profile.",
      "Balanced Flavour: Smooth texture with subtle depth, perfect for functional foods.",
      "Functional Use: Commonly used in nutritional supplements, energy/protein bars, and bakery products focused on performance.",
      "Origin: Kalat – an almond-growing region known for rich, mineral soils.",
      "Size: 13/15 per ounce.",
      "Storage: Ambient – preserves texture and nutritional integrity.",
    ],
    varieties: [
      {
        id: "kalamdana",
        name: "Kalamdana Almonds",
        availability: createAvailability([10, 11, 12, 1, 2 ,3]),
      },
    ],
    origins: [
      { name: "Kalat", coordinates: [29.0233, 66.5897] },
    ],
    nutritionalInfo: "High in protein, vitamin E, magnesium, and healthy fats",
    type: "Almonds",
  },
  KattaJumboAlmondsShelled: {
    id: "katta-jumbo-almonds-shelled",
    navLink:'KattaJumboAlmondsShelled',
    name: "Katta Jumbo Almonds",
    navName: "Katta Jumbo",
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760633951/Katta_Jumbo_Shelled_rh5hss.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634013/Almond_oq1zep.jpg",
    description:
      "Premium quality almonds sourced from the finest orchards of Pakistan. Rich in protein, healthy fats, and essential nutrients.",
    detailedDescription:
      "Our almonds are carefully selected from the best orchards across Pakistan. These nutrient-dense nuts are perfect for snacking, baking, or adding to your favorite recipes. Rich in vitamin E, magnesium, and healthy monounsaturated fats, almonds support heart health and provide sustained energy throughout the day.",
    points: [
      "Distinctively Large & Crunchy: Each almond stands out for its impressive size and satisfying crunch.",
      "Delicately Flavoured: A natural hint of sweetness enhances the nut’s refined taste.",
      "Premium Delicacy: Perfect for specialty liqueurs and gourmet dry fruit snacks.",
      "Origin: Skardu – known for its high-altitude almond orchards and rich agricultural heritage.",
      "Size: 20/22 per ounce.",
      "Storage: Ambient – ideal for maintaining freshness and natural oils.",
    ],
    varieties: [
      {
        id: "Katta Jumbo",
        name: "Katta Jumbo",
        availability: createAvailability([9, 10, 11, 12, 1, 2]),
      },
    ],
    origins: [
      { name: "Skardu", coordinates: [35.32471, 75.55096] },
    ],
    nutritionalInfo: "High in protein, vitamin E, magnesium, and healthy fats",
    type: "Almonds",
  },
  KattaJumboAlmondsUnshelled: {
    id: "katta-jumbo-almonds-unshelled",
    navLink:'KattaJumboAlmondsUnshelled',
    name: "Katta Jumbo Almonds",
    navName: "Katta Jumbo",
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1761564599/Katta_Jumbo_t6ie0a.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634013/Almond_oq1zep.jpg",
    description:
      "Premium quality almonds sourced from the finest orchards of Pakistan. Rich in protein, healthy fats, and essential nutrients",
    detailedDescription:
      "Our almonds are carefully selected from the best orchards across Pakistan. These nutrient-dense nuts are perfect for snacking, baking, or adding to your favorite recipes. Rich in vitamin E, magnesium, and healthy monounsaturated fats, almonds support heart health and provide sustained energy throughout the day.",
    points: [
      "Distinctively Large & Crunchy: Each almond stands out for its impressive size and satisfying crunch.",
      "Delicately Flavoured: A natural hint of sweetness enhances the nut’s refined taste.",
      "Premium Delicacy: Perfect for specialty liqueurs and gourmet dry fruit snacks.",
      "Origin: Skardu – known for its high-altitude almond orchards and rich agricultural heritage.",
      "Size: 8/10 per ounce.",
      "Storage: Ambient – ideal for maintaining freshness and natural oils.",
    ],
    varieties: [
      {
        id: "Katta Jumbo",
        name: "Katta Jumbo",
        availability: createAvailability([9, 10, 11, 12, 1, 2]),
      },
    ],
    origins: [
      { name: "Skardu", coordinates: [35.32471, 75.55096] },
    ],
    nutritionalInfo: "High in protein, vitamin E, magnesium, and healthy fats",
    type: "Almonds",
  },
  SultanaRaisins: {
    id: "sultana-raisins",
    navLink:'SultanaRaisins',
    name: "Sultana Raisins",
    navName: "Sultana",
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760633969/Sultana_Raisin_gbrctl.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634033/raisins_gee7sw.avif",
    description:
      "Pakistani raisins are renowned for their rich flavor, natural sweetness, and traditional sun-drying methods that preserve their authentic taste. Grown in regions of Baluchistan province",
    detailedDescription:
      "Our raisins are naturally sun-dried to preserve their nutritional value and enhance their natural sweetness. These golden gems are packed with antioxidants, fiber, and essential minerals. Whether enjoyed as a healthy snack or used in baking and cooking, our raisins deliver exceptional quality and taste.",
    points: [
      "Soft & Juicy: Sweet, light, and tender with a subtle golden hue.",
      "Mildly Aromatic: Natural sweetness and fruity notes make it a chef’s favourite.",
      "Culinary Use: Used in pastries, curries, pilafs, and cheese boards.",
      "Origin: Pishin – a key centre for premium raisin production.",
      "Size: 50/60 per ounce.",
      "Storage: Ambient – preserves juiciness and fresh aroma.",
    ],
    varieties: [
      {
        id: "Sultana",
        name: "Sultana",
        availability: createAvailability([8, 9, 10, 11, 12, 1, 2, 3, 4,5]),
      },
         ],
    origins: [
      { name: "Pishin", coordinates: [30.5833, 66.9833] },
    ],
    nutritionalInfo: "Rich in antioxidants, fiber, and natural sugars",
    type: "Raisin",
  },
  PeelaKandhariRaisin: {
    id: "peela-kandhari-raisin",
    navLink:'PeelaKandhariRaisin',
    name: "Peela Kandhari",
    navName: "Peela Kandhari",
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760633967/Peela_Khandhari_-_Golden_Raisin_aflfhm.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634033/raisins_gee7sw.avif",
    description:
      "Pakistani raisins are renowned for their rich flavor, natural sweetness, and traditional sun-drying methods that preserve their authentic taste. Grown in regions of Baluchistan province",
    detailedDescription:
      "Our raisins are naturally sun-dried to preserve their nutritional value and enhance their natural sweetness. These golden gems are packed with antioxidants, fiber, and essential minerals. Whether enjoyed as a healthy snack or used in baking and cooking, our raisins deliver exceptional quality and taste.",
    points: [
      "Juicy & Sweet: Naturally sugary with a slightly chewy texture that enhances richness.",
      "Golden Appeal: Vibrant colour and balanced sweetness ideal for both snacking and culinary use.",
      "Culinary Use: Perfect for cakes, cereals, salads, and chutneys.",
      "Origin: Killa Abdullah – a region known for sun-dried golden grapes.",
      "Size: 45/55 per ounce.",
      "Storage: Ambient – retains natural moisture and glossy finish.",
    ],
    varieties: [
      {
        id: "peela-kandhari",
        name: "Peela Kandhari",
        availability: createAvailability([8, 9, 10, 11, 12, 1, 2, 3, 4]),
      },
       ],
    origins: [
      { name: "Killa Abdullah", coordinates: [30.0507, 66.1323] },
    ],
    nutritionalInfo: "Rich in antioxidants, fiber, and natural sugars",
    type: "Raisin",
  },


  KalaPishin: {
    id: "kala-pishin",
    navLink:'KalaPishin',
    name: "Kala Pishin",
    navName: "Kala Pishin",
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760633945/Kala_Pishin_-_Black_Raisin_n1lbyk.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634033/raisins_gee7sw.avif",
    description:
      "Pakistani raisins are renowned for their rich flavor, natural sweetness, and traditional sun-drying methods that preserve their authentic taste. Grown in regions of Baluchistan province",
    detailedDescription:
      "Our raisins are naturally sun-dried to preserve their nutritional value and enhance their natural sweetness. These golden gems are packed with antioxidants, fiber, and essential minerals. Whether enjoyed as a healthy snack or used in baking and cooking, our raisins deliver exceptional quality and taste.",
    points: [
      "Rich & Fruity: Deep, full-bodied flavour with chewy texture and strong sweetness.",
      "Intense Taste: Naturally dark hue adds depth to culinary presentations.",
      "Culinary Use: Excellent for snacks, hearty breads, pilafs, and stews.",
      "Origin: Pishin, known for producing bold, dark raisins with rich taste.",
      "Size: 55/65 per ounce.",
      "Storage: Ambient – keeps texture soft and flavour robust.",
    ],
    varieties: [
      {
        id: "kala-pishin",
        name: "Kala Pishin",
        availability: createAvailability([8, 9, 10, 11, 12, 1, 2, 3, 4, 5]),
      },
    ],
    origins: [
      { name: "Pishin", coordinates: [30.5833, 66.9833] },
    ],
    nutritionalInfo: "Rich in antioxidants, fiber, and natural sugars",
    type: "Raisin",
  },
  KillaSaifullahPistachiosShelled: {
    id: "killa-saifullah-pistachios-shelled",
    navLink:'KillaSaifullahPistachiosShelled',
    name: "Killa Saifullah Pistachios",
    navName: "Killa Saifullah",
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1761567213/Killah_Saifullah_shelled_wousre.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634031/Pistachio_lhgwgx.jpg",
    description:
      "World-renowned Pakistani pistachios with exceptional taste and quality. A perfect blend of flavor and nutrition.",
    detailedDescription:
      "Pakistan produces some of the world's finest pistachios, known for their distinctive flavor and superior quality. Our pistachios are carefully harvested and processed to maintain their natural taste and nutritional benefits. Rich in protein, healthy fats, and antioxidants, they make an excellent healthy snack.",
    points: [
      "Smooth & Delicate: Slightly rounder with a mild, sweet flavour and soft crunch.",
      "Elegant Profile: Balanced taste for refined desserts.",
      "Gourmet Use: Suited for gelato, luxury chocolates, macarons, and bakery toppings.",
      "Origin: Killah Saifullah – renowned for superior pistachio cultivation.",
      "Size: 40/45 per ounce.",
      "Storage: Ambient – preserves freshness and texture.",
    ],
    varieties: [
      {
        id: "killa-saifullah-pista",
        name: "Killa Saifullah Pista",
        availability: createAvailability([9, 10, 11, 12, 1, 2, 3, 4]),
      },
    ],
    origins: [
      { name: "Killa Saifullah", coordinates: [30.7056, 68.7444] },
    ],
    nutritionalInfo: "High in protein, healthy fats, and antioxidants",
    type: "Pistachio",
  },
  ZiaratPistachiosShelled: {
    id: "ziarat-pistachios-shelled",
    name: "Ziarat Pistachios",
    navLink:'ZiaratPistachiosShelled',
    navName: "Ziarat",
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1761561651/Ziarat_Pista_-_Shelled_byujay.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634031/Pistachio_lhgwgx.jpg",
    points: [
      "Rich & Earthy: Distinctive, bold nutty taste with slight chewiness.",
      "Robust Texture: Naturally dense and flavourful kernel.",
      "Gourmet Use: Perfect for nougats, pralines, biscotti, and Mediterranean pastries.",
      "Origin: Ziarat – celebrated for premium pistachio orchards.",
      "Size: 45/50 per ounce.",
      "Storage: Ambient – retains crispness and colour.",
    ],
    description:
      "World-renowned Pakistani pistachios with exceptional taste and quality. A perfect blend of flavor and nutrition.",
    detailedDescription:
      "Pakistan produces some of the world's finest pistachios, known for their distinctive flavor and superior quality. Our pistachios are carefully harvested and processed to maintain their natural taste and nutritional benefits. Rich in protein, healthy fats, and antioxidants, they make an excellent healthy snack.",
    varieties: [
      {
        id: "ziarat-pista",
        name: "Ziarat Pista",
        availability: createAvailability([8, 9, 10, 11, 12, 1, 2, 3, 4]),
      },
         ],
    origins: [
      { name: "Ziarat", coordinates: [30.3811, 67.7261] },
    ],
    nutritionalInfo: "High in protein, healthy fats, and antioxidants",
    type: "Pistachio",
  },
  KillaSaifullahPistachiosUnshelled: {
    id: "killa-saifullah-pistachios-unshelled",
    name: "Killa Saifullah Pistachios",
    navName: "Killa Saifullah",
    navLink:'KillaSaifullahPistachiosUnshelled',
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1761567239/Killah_Saifullah_np6hfo.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634031/Pistachio_lhgwgx.jpg",
    description:
      "World-renowned Pakistani pistachios with exceptional taste and quality. A perfect blend of flavor and nutrition.",
    detailedDescription:
      "Pakistan produces some of the world's finest pistachios, known for their distinctive flavor and superior quality. Our pistachios are carefully harvested and processed to maintain their natural taste and nutritional benefits. Rich in protein, healthy fats, and antioxidants, they make an excellent healthy snack.",
    points: [
      "Smooth & Delicate: Slightly rounder with a mild, sweet flavour and soft crunch.",
      "Elegant Profile: Balanced taste for refined desserts.",
      "Gourmet Use: Suited for gelato, luxury chocolates, macarons, and bakery toppings.",
      "Origin: Killah Saifullah – renowned for superior pistachio cultivation.",
      "Size: 30/32 per ounce.",
      "Storage: Ambient – preserves freshness and texture.",
    ],
    varieties: [
           {
        id: "killa-saifullah-roasted",
        name: "Killa Saifullah Pista",
        availability: createAvailability([9, 10, 11, 12, 1, 2, 3, 4]),
      },
    ],
    origins: [
      { name: "Killa Saifullah", coordinates: [30.7056, 68.7444] },
    ],
    nutritionalInfo: "High in protein, healthy fats, and antioxidants",
    type: "Pistachio",
  },
  ZiaratPistachiosUnshelled: {
    id: "ziarat-pistachios-unshelled",
    name: "Ziarat Pistachios",
    navLink:'ZiaratPistachiosUnshelled',
    navName: "Ziarat",
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1761561652/Ziarat_Pista_bhnci5.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634031/Pistachio_lhgwgx.jpg",
    points: [
      "Rich & Earthy: Distinctive, bold nutty taste with slight chewiness.",
      "Robust Texture: Naturally dense and flavourful kernel.",
      "Gourmet Use: Perfect for nougats, pralines, biscotti, and Mediterranean pastries.",
      "Origin: Ziarat – celebrated for premium pistachio orchards.",
      "Size: 31/33 per ounce.",
      "Storage: Ambient – retains crispness and colour.",
    ],
    description:
      "World-renowned Pakistani pistachios with exceptional taste and quality. A perfect blend of flavor and nutrition.",
    detailedDescription:
      "Pakistan produces some of the world's finest pistachios, known for their distinctive flavor and superior quality. Our pistachios are carefully harvested and processed to maintain their natural taste and nutritional benefits. Rich in protein, healthy fats, and antioxidants, they make an excellent healthy snack.",
    varieties: [
      {
        id: "ziarat-pista-shell",
        name: "Ziarat Pista w shell",
        availability: createAvailability([8, 9, 10, 11, 12, 1, 2, 3, 4]),
      },
         ],
    origins: [
      { name: "Ziarat", coordinates: [30.3811, 67.7261] },
    ],
    nutritionalInfo: "High in protein, healthy fats, and antioxidants",
    type: "Pistachio",
  },

  SwatdirWalnutsShelled: {
    id: "swat-dir-walnuts-shelled",
    name: "Swat-Dir Walnuts",
    navLink:'SwatdirWalnutsShelled',
    navName: "Swat-Dir",
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/v1761222207/Swat-dir_shelled_k6nfuz.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634034/walnut_cr2swc.webp",
    points: [
      "Mildly Sweet & Soft: Subtle sweetness with faint bitterness and an oily texture.",
      "Natural Smoothness: Soft and easy to use in both sweet and savoury dishes.",
      "Culinary Use: Baking, winter snacks, artisan breads, savory salads, cheese pairings, hearty sauces, and walnut oil.",
      "Origin: Swat – a mountain valley known for rich walnut produce.",
      "Size: 6/8 halves per ounce.",
      "Storage: Ambient – maintains oil content and crispness.",
    ],
    description:
      "Premium walnuts from the northern regions of Pakistan, known for their rich taste and excellent nutritional profile.",
    detailedDescription:
      "Our walnuts come from the pristine valleys of northern Pakistan, where the climate and soil conditions produce nuts of exceptional quality. These brain-healthy nuts are rich in omega-3 fatty acids, protein, and antioxidants. Perfect for snacking, baking, or adding to salads and cereals.",
    varieties: [
       {
        id: "swat-dir-shelled",
        name: "Swat-Dir Walnut",
        availability: createAvailability([10, 11, 12, 1, 2, 3, 4]),
      },
        ],
    origins: [
      { name: "Swat", coordinates: [35.2227, 72.4258] },
    ],
    nutritionalInfo: "Rich in omega-3 fatty acids, protein, and antioxidants",
    type: "Walnut",
  },
  KaghziWalnutsShelled: {
    id: "kaghzi-walnuts-shelled",
    name: "Kaghzi Walnuts",
    navLink:'KaghziWalnutsShelled',
    navName: "Kaghzi",
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/v1761222266/Kaghzi_Walnut_Shelled_x07wd2.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/v1760634034/walnut_cr2swc.webp",
    points: [
      "Paper-Thin Shells: Easy to crack with pale, plump kernels.",
      "Delicate Sweetness: Subtly sweet flavour perfect for premium desserts.",
      "Culinary Use: Ideal for cakes, tarts, confectionery, chocolates, and gourmet nut mixes.",
      "Origin: Chitral – cool climate producing high-grade walnuts.",
      "Size: 10/12 halves per ounce.",
      "Storage: Ambient – preserves taste and texture.",
    ],
    description:
      "Premium walnuts from the northern regions of Pakistan, known for their rich taste and excellent nutritional profile.",
    detailedDescription:
      "Our walnuts come from the pristine valleys of northern Pakistan, where the climate and soil conditions produce nuts of exceptional quality. These brain-healthy nuts are rich in omega-3 fatty acids, protein, and antioxidants. Perfect for snacking, baking, or adding to salads and cereals.",
    varieties: [
           {
        id: "kaghzi-walnut",
        name: "Kaghzi Walnut",
        availability: createAvailability([10, 11, 12, 1, 2, 3, 4]),
      },
    ],
    origins: [
      { name: "Chitral", coordinates: [35.8518, 71.7864] },
    ],
    nutritionalInfo: "Rich in omega-3 fatty acids, protein, and antioxidants",
    type: "Walnut",
  },

  SwatdirWalnutsUnshelled: {
    id: "swat-dir-walnuts-unshelled",
    name: "Swat-Dir Walnuts",
    navLink:'SwatdirWalnutsUnshelled',
    navName: "Swat-Dir",
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1761560449/Swat_DIR_xmco4p.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634034/walnut_cr2swc.webp",
    points: [
      "Mildly Sweet & Soft: Subtle sweetness with faint bitterness and an oily texture.",
      "Natural Smoothness: Soft and easy to use in both sweet and savoury dishes.",
      "Culinary Use: Baking, winter snacks, artisan breads, savory salads, cheese pairings, hearty sauces, and walnut oil.",
      "Origin: Swat – a mountain valley known for rich walnut produce.",
      "Size: 2/3 halves per ounce.",
      "Storage: Ambient – maintains oil content and crispness.",
    ],
    description:
      "Premium walnuts from the northern regions of Pakistan, known for their rich taste and excellent nutritional profile.",
    detailedDescription:
      "Our walnuts come from the pristine valleys of northern Pakistan, where the climate and soil conditions produce nuts of exceptional quality. These brain-healthy nuts are rich in omega-3 fatty acids, protein, and antioxidants. Perfect for snacking, baking, or adding to salads and cereals.",
    varieties: [
      {
        id: "swat-dir-shell",
        name: "Swat-Dir Walnut w shell",
        availability: createAvailability([10, 11, 12, 1, 2, 3, 4]),
      },
         ],
    origins: [
      { name: "Swat", coordinates: [35.2227, 72.4258] },
    ],
    nutritionalInfo: "Rich in omega-3 fatty acids, protein, and antioxidants",
    type: "Walnut",
  },
  KaghziWalnutsUnshelled: {
    id: "kaghzi-walnuts-unshelled",
    name: "Kaghzi Walnuts",
    navLink:'KaghziWalnutsUnshelled',
    navName: "Kaghzi",
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1761564969/Kaghzi_Walnut_omkncw.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634034/walnut_cr2swc.webp",
    points: [
      "Paper-Thin Shells: Easy to crack with pale, plump kernels.",
      "Delicate Sweetness: Subtly sweet flavour perfect for premium desserts.",
      "Culinary Use: Ideal for cakes, tarts, confectionery, chocolates, and gourmet nut mixes.",
      "Origin: Chitral – cool climate producing high-grade walnuts.",
      "Size: 4/5 halves per ounce.",
      "Storage: Ambient – preserves taste and texture.",
    ],
    description:
      "Premium walnuts from the northern regions of Pakistan, known for their rich taste and excellent nutritional profile.",
    detailedDescription:
      "Our walnuts come from the pristine valleys of northern Pakistan, where the climate and soil conditions produce nuts of exceptional quality. These brain-healthy nuts are rich in omega-3 fatty acids, protein, and antioxidants. Perfect for snacking, baking, or adding to salads and cereals.",
    varieties: [
      {
        id: "kaghzi-shell",
        name: "Kaghzi Walnut w Shell",
        availability: createAvailability([10, 11, 12, 1, 2, 3, 4]),
      },
    ],
    origins: [
      { name: "Chitral", coordinates: [35.8518, 71.7864] },
    ],
    nutritionalInfo: "Rich in omega-3 fatty acids, protein, and antioxidants",
    type: "Walnut",
  },

  BanuChillasPineNutsShelled: {
    id: "banu-chillas-pinenuts-shelled",
    name: "Banu Chillas Pine Nuts",
    navLink:'BanuChillasPineNutsShelled',
    navName: "Banu Chillas",
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760633935/Bannu_Pinenut_shelled_rfxipo.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634031/Pinenuts_bvzcbq.jpg",
    points: [
      "Delicate & Buttery: Buttery sweetness with a subtle crunch.",
      "Nutrient Dense: Rich in proteins and healthy fats, prized for natural flavour.",
      "Culinary Use: Ideal for luxury pesto, gourmet baked goods, salads, and fine confections.",
      "Origin: Chilas – region famous for authentic pine nut harvests.",
      "Size: 150/160 per ounce.",
      "Storage: Ambient – maintains texture and aromatic richness.",
    ],
    description:
      "Exotic pine nuts harvested from the pristine forests of northern Pakistan. A delicacy prized for its unique flavor.",
    detailedDescription:
      "Pine nuts are harvested from pine cones in the remote forests of northern Pakistan. These premium nuts have a distinctive buttery flavor and are considered a delicacy worldwide. Rich in protein, healthy fats, and minerals, they're perfect for gourmet cooking and traditional recipes.",
    varieties: [

      {
        id: "banu-chilas-shelled",
        name: "Banu-Chilas Pinenut",
        availability: createAvailability([9, 10, 11, 12, 1, 2, 3, 4]),
      },
         ],
    origins: [
      { name: "Chilas", coordinates: [35.4167, 74.0833] },
    ],
    nutritionalInfo: "High in protein, healthy fats, and essential minerals",
    type: "Pine Nut",
  },
  WaziriPineNutsShelled: {
    id: "waziri-pinenuts-shelled",
    name: "Waziri Pine Nuts",
    navLink:'WaziriPineNutsShelled',
    navName: "Waziri",
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760633974/Waziri_Pinenut_Shelled_prsbar.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634031/Pinenuts_bvzcbq.jpg",
    points: [
      "Rich & Distinct: Slightly firmer with a pronounced nutty aroma.",
      "Globally Prized: Known for premium quality and deep, nutty profile.",
      "Culinary Use: Artisan confections, fine chocolate, creamy desserts, cheese boards, and luxury snacks.",
      "Origin: Waziristan – high-altitude pine forests yielding top-grade produce.",
      "Size: 120/130 per ounce.",
      "Storage: Ambient – preserves natural oils and premium texture.",
    ],
    description:
      "Exotic pine nuts harvested from the pristine forests of northern Pakistan. A delicacy prized for its unique flavor.",
    detailedDescription:
      "Pine nuts are harvested from pine cones in the remote forests of northern Pakistan. These premium nuts have a distinctive buttery flavor and are considered a delicacy worldwide. Rich in protein, healthy fats, and minerals, they're perfect for gourmet cooking and traditional recipes.",
    varieties: [
      {
        id: "waziri-pinenuts",
        name: "Waziri Pinenuts",
        availability: createAvailability([9, 10, 11, 12, 1, 2, 3, 4]),
      },
         ],
    origins: [
      { name: "Waziristan", coordinates: [32.3617, 69.4306] },
    ],
    nutritionalInfo: "High in protein, healthy fats, and essential minerals",
    type: "Pine Nut",
  },
  BanuChillasPineNutsUnshelled: {
    id: "banu-chillas-pinenuts-unshelled",
    name: "Banu Chillas Pine Nuts",
    navLink:'BanuChillasPineNutsUnshelled',
    navName: "Banu Chillas",
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760633936/Bannu_Pinenut_j9xee1.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634031/Pinenuts_bvzcbq.jpg",
    points: [
      "Delicate & Buttery: Buttery sweetness with a subtle crunch.",
      "Nutrient Dense: Rich in proteins and healthy fats, prized for natural flavour.",
      "Culinary Use: Ideal for luxury pesto, gourmet baked goods, salads, and fine confections.",
      "Origin: Chilas – region famous for authentic pine nut harvests.",
      "Size: 135/145 per ounce.",
      "Storage: Ambient – maintains texture and aromatic richness.",
    ],
    description:
      "Exotic pine nuts harvested from the pristine forests of northern Pakistan. A delicacy prized for its unique flavor.",
    detailedDescription:
      "Pine nuts are harvested from pine cones in the remote forests of northern Pakistan. These premium nuts have a distinctive buttery flavor and are considered a delicacy worldwide. Rich in protein, healthy fats, and minerals, they're perfect for gourmet cooking and traditional recipes.",
    varieties: [
      {
        id: "banu-chilas-shell",
        name: "Banu-Chilas Pinenut in shell",
        availability: createAvailability([9, 10, 11, 12, 1, 2, 3, 4]),
      },
         ],
    origins: [
      { name: "Chilas", coordinates: [35.4167, 74.0833] },
    ],
    nutritionalInfo: "High in protein, healthy fats, and essential minerals",
    type: "Pine Nut",
  },
  WaziriPineNutsUnshelled: {
    id: "waziri-pinenuts-unshelled",
    name: "Waziri Pine Nuts",
    navLink:'WaziriPineNutsUnshelled',
    navName: "Waziri",
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760633994/Waziri_Pinenuts_zeks7z.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634031/Pinenuts_bvzcbq.jpg",
    points: [
      "Rich & Distinct: Slightly firmer with a pronounced nutty aroma.",
      "Globally Prized: Known for premium quality and deep, nutty profile.",
      "Culinary Use: Artisan confections, fine chocolate, creamy desserts, cheese boards, and luxury snacks.",
      "Origin: Waziristan – high-altitude pine forests yielding top-grade produce.",
      "Size: 105/115 per ounce.",
      "Storage: Ambient – preserves natural oils and premium texture.",
    ],
    description:
      "Exotic pine nuts harvested from the pristine forests of northern Pakistan. A delicacy prized for its unique flavor.",
    detailedDescription:
      "Pine nuts are harvested from pine cones in the remote forests of northern Pakistan. These premium nuts have a distinctive buttery flavor and are considered a delicacy worldwide. Rich in protein, healthy fats, and minerals, they're perfect for gourmet cooking and traditional recipes.",
    varieties: [
           {
        id: "waziri-shell",
        name: "Waziri Pinenuts in shell",
        availability: createAvailability([9, 10, 11, 12, 1, 2, 3, 4]),
      },
    ],
    origins: [
      { name: "Waziristan", coordinates: [32.3617, 69.4306] },
    ],
    nutritionalInfo: "High in protein, healthy fats, and essential minerals",
    type: "Pine Nut",
  },

  ParaChinarPeanutsShelled: {
    id: "para-chinar-peanuts-shelled",
    name: "Para-Chinar Peanuts",
    navLink:'ParaChinarPeanutsShelled',
    navName: "Para-Chinar",
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1761567372/Parachinar_Shelled_sznsoc.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634029/Peanuts_ewoade.jpg",
    points: [
      "Unique & Rich: Full-bodied flavour, rich in protein, healthy fats, vitamins, and minerals.",
      "Nutrient Power: High-quality produce cultivated in clean, mountainous terrain.",
      "Culinary Use: Perfect for gourmet roasted snacks, luxury peanut butter, salad toppers, and artisan baking.",
      "Origin: Para Chinar – known for dense, nutrient-rich soils.",
      "Size: 45/50 per ounce.",
      "Storage: Ambient – maintains crunch and flavour.",
    ],
    description:
      "Our peanuts are sourced from the best agricultural regions of Pakistan, known for producing high-quality groundnuts. Whether raw or roasted, shelled or unshelled, our peanuts deliver consistent quality and taste.",
    detailedDescription:
      "Our peanuts are sourced from the best agricultural regions of Pakistan, known for producing high-quality groundnuts. Whether raw or roasted, shelled or unshelled, our peanuts deliver consistent quality and taste. High in protein, healthy fats, and essential nutrients.",
    varieties: [
          {
        id: "para-chinar-shelled",
        name: "Para-Chinar Shelled",
        availability: createAvailability([10, 11, 12, 1, 2, 3, 4]),
      },
         ],
    origins: [
      { name: "Parachinar", coordinates: [33.9019, 70.0719] },
    ],
    nutritionalInfo: "High in protein, healthy fats, and niacin",
    type: "Peanut",
  },
  ChakwaliPeanutsShelled: {
    id: "chakwali-peanuts-shelled",
    name: "Chakwali Peanuts",
    navLink:'ChakwaliPeanutsShelled',
    navName: "Chakwali",
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1761567158/Chawali_Peanut_Shelled_gzlmk4.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634029/Peanuts_ewoade.jpg",
    points: [
      "Sweet & Creamy: Naturally sweet with high nutrition from Pothohar region.",
      "Smooth Texture: Excellent for spreads and savory blends.",
      "Culinary Use: Creamy peanut butters, savory sauces, protein snacks, baking, and chocolates.",
      "Origin: Chakwal – Pothohar plateau, home to fine peanut farming.",
      "Size: 50/55 per ounce.",
      "Storage: Ambient – retains natural oil balance.",
    ],
    description:
      "Our peanuts are sourced from the best agricultural regions of Pakistan, known for producing high-quality groundnuts. Whether raw or roasted, shelled or unshelled, our peanuts deliver consistent quality and taste..",
    detailedDescription:
      "Our peanuts are sourced from the best agricultural regions of Pakistan, known for producing high-quality groundnuts. Whether raw or roasted, shelled or unshelled, our peanuts deliver consistent quality and taste. High in protein, healthy fats, and essential nutrients.",
    varieties: [
      {
        id: "chakwali-roasted-shelled",
        name: "Chaqwali Peanuts Shelled",
        availability: createAvailability([10, 11, 12, 1, 2, 3, 4]),
      },
    ],
    origins: [
      { name: "Chakwal", coordinates: [32.9328, 72.8522] },
    ],
    nutritionalInfo: "High in protein, healthy fats, and niacin",
    type: "Peanut",
  },
  ParaChinarPeanutsUnshelled: {
    id: "para-chinar-peanuts-unshelled",
    name: "Para-Chinar Peanuts",
    navLink:'ParaChinarPeanutsUnshelled',
    navName: "Para-Chinar",
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1761567319/Parachinar_peanuts_yzljqw.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634029/Peanuts_ewoade.jpg",
    points: [
      "Unique & Rich: Full-bodied flavour, rich in protein, healthy fats, vitamins, and minerals.",
      "Nutrient Power: High-quality produce cultivated in clean, mountainous terrain.",
      "Culinary Use: Perfect for gourmet roasted snacks, luxury peanut butter, salad toppers, and artisan baking.",
      "Origin: Para Chinar – known for dense, nutrient-rich soils.",
      "Size: 13/18 per ounce.",
      "Storage: Ambient – maintains crunch and flavour.",
    ],
    description:
      "Our peanuts are sourced from the best agricultural regions of Pakistan, known for producing high-quality groundnuts. Whether raw or roasted, shelled or unshelled, our peanuts deliver consistent quality and taste.",
    detailedDescription:
      "Our peanuts are sourced from the best agricultural regions of Pakistan, known for producing high-quality groundnuts. Whether raw or roasted, shelled or unshelled, our peanuts deliver consistent quality and taste. High in protein, healthy fats, and essential nutrients.",
    varieties: [
      {
        id: "para-chinar-unshelled",
        name: "Para-Chinar",
        availability: createAvailability([10, 11, 12, 1, 2, 3, 4]),
      },
        ],
    origins: [
      { name: "Parachinar", coordinates: [33.9019, 70.0719] },
    ],
    nutritionalInfo: "High in protein, healthy fats, and niacin",
    type: "Peanut",
  },
  ChakwaliPeanutsUnshelled: {
    id: "chakwali-peanuts-unshelled",
    name: "Chakwali Peanuts",
    navLink:'ChakwaliPeanutsUnshelled',
    navName: "Chakwali",
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1761567330/Chawali_Peanut_jqgtmg.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634029/Peanuts_ewoade.jpg",
    points: [
      "Sweet & Creamy: Naturally sweet with high nutrition from Pothohar region.",
      "Smooth Texture: Excellent for spreads and savory blends.",
      "Culinary Use: Creamy peanut butters, savory sauces, protein snacks, baking, and chocolates.",
      "Origin: Chakwal – Pothohar plateau, home to fine peanut farming.",
      "Size: 25/30 per ounce.",
      "Storage: Ambient – retains natural oil balance.",
    ],
    description:
      "Our peanuts are sourced from the best agricultural regions of Pakistan, known for producing high-quality groundnuts. Whether raw or roasted, shelled or unshelled, our peanuts deliver consistent quality and taste.",
    detailedDescription:
      "Our peanuts are sourced from the best agricultural regions of Pakistan, known for producing high-quality groundnuts. Whether raw or roasted, shelled or unshelled, our peanuts deliver consistent quality and taste. High in protein, healthy fats, and essential nutrients.",
    varieties: [
      {
        id: "chakwali-roasted-shell",
        name: "Chaqwali Peanuts",
        availability: createAvailability([10, 11, 12, 1, 2, 3, 4]),
      },
         ],
    origins: [
      { name: "Chakwal", coordinates: [32.9328, 72.8522] },
    ],
    nutritionalInfo: "High in protein, healthy fats, and niacin",
    type: "Peanut",
  },

  FaraKaKalaChannaShelled: {
    id: "fara-ka-kala-channa-shelled",
    name: "Fara Ka Kala Channa",
    navLink:'FaraKaKalaChannaShelled',
    navName: "Fara Ka",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634024/kalla_channa_ntbw3h.jpg",
    points: [
      "Bright & Clean: Softer texture and lighter tone with versatile appeal.",
      "Rich & Healthy: Nutty, high in protein, ideal for modern and traditional recipes.",
      "Culinary Use: Savory high-protein snacks, hearty stews, soups, and slow-cooked Mediterranean dishes.",
      "Origin: Layyah – known for clean, consistent chickpea yields.",
      "Size: 150/155 per ounce.",
      "Storage: Ambient – ensures freshness and firmness.",
    ],
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760633939/Faraka_Channa_Shelled_henjpb.png",
    description:
      "Traditional black chickpeas known for their earthy flavor, firm bite, and excellent nutritional profile.",
    detailedDescription:
      "Fara Ka Kala Channa is a traditional variety of black chickpeas prized for its dense texture and deep, nutty taste. It holds shape wonderfully when boiled, making it ideal for chaats, curries, and slow-cooked stews. Naturally rich in plant protein, fiber, iron, and folate, it provides sustained energy and supports a balanced diet.",
    varieties: [
      {
        id: "fara-ka-kala-channa",
        name: "Fara Ka Kala Channa",
        availability: createAvailability([9, 10, 11, 12, 1, 2, 3, 4]),
      },
    ],
    origins: [
      { name: "Layyah", coordinates: [30.9676, 70.9444] },
    ],
    nutritionalInfo: "High in plant protein, fiber, iron, and folate",
    type: "Chickpea",
  },

  KhilayKalaChannaShelled: {
    id: "khilay-kala-channa-shelled",
    name: "Khilay Kala Channa",
    navName: "Khilay",
    navLink:'KhilayKalaChannaShelled',
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760633953/Khilay_Channa_Shelled_odyl4w.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634024/kalla_channa_ntbw3h.jpg",
    points: [
      "Rustic & Nutty: Brownish hue, firm bite, and rich, earthy flavour.",
      "Wholesome Taste: High satiety and traditional appeal.",
      "Culinary Use: Salads, mezze spreads, gourmet snack mixes, and healthy baking.",
      "Origin: Bhakkar – region recognized for traditional pulse farming.",
      "Size: 145/150 per ounce.",
      "Storage: Ambient – preserves natural firmness and nutrition.",
    ],

    description:
      "Traditional black chickpeas or Kalla Channa known for their earthy flavor, firm bite, and excellent nutritional profile.",
    detailedDescription:
      "Khilay Kala Channa features a slightly larger grain that cooks to a pleasantly soft, creamy center while retaining a wholesome chew. Its balanced, savory profile pairs well with classic South Asian spices, making it a favorite for festive chaats, pulao, and everyday gravies.",
    varieties: [
      {
        id: "khilay-kala-channa",
        name: "Khilay Kala Channa",
        availability: createAvailability([9, 10, 11, 12, 1, 2, 3, 4]),
      },
    ],
    origins: [
      { name: "Bhakkar", coordinates: [31.6333, 71.0667] },
    ],
    nutritionalInfo: "Rich in protein, dietary fiber, and essential minerals",
    type: "Chickpea",
  },

  FaraKaKalaChannaUnshelled: {
    id: "fara-ka-kala-channa-unshelled",
    name: "Fara Ka Kala Channa",
    navName: "Fara Ka",
    navLink:'FaraKaKalaChannaUnshelled',
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634024/kalla_channa_ntbw3h.jpg",
    points: [
      "Bright & Clean: Softer texture and lighter tone with versatile appeal.",
      "Rich & Healthy: Nutty, high in protein, ideal for modern and traditional recipes.",
      "Culinary Use: Savory high-protein snacks, hearty stews, soups, and slow-cooked Mediterranean dishes.",
      "Origin: Layyah – known for clean, consistent chickpea yields.",
      "Size: 145/150 per ounce.",
      "Storage: Ambient – ensures freshness and firmness.",
    ],
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760633938/Faraka_Chanay_aiw3wc.png",
    description:
      "Traditional black chickpeas or Kalla Channa known for their earthy flavor, firm bite, and excellent nutritional profile.",
    detailedDescription:
      "Fara Ka Kala Channa is a traditional variety of black chickpeas prized for its dense texture and deep, nutty taste. It holds shape wonderfully when boiled, making it ideal for chaats, curries, and slow-cooked stews. Naturally rich in plant protein, fiber, iron, and folate, it provides sustained energy and supports a balanced diet.",
    varieties: [
      {
        id: "fara-ka-kala-channa",
        name: "Fara Ka Kala Channa",
        availability: createAvailability([9, 10, 11, 12, 1, 2, 3, 4]),
      },
    ],
    origins: [
      { name: "Layyah", coordinates: [30.9676, 70.9444] },
    ],
    nutritionalInfo: "High in plant protein, fiber, iron, and folate",
    type: "Chickpea",
  },

  KhilayKalaChannaUnshelled: {
    id: "khilay-kala-channa-unshelled",
    name: "Khilay Kala Channa",
    navName: "Khilay",
    navLink:'KhilayKalaChannaUnshelled',
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760633955/Khilay_Channy_gjggdk.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634024/kalla_channa_ntbw3h.jpg",
    points: [
      "Rustic & Nutty: Brownish hue, firm bite, and rich, earthy flavour.",
      "Wholesome Taste: High satiety and traditional appeal.",
      "Culinary Use: Salads, mezze spreads, gourmet snack mixes, and healthy baking.",
      "Origin: Bhakkar – region recognized for traditional pulse farming.",
      "Size: 135/140 per ounce.",
      "Storage: Ambient – preserves natural firmness and nutrition.",
    ],

    description:
      "Traditional black chickpeas or Kalla Channa known for their earthy flavor, firm bite, and excellent nutritional profile.",
    detailedDescription:
      "Khilay Kala Channa features a slightly larger grain that cooks to a pleasantly soft, creamy center while retaining a wholesome chew. Its balanced, savory profile pairs well with classic South Asian spices, making it a favorite for festive chaats, pulao, and everyday gravies.",
    varieties: [
      {
        id: "khilay-kala-channa",
        name: "Khilay Kala Channa",
        availability: createAvailability([9, 10, 11, 12, 1, 2, 3, 4]),
      },
    ],
    origins: [
      { name: "Bhakkar", coordinates: [31.6333, 71.0667] },
    ],
    nutritionalInfo: "Rich in protein, dietary fiber, and essential minerals",
    type: "Chickpea",
  },
  RegularFigs: {
    id: "regular-fig",
    name: "Regular Figs",
    navName: "Regular",
    navLink:'RegularFigs',
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634018/Fig_bxdyex.jpg",
    points: [
      "Sweet & Chewy: Classic flavour with soft texture and earthy undertone.",
      "Nutrient Rich: Naturally sun-dried and rich in minerals.",
      "Culinary Use: Perfect for granolas, smoothies, everyday baking, and home-style snacking.",
      "Origin: Chitral – traditional fig-growing region.",
      "Size: 4/5 per ounce ensuring size consistency.",
      "Storage: Ambient – maintains natural chewiness and aroma.",
    ],
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1761567395/Fig_Regular_fru0oc.png",
    description:
      "Naturally Sun-dried premium figs with natural sweetness and chewy texture. A healthy and delicious treat.",
    detailedDescription:
      "Our figs are carefully sun-dried to preserve their natural sweetness and nutritional benefits. These fiber-rich fruits are perfect for healthy snacking, baking, or adding to cereals and salads. Rich in fiber, potassium, and antioxidants, figs support digestive health and overall wellness.",
    varieties: [
      {
        id: "chitrali-regular",
        name: "Fig Regular ",
        availability: createAvailability([5, 6, 7, 8, 9, 10, 11, 12]),
      },
    ],
    origins: [
      { name: "Chitral", coordinates: [35.8518, 71.7864] },
    ],
    nutritionalInfo: "High in fiber, potassium, and antioxidants",
    type: "Fig",
  },
  PremiumFigs: {
    id: "premium-fig",
    name: "Premium Figs",
    navName: "Premium",
    navLink:'PremiumFigs',
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634018/Fig_bxdyex.jpg",
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760633943/Fig_regular_swzyz3.png",
    points: [
      "Sun-Dried & Sweet: Tree-sun dried for enhanced sweetness and gourmet appeal.",
      "Elegant Look: Lighter colour, larger size, and soft texture.",
      "Culinary Use: Fine confectionery, charcuterie, luxury pastries, and artisanal spreads.",
      "Origin: Chitral – ideal climate for premium figs.",
      "Size: 3/4 per ounce.",
      "Storage: Ambient – retains sweetness and supple texture.",
    ],
    description:
      "Naturally Sun-dried premium figs with natural sweetness and chewy texture. A healthy and delicious treat.",
    detailedDescription:
      "Our figs are carefully sun-dried to preserve their natural sweetness and nutritional benefits. These fiber-rich fruits are perfect for healthy snacking, baking, or adding to cereals and salads. Rich in fiber, potassium, and antioxidants, figs support digestive health and overall wellness.",
    varieties: [
      {
        id: "chitrali-premium",
        name: "Fig Premium",
        availability: createAvailability([5, 6, 7, 8, 9, 10, 11, 12]),
      },
    ],
    origins: [
      { name: "Chitral", coordinates: [35.8518, 71.7864] },
    ],
    nutritionalInfo: "High in fiber, potassium, and antioxidants",
    type: "Fig",
  },
  KishtaApricots: {
    id: "kishta-apricots",
    name: "Kishta Apricots",
    navName: "Kishta",
    navLink:'KishtaApricots',
    points: [
      "Sweet-Tart & Natural: Split and enriched by natural sun-drying.",
      "Vitamin-Rich: Loaded with antioxidants and nutrients.",
      "Culinary Use: Luxury confectionery, cheese platters, gourmet baking, and artisanal bars.",
      "Origin: Hunza – known for premium, sun-dried fruits.",
      "Size: 6/7 per ounce.",
      "Storage: Ambient – maintains vibrant colour and texture.",
    ],
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760633958/Kishta_Apricot_okeenn.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634015/Apricot_ozkkl8.avif",
    description:
      "Premium dried apricots from the valleys of northern Pakistan. Sweet, nutritious, and naturally preserved.",
    detailedDescription:
      "Our apricots come from the pristine valleys of northern Pakistan, where the climate produces fruits of exceptional quality. These sun-dried apricots retain their natural sweetness and are packed with vitamins A and C, fiber, and antioxidants. Perfect for healthy snacking and culinary applications.",
    varieties: [
           {
        id: "kishta-seedless",
        name: "Kishta without seed",
        availability: createAvailability([7, 8, 9, 10, 11, 12, 1, 2, 3, 4]),
      },
         ],
    origins: [
      { name: "Hunza", coordinates: [36.3167, 74.65] },
    ],
    nutritionalInfo: "Rich in vitamin A, vitamin C, and fiber",
    type: "Apricot",
  },
  GolApricots: {
    id: "gol-apricots",
    name: "Gol Apricots",
    navName: "Gol",
    navLink:'GolApricots',
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1761564542/Gol_Apricot_gbpy3y.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634015/Apricot_ozkkl8.avif",
    points: [
      "Golden & Soft: Round, flat, and pitted with bright golden hue.",
      "Sweet & Tender: Large, soft, and rich in flavour.",
      "Culinary Use: Granolas, smoothies, everyday snacks, baking, and trail mixes.",
      "Origin: Gilgit – prime growing region for golden apricots.",
      "Size: 5/6 per ounce.",
      "Storage: Ambient – retains sweetness and moisture.",
    ],
    description:
      "Premium dried apricots from the valleys of northern Pakistan. Sweet, nutritious, and naturally preserved.",
    detailedDescription:
      "Our apricots come from the pristine valleys of northern Pakistan, where the climate produces fruits of exceptional quality. These sun-dried apricots retain their natural sweetness and are packed with vitamins A and C, fiber, and antioxidants. Perfect for healthy snacking and culinary applications.",
    varieties: [
          {
        id: "gol-seedless",
        name: "Gol without seed",
        availability: createAvailability([7, 8, 9, 10, 11, 12, 1, 2, 3, 4]),
      },
    ],
    origins: [
      { name: "Gilgit", coordinates: [35.92, 74.31] },
    ],
    nutritionalInfo: "Rich in vitamin A, vitamin C, and fiber",
    type: "Apricot",
  },
  NaagApricots: {
    id: "naag-apricots",
    name: "Naag Apricots",
    navName: "Naag",
    navLink:'NaagApricots',
    heroImage: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760633959/Naag_Apricot_d8ifwr.png",
    coverPhoto: "https://res.cloudinary.com/dfrlrzsnk/image/upload/f_auto,q_auto,w_1600/v1760634015/Apricot_ozkkl8.avif",
    points: [
      "Wholesome & Nutrient Dense: Packed with healthy fats, proteins, and vitamin B17.",
      "Naturally Rich: High in essential nutrients and energy.",
      "Culinary Use: Ideal for energy snacks, sports nutrition blends, immunity mixes, and health supplements.",
      "Origin: Hunza – region known for naturally nutrient-packed fruits.",
      "Size: 2/3 per ounce.",
      "Storage: Ambient – keeps natural flavour and integrity.",
    ],
    description:
      "Premium dried apricots from the valleys of northern Pakistan. Sweet, nutritious, and naturally preserved.",
    detailedDescription:
      "Our apricots come from the pristine valleys of northern Pakistan, where the climate produces fruits of exceptional quality. These sun-dried apricots retain their natural sweetness and are packed with vitamins A and C, fiber, and antioxidants. Perfect for healthy snacking and culinary applications.",
    varieties: [
      {
        id: "naag-seed",
        name: "Naag w seed",
        availability: createAvailability([7, 8, 9, 10, 11, 12, 1, 2, 3, 4]),
      },
        ],
    origins: [
      { name: "Hunza", coordinates: [36.3167, 74.65] },
    ],
    nutritionalInfo: "Rich in vitamin A, vitamin C, and fiber",
    type: "Apricot",
  },
};

// coverPhoto values are now statically set within each product object above.

export const allProducts = Object.values(productsData);

// Helper function to get product by ID
export const getProductById = (id: string): Product | undefined => {
  return productsData[id];
};

// Helper function to get all product names for navigation
export const getAllProductNames = (): string[] => {
  return Object.keys(productsData);
};
