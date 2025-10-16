export interface Variety {
  id: string;
  name: string;
  description: string;
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
    heroImage: "/assets/images/latestphotos/Kambri Almond.png",
    coverPhoto: "/assets/images/coverPhotos/Almond.jpg",
    description:
      "Premium quality almonds sourced from the finest orchards of Pakistan. Rich in protein, healthy fats, and essential nutrients.",
    detailedDescription:
      "Our almonds are carefully selected from the best orchards across Pakistan. These nutrient-dense nuts are perfect for snacking, baking, or adding to your favorite recipes. Rich in vitamin E, magnesium, and healthy monounsaturated fats, almonds support heart health and provide sustained energy throughout the day.",
    points: [
      "Firm & Rich: Firm, flavourful, and deeply nutty, offering a satisfying texture with every bite.",
      "Nutty Depth: Known for its rich taste that elevates gourmet blends and fine desserts.",
      "Premium Quality: Ideal for premium nut mixes, dessert toppings like ice creams and yogurts, and chocolate coatings.",
      "Origin: Peshawar – renowned for fertile soils and traditional almond cultivation.",
      "Size: 26/28 per ounce, ensuring uniform quality.",
      "Storage: Ambient – maintains freshness, aroma, and natural crunch",
    ],
    varieties: [
      {
        id: "kambri-blanched",
        name: "Kambri Almonds (Blanche)",
        description:
          "Kambri almonds, also known as Kaghzi or Blanche almonds, come from the mountainous areas of Gilgit-Baltistan and Chitral. They are prized for their ultra-thin shells and light skin, making them easy to peel and perfect for light, healthy snacking. Their mild, delicate flavor and soft crunch make them a favorite in traditional sweets and health-focused diets.",
        availability: createAvailability([9, 8, 7, 12, 1, 2]),
      },
      {
        id: "kalamdana",
        name: "Kalamdana Almonds",
        description:
          "Kalamdana almonds, also referred to as Kalmi or Sonara almonds, are larger in size and richer in taste. These almonds have a naturally sweet, bold flavor and a firm crunch. Their high nutritional value — packed with vitamin E, fiber, magnesium, and healthy fats — makes them ideal for energy mixes, protein bars, or daily snacking for those with active lifestyles.",
        availability: createAvailability([9, 6, 11, 12]),
      },
      {
        id: "said-kheli-white",
        name: "Said-Kheli Almonds",
        description:
          "Said-Kheli almonds are known for their pale white skin and unique appearance. Often used in luxury gifting and traditional celebrations, these almonds offer a fuller, more traditional almond flavor while maintaining a soft texture and clean look.",
        availability: createAvailability([9, 10, 11, 12, 1, 2]),
      },
    ],
    origins: [
      { name: "Quetta", coordinates: [30.1798, 67.0011] },
      { name: "Kalat", coordinates: [29.0233, 66.5897] },
      { name: "Mastung", coordinates: [29.7969, 66.8453] },
    ],
    nutritionalInfo: "High in protein, vitamin E, magnesium, and healthy fats",
    type: "Almonds",
  },
  KambriAlmondsUnshelled: {
    id: "kambri-almonds-unshelled",
    navLink:'KambriAlmondsUnshelled',
    name: "Kambri Almonds",
    navName: "Kambri",
    heroImage: "/assets/images/latestphotos/Kambri Almond Unshelled.png",
    coverPhoto: "/assets/images/coverPhotos/Almond.jpg",
    description:
      "Premium quality almonds sourced from the finest orchards of Pakistan. Rich in protein, healthy fats, and essential nutrients.",
    detailedDescription:
      "Our almonds are carefully selected from the best orchards across Pakistan. These nutrient-dense nuts are perfect for snacking, baking, or adding to your favorite recipes. Rich in vitamin E, magnesium, and healthy monounsaturated fats, almonds support heart health and provide sustained energy throughout the day.",
    points: [
      "Firm & Rich: Firm, flavourful, and deeply nutty, offering a satisfying texture with every bite.",
      "Nutty Depth: Known for its rich taste that elevates gourmet blends and fine desserts.",
      "Premium Quality: Ideal for premium nut mixes, dessert toppings like ice creams and yogurts, and chocolate coatings.",
      "Origin: Peshawar – renowned for fertile soils and traditional almond cultivation.",
      "Size: 26/28 per ounce, ensuring uniform quality.",
      "Storage: Ambient – maintains freshness, aroma, and natural crunch",
    ],
    varieties: [
      {
        id: "kambri-blanched",
        name: "Kambri Almonds (Blanche)",
        description:
          "Kambri almonds, also known as Kaghzi or Blanche almonds, come from the mountainous areas of Gilgit-Baltistan and Chitral. They are prized for their ultra-thin shells and light skin, making them easy to peel and perfect for light, healthy snacking. Their mild, delicate flavor and soft crunch make them a favorite in traditional sweets and health-focused diets.",
        availability: createAvailability([9, 8, 7, 12, 1, 2]),
      },
      {
        id: "kalamdana",
        name: "Kalamdana Almonds",
        description:
          "Kalamdana almonds, also referred to as Kalmi or Sonara almonds, are larger in size and richer in taste. These almonds have a naturally sweet, bold flavor and a firm crunch. Their high nutritional value — packed with vitamin E, fiber, magnesium, and healthy fats — makes them ideal for energy mixes, protein bars, or daily snacking for those with active lifestyles.",
        availability: createAvailability([9, 6, 11, 12]),
      },
      {
        id: "said-kheli-white",
        name: "Said-Kheli Almonds",
        description:
          "Said-Kheli almonds are known for their pale white skin and unique appearance. Often used in luxury gifting and traditional celebrations, these almonds offer a fuller, more traditional almond flavor while maintaining a soft texture and clean look.",
        availability: createAvailability([9, 10, 11, 12, 1, 2]),
      },
    ],
    origins: [
      { name: "Quetta", coordinates: [30.1798, 67.0011] },
      { name: "Kalat", coordinates: [29.0233, 66.5897] },
      { name: "Mastung", coordinates: [29.7969, 66.8453] },
    ],
    nutritionalInfo: "High in protein, vitamin E, magnesium, and healthy fats",
    type: "Almonds",
  },
  KalamDanaAlmondsShelled: {
    id: "kalamdana-almonds-shelled",
    name: "Kalam Dana Almonds",
    navLink:'KalamDanaAlmondsShelled',
    navName: "Kalam Dana",
    heroImage: "/assets/images/latestphotos/Kalam Dana Almond.png",
    coverPhoto: "/assets/images/coverPhotos/Almond.jpg",
    description:
      "Premium quality almonds sourced from the finest orchards of Pakistan. Rich in protein, healthy fats, and essential nutrients.",
    detailedDescription:
      "Our almonds are carefully selected from the best orchards across Pakistan. These nutrient-dense nuts are perfect for snacking, baking, or adding to your favorite recipes. Rich in vitamin E, magnesium, and healthy monounsaturated fats, almonds support heart health and provide sustained energy throughout the day.",
    points: [
      "Soft & Aromatic: Slightly bitter-sweet with a distinctive aromatic profile.",
      "Balanced Flavour: Smooth texture with subtle depth, perfect for functional foods.",
      "Functional Use: Commonly used in nutritional supplements, energy/protein bars, and bakery products focused on performance.",
      "Origin: Kalat – an almond-growing region known for rich, mineral soils.",
      "Size: 30/32 per ounce – fine grading for consistency.",
      "Storage: Ambient – preserves texture and nutritional integrity.",
    ],
    varieties: [
      {
        id: "kambri-blanched",
        name: "Kambri Almonds (Blanche)",
        description:
          "Kambri almonds, also known as Kaghzi or Blanche almonds, come from the mountainous areas of Gilgit-Baltistan and Chitral. They are prized for their ultra-thin shells and light skin, making them easy to peel and perfect for light, healthy snacking. Their mild, delicate flavor and soft crunch make them a favorite in traditional sweets and health-focused diets.",
        availability: createAvailability([9, 8, 7, 12, 1, 2]),
      },
      {
        id: "kalamdana",
        name: "Kalamdana Almonds",
        description:
          "Kalamdana almonds, also referred to as Kalmi or Sonara almonds, are larger in size and richer in taste. These almonds have a naturally sweet, bold flavor and a firm crunch. Their high nutritional value — packed with vitamin E, fiber, magnesium, and healthy fats — makes them ideal for energy mixes, protein bars, or daily snacking for those with active lifestyles.",
        availability: createAvailability([9, 6, 11, 12]),
      },
      {
        id: "said-kheli-white",
        name: "Said-Kheli Almonds",
        description:
          "Said-Kheli almonds are known for their pale white skin and unique appearance. Often used in luxury gifting and traditional celebrations, these almonds offer a fuller, more traditional almond flavor while maintaining a soft texture and clean look.",
        availability: createAvailability([9, 10, 11, 12, 1, 2]),
      },
    ],
    origins: [
      { name: "Quetta", coordinates: [30.1798, 67.0011] },
      { name: "Kalat", coordinates: [29.0233, 66.5897] },
      { name: "Mastung", coordinates: [29.7969, 66.8453] },
    ],
    nutritionalInfo: "High in protein, vitamin E, magnesium, and healthy fats",
    type: "Almonds",
  },
  KalamDanaAlmondsUnshelled: {
    id: "kalamdana-almonds-unshelled",
    navLink:'KalamDanaAlmondsUnshelled',
    name: "Kalam Dana Almonds",
    navName: "Kalam Dana",
    heroImage: "/assets/images/latestphotos/Kalamdana Almond shelled.png",
    coverPhoto: "/assets/images/coverPhotos/Almond.jpg",
    description:
      "Premium quality almonds sourced from the finest orchards of Pakistan. Rich in protein, healthy fats, and essential nutrients.",
    detailedDescription:
      "Our almonds are carefully selected from the best orchards across Pakistan. These nutrient-dense nuts are perfect for snacking, baking, or adding to your favorite recipes. Rich in vitamin E, magnesium, and healthy monounsaturated fats, almonds support heart health and provide sustained energy throughout the day.",
    points: [
      "Soft & Aromatic: Slightly bitter-sweet with a distinctive aromatic profile.",
      "Balanced Flavour: Smooth texture with subtle depth, perfect for functional foods.",
      "Functional Use: Commonly used in nutritional supplements, energy/protein bars, and bakery products focused on performance.",
      "Origin: Kalat – an almond-growing region known for rich, mineral soils.",
      "Size: 30/32 per ounce – fine grading for consistency.",
      "Storage: Ambient – preserves texture and nutritional integrity.",
    ],
    varieties: [
      {
        id: "kambri-blanched",
        name: "Kambri Almonds (Blanche)",
        description:
          "Kambri almonds, also known as Kaghzi or Blanche almonds, come from the mountainous areas of Gilgit-Baltistan and Chitral. They are prized for their ultra-thin shells and light skin, making them easy to peel and perfect for light, healthy snacking. Their mild, delicate flavor and soft crunch make them a favorite in traditional sweets and health-focused diets.",
        availability: createAvailability([9, 8, 7, 12, 1, 2]),
      },
      {
        id: "kalamdana",
        name: "Kalamdana Almonds",
        description:
          "Kalamdana almonds, also referred to as Kalmi or Sonara almonds, are larger in size and richer in taste. These almonds have a naturally sweet, bold flavor and a firm crunch. Their high nutritional value — packed with vitamin E, fiber, magnesium, and healthy fats — makes them ideal for energy mixes, protein bars, or daily snacking for those with active lifestyles.",
        availability: createAvailability([9, 6, 11, 12]),
      },
      {
        id: "said-kheli-white",
        name: "Said-Kheli Almonds",
        description:
          "Said-Kheli almonds are known for their pale white skin and unique appearance. Often used in luxury gifting and traditional celebrations, these almonds offer a fuller, more traditional almond flavor while maintaining a soft texture and clean look.",
        availability: createAvailability([9, 10, 11, 12, 1, 2]),
      },
    ],
    origins: [
      { name: "Quetta", coordinates: [30.1798, 67.0011] },
      { name: "Kalat", coordinates: [29.0233, 66.5897] },
      { name: "Mastung", coordinates: [29.7969, 66.8453] },
    ],
    nutritionalInfo: "High in protein, vitamin E, magnesium, and healthy fats",
    type: "Almonds",
  },
  KattaJumboAlmondsShelled: {
    id: "katta-jumbo-almonds-shelled",
    navLink:'KattaJumboAlmondsShelled',
    name: "Katta Jumbo Almonds",
    navName: "Katta Jumbo",
    heroImage: "/assets/images/latestphotos/Katta Jumbo Shelled.png",
    coverPhoto: "/assets/images/coverPhotos/Almond.jpg",
    description:
      "Premium quality almonds sourced from the finest orchards of Pakistan. Rich in protein, healthy fats, and essential nutrients.",
    detailedDescription:
      "Our almonds are carefully selected from the best orchards across Pakistan. These nutrient-dense nuts are perfect for snacking, baking, or adding to your favorite recipes. Rich in vitamin E, magnesium, and healthy monounsaturated fats, almonds support heart health and provide sustained energy throughout the day.",
    points: [
      "Distinctively Large & Crunchy: Each almond stands out for its impressive size and satisfying crunch.",
      "Delicately Flavoured: A natural hint of sweetness enhances the nut’s refined taste.",
      "Premium Delicacy: Perfect for specialty liqueurs and gourmet dry fruit snacks.",
      "Origin: Skardu – known for its high-altitude almond orchards and rich agricultural heritage.",
      "Size: 29/31 per ounce – uniform and premium.",
      "Storage: Ambient – ideal for maintaining freshness and natural oils.",
    ],
    varieties: [
      {
        id: "kambri-blanched",
        name: "Kambri Almonds (Blanche)",
        description:
          "Kambri almonds, also known as Kaghzi or Blanche almonds, come from the mountainous areas of Gilgit-Baltistan and Chitral. They are prized for their ultra-thin shells and light skin, making them easy to peel and perfect for light, healthy snacking. Their mild, delicate flavor and soft crunch make them a favorite in traditional sweets and health-focused diets.",
        availability: createAvailability([9, 8, 7, 12, 1, 2]),
      },
      {
        id: "kalamdana",
        name: "Kalamdana Almonds",
        description:
          "Kalamdana almonds, also referred to as Kalmi or Sonara almonds, are larger in size and richer in taste. These almonds have a naturally sweet, bold flavor and a firm crunch. Their high nutritional value — packed with vitamin E, fiber, magnesium, and healthy fats — makes them ideal for energy mixes, protein bars, or daily snacking for those with active lifestyles.",
        availability: createAvailability([9, 6, 11, 12]),
      },
      {
        id: "said-kheli-white",
        name: "Said-Kheli Almonds",
        description:
          "Said-Kheli almonds are known for their pale white skin and unique appearance. Often used in luxury gifting and traditional celebrations, these almonds offer a fuller, more traditional almond flavor while maintaining a soft texture and clean look.",
        availability: createAvailability([9, 10, 11, 12, 1, 2]),
      },
    ],
    origins: [
      { name: "Quetta", coordinates: [30.1798, 67.0011] },
      { name: "Kalat", coordinates: [29.0233, 66.5897] },
      { name: "Mastung", coordinates: [29.7969, 66.8453] },
    ],
    nutritionalInfo: "High in protein, vitamin E, magnesium, and healthy fats",
    type: "Almonds",
  },
  KattaJumboAlmondsUnshelled: {
    id: "katta-jumbo-almonds-unshelled",
    navLink:'KattaJumboAlmondsUnshelled',
    name: "Katta Jumbo Almonds",
    navName: "Katta Jumbo",
    heroImage: "/assets/images/latestphotos/Katta Jumbo.png",
    coverPhoto: "/assets/images/coverPhotos/Almond.jpg",
    description:
      "Premium quality almonds sourced from the finest orchards of Pakistan. Rich in protein, healthy fats, and essential nutrients.",
    detailedDescription:
      "Our almonds are carefully selected from the best orchards across Pakistan. These nutrient-dense nuts are perfect for snacking, baking, or adding to your favorite recipes. Rich in vitamin E, magnesium, and healthy monounsaturated fats, almonds support heart health and provide sustained energy throughout the day.",
    points: [
      "Distinctively Large & Crunchy: Each almond stands out for its impressive size and satisfying crunch.",
      "Delicately Flavoured: A natural hint of sweetness enhances the nut’s refined taste.",
      "Premium Delicacy: Perfect for specialty liqueurs and gourmet dry fruit snacks.",
      "Origin: Skardu – known for its high-altitude almond orchards and rich agricultural heritage.",
      "Size: 29/31 per ounce",
      "Storage: Ambient – ideal for maintaining freshness and natural oils.",
    ],
    varieties: [
      {
        id: "kambri-blanched",
        name: "Kambri Almonds (Blanche)",
        description:
          "Kambri almonds, also known as Kaghzi or Blanche almonds, come from the mountainous areas of Gilgit-Baltistan and Chitral. They are prized for their ultra-thin shells and light skin, making them easy to peel and perfect for light, healthy snacking. Their mild, delicate flavor and soft crunch make them a favorite in traditional sweets and health-focused diets.",
        availability: createAvailability([9, 8, 7, 12, 1, 2]),
      },
      {
        id: "kalamdana",
        name: "Kalamdana Almonds",
        description:
          "Kalamdana almonds, also referred to as Kalmi or Sonara almonds, are larger in size and richer in taste. These almonds have a naturally sweet, bold flavor and a firm crunch. Their high nutritional value — packed with vitamin E, fiber, magnesium, and healthy fats — makes them ideal for energy mixes, protein bars, or daily snacking for those with active lifestyles.",
        availability: createAvailability([9, 6, 11, 12]),
      },
      {
        id: "said-kheli-white",
        name: "Said-Kheli Almonds",
        description:
          "Said-Kheli almonds are known for their pale white skin and unique appearance. Often used in luxury gifting and traditional celebrations, these almonds offer a fuller, more traditional almond flavor while maintaining a soft texture and clean look.",
        availability: createAvailability([9, 10, 11, 12, 1, 2]),
      },
    ],
    origins: [
      { name: "Quetta", coordinates: [30.1798, 67.0011] },
      { name: "Kalat", coordinates: [29.0233, 66.5897] },
      { name: "Mastung", coordinates: [29.7969, 66.8453] },
    ],
    nutritionalInfo: "High in protein, vitamin E, magnesium, and healthy fats",
    type: "Almonds",
  },

  PeelaKandhariRaisin: {
    id: "peela-kandhari-raisin",
    navLink:'PeelaKandhariRaisin',
    name: "Peela Kandhari Raisin",
    navName: "Peela Kandhari",
    heroImage: "/assets/images/latestphotos/Peela Khandhari - Golden Raisin.png",
    coverPhoto: "/assets/images/coverPhotos/raisins.avif",
    description:
      "Peela Kandhari raisins are a prized variety of golden-green raisins, traditionally sun-dried in Kandahar. These raisins are juicy, sweet, and slightly chewy, with a natural sugary taste.",
    detailedDescription:
      "Our raisins are naturally sun-dried to preserve their nutritional value and enhance their natural sweetness. These golden gems are packed with antioxidants, fiber, and essential minerals. Whether enjoyed as a healthy snack or used in baking and cooking, our raisins deliver exceptional quality and taste.",
    points: [
      "Juicy & Sweet: Naturally sugary with a slightly chewy texture that enhances richness.",
      "Golden Appeal: Vibrant colour and balanced sweetness ideal for both snacking and culinary use.",
      "Culinary Use: Perfect for cakes, cereals, salads, and chutneys.",
      "Origin: Chamman – Sabz Chamman, a region known for sun-dried golden grapes.",
      "Size: 45/55 per ounce ensuring plump, consistent fruit.",
      "Storage: Ambient – retains natural moisture and glossy finish.",
    ],
    varieties: [
      {
        id: "peela-kandhari",
        name: "Peela Kandhari",
        description:
          "Golden yellow raisins known for their sweet taste and soft texture, premium variety from Kandahar region.",
        availability: createAvailability([8, 9, 10, 11, 12, 1, 2, 3]),
      },
      {
        id: "sabz-chamman",
        name: "Sabz Chamman",
        description:
          "Sabz Chamman or Green (golden) raisins are eye-catching with their light green to golden-yellow hue, appearing plump, elongated, and smooth-skinned—like little jewels in the bowl. They're chewy yet moist, offering a lively burst of sweet‐tart flavor with subtle grape-fresh notes that feel vibrant and refreshing on the palate.",
        availability: createAvailability([8, 9, 10, 11, 12, 1, 2, 3]),
      },
      {
        id: "kala-pishin",
        name: "Kala Pishin",
        description:
          "Kala Pishin or as Black raisins are deep brown to almost black with a richly wrinkled exterior, often full-bodied and slightly sticky—clearly sun-dried to deepen their sweetness. They deliver a luxurious, caramel-like sweetness paired with mellow grape undertones and a satisfyingly soft but chewy texture that feels indulgent and comforting.",
        availability: createAvailability([8, 9, 10, 11, 12, 1, 2, 3]),
      },
    ],
    origins: [
      { name: "Pishin", coordinates: [30.5833, 66.9833] },
      { name: "Kandahar", coordinates: [31.6137, 65.7372] },
      { name: "Chaman", coordinates: [30.9167, 66.45] },
    ],
    nutritionalInfo: "Rich in antioxidants, fiber, and natural sugars",
    type: "Raisin",
  },

  SultanaRaisins: {
    id: "sultana-raisins",
    navLink:'SultanaRaisins',
    name: "Sultana Raisins",
    navName: "Sultana",
    heroImage: "/assets/images/latestphotos/Sultana Raisin.png",
    coverPhoto: "/assets/images/coverPhotos/raisins.avif",
    description:
      "Peela Kandhari raisins are a prized variety of golden-green raisins, traditionally sun-dried in Kandahar. These raisins are juicy, sweet, and slightly chewy, with a natural sugary taste.",
    detailedDescription:
      "Our raisins are naturally sun-dried to preserve their nutritional value and enhance their natural sweetness. These golden gems are packed with antioxidants, fiber, and essential minerals. Whether enjoyed as a healthy snack or used in baking and cooking, our raisins deliver exceptional quality and taste.",
    points: [
      "Soft & Juicy: Sweet, light, and tender with a subtle golden hue.",
      "Mildly Aromatic: Natural sweetness and fruity notes make it a chef’s favourite.",
      "Culinary Use: Used in pastries, curries, pilafs, and cheese boards.",
      "Origin: Kandhar – a key centre for premium raisin production.",
      "Size: 50/60 per ounce – evenly graded for quality.",
      "Storage: Ambient – preserves juiciness and fresh aroma.",
    ],
    varieties: [
      {
        id: "peela-kandhari",
        name: "Peela Kandhari",
        description:
          "Golden yellow raisins known for their sweet taste and soft texture, premium variety from Kandahar region.",
        availability: createAvailability([8, 9, 10, 11, 12, 1, 2, 3]),
      },
      {
        id: "sabz-chamman",
        name: "Sabz Chamman",
        description:
          "Sabz Chamman or Green (golden) raisins are eye-catching with their light green to golden-yellow hue, appearing plump, elongated, and smooth-skinned—like little jewels in the bowl. They're chewy yet moist, offering a lively burst of sweet‐tart flavor with subtle grape-fresh notes that feel vibrant and refreshing on the palate.",
        availability: createAvailability([8, 9, 10, 11, 12, 1, 2, 3]),
      },
      {
        id: "kala-pishin",
        name: "Kala Pishin",
        description:
          "Kala Pishin or as Black raisins are deep brown to almost black with a richly wrinkled exterior, often full-bodied and slightly sticky—clearly sun-dried to deepen their sweetness. They deliver a luxurious, caramel-like sweetness paired with mellow grape undertones and a satisfyingly soft but chewy texture that feels indulgent and comforting.",
        availability: createAvailability([8, 9, 10, 11, 12, 1, 2, 3]),
      },
    ],
    origins: [
      { name: "Pishin", coordinates: [30.5833, 66.9833] },
      { name: "Kandahar", coordinates: [31.6137, 65.7372] },
      { name: "Chaman", coordinates: [30.9167, 66.45] },
    ],
    nutritionalInfo: "Rich in antioxidants, fiber, and natural sugars",
    type: "Raisin",
  },
  KalaPishin: {
    id: "kala-pishin",
    navLink:'KalaPishin',
    name: "Kala Pishin",
    navName: "Kala Pishin",
    heroImage: "/assets/images/latestphotos/Kala Pishin - Black Raisin.png",
    coverPhoto: "/assets/images/coverPhotos/raisins.avif",
    description:
      "Peela Kandhari raisins are a prized variety of golden-green raisins, traditionally sun-dried in Kandahar. These raisins are juicy, sweet, and slightly chewy, with a natural sugary taste.",
    detailedDescription:
      "Our raisins are naturally sun-dried to preserve their nutritional value and enhance their natural sweetness. These golden gems are packed with antioxidants, fiber, and essential minerals. Whether enjoyed as a healthy snack or used in baking and cooking, our raisins deliver exceptional quality and taste.",
    points: [
      "Rich & Fruity: Deep, full-bodied flavour with chewy texture and strong sweetness.",
      "Intense Taste: Naturally dark hue adds depth to culinary presentations.",
      "Culinary Use: Excellent for snacks, hearty breads, pilafs, and stews.",
      "Origin: Pishin – known for producing bold, dark raisins with rich taste.",
      "Size: 55/65 per ounce for uniformity.",
      "Storage: Ambient – keeps texture soft and flavour robust.",
    ],
    varieties: [
      {
        id: "peela-kandhari",
        name: "Peela Kandhari",
        description:
          "Golden yellow raisins known for their sweet taste and soft texture, premium variety from Kandahar region.",
        availability: createAvailability([8, 9, 10, 11, 12, 1, 2, 3]),
      },
      {
        id: "sabz-chamman",
        name: "Sabz Chamman",
        description:
          "Sabz Chamman or Green (golden) raisins are eye-catching with their light green to golden-yellow hue, appearing plump, elongated, and smooth-skinned—like little jewels in the bowl. They're chewy yet moist, offering a lively burst of sweet‐tart flavor with subtle grape-fresh notes that feel vibrant and refreshing on the palate.",
        availability: createAvailability([8, 9, 10, 11, 12, 1, 2, 3]),
      },
      {
        id: "kala-pishin",
        name: "Kala Pishin",
        description:
          "Kala Pishin or as Black raisins are deep brown to almost black with a richly wrinkled exterior, often full-bodied and slightly sticky—clearly sun-dried to deepen their sweetness. They deliver a luxurious, caramel-like sweetness paired with mellow grape undertones and a satisfyingly soft but chewy texture that feels indulgent and comforting.",
        availability: createAvailability([8, 9, 10, 11, 12, 1, 2, 3]),
      },
    ],
    origins: [
      { name: "Pishin", coordinates: [30.5833, 66.9833] },
      { name: "Kandahar", coordinates: [31.6137, 65.7372] },
      { name: "Chaman", coordinates: [30.9167, 66.45] },
    ],
    nutritionalInfo: "Rich in antioxidants, fiber, and natural sugars",
    type: "Raisin",
  },
  KillaSaifullahPistachiosShelled: {
    id: "killa-saifullah-pistachios-shelled",
    navLink:'KillaSaifullahPistachiosShelled',
    name: "Killa Saifullah Pistachios",
    navName: "Killa Saifullah",
    heroImage: "/assets/images/latestphotos/Killah Saifullah Pistachio Shelled.png",
    coverPhoto: "/assets/images/coverPhotos/Pistachio.jpg",
    description:
      "World-renowned Pakistani pistachios with exceptional taste and quality. A perfect blend of flavor and nutrition.",
    detailedDescription:
      "Pakistan produces some of the world's finest pistachios, known for their distinctive flavor and superior quality. Our pistachios are carefully harvested and processed to maintain their natural taste and nutritional benefits. Rich in protein, healthy fats, and antioxidants, they make an excellent healthy snack.",
    points: [
      "Smooth & Delicate: Slightly rounder with a mild, sweet flavour and soft crunch.",
      "Elegant Profile: Balanced taste for refined desserts.",
      "Gourmet Use: Suited for gelato, luxury chocolates, macarons, and bakery toppings.",
      "Origin: Kalat – renowned for superior pistachio cultivation.",
      "Size: 40/45 per ounce – premium grade.",
      "Storage: Ambient – preserves freshness and texture.",
    ],
    varieties: [
      {
        id: "ziarat-pista",
        name: "Ziarat Pista",
        description:
          "Ziarat pistachios come from the cool, dry region of Ziarat in Balochistan, Pakistan. These nuts are known for their rich, buttery flavor and satisfying crunch. Grown in a unique microclimate, Ziarat pistachios have a full-bodied taste that stands out among regional varieties.",
        availability: createAvailability([9, 10, 11, 12, 1]),
      },
      {
        id: "ziarat-pista-shell",
        name: "Ziarat Pista w shell",
        description:
          "Ziarat pistachios come from the cool, dry region of Ziarat in Balochistan, Pakistan. These nuts are known for their rich, buttery flavor and satisfying crunch. Grown in a unique microclimate, Ziarat pistachios have a full-bodied taste that stands out among regional varieties.",
        availability: createAvailability([9, 10, 11, 12, 1]),
      },
      {
        id: "killa-saifullah-pista",
        name: "Killa Saifullah Pista",
        description:
          "From the highlands of Killa Saifullah in northern Balochistan, this pistachio variety is known for its robust flavor and traditional sun-drying techniques. They are consumed both with and without shells and are particularly popular when roasted, making them a premium offering.",
        availability: createAvailability([9, 10, 11, 12, 1]),
      },
      {
        id: "killa-saifullah-roasted",
        name: "Killa Saifullah Pista Roasted with Shell",
        description:
          "From the highlands of Killa Saifullah in northern Balochistan, this pistachio variety is known for its robust flavor and traditional sun-drying techniques. They are consumed both with and without shells and are particularly popular when roasted, making them a premium offering.",
        availability: createAvailability([9, 10, 11, 12, 1]),
      },
    ],
    origins: [
      { name: "Ziarat", coordinates: [30.3811, 67.7261] },
      { name: "Killa Saifullah", coordinates: [30.7056, 68.7444] },
      { name: "Sherani", coordinates: [30.2264, 68.9383] },
    ],
    nutritionalInfo: "High in protein, healthy fats, and antioxidants",
    type: "Pistachio",
  },
  ZiaratPistachiosShelled: {
    id: "ziarat-pistachios-shelled",
    name: "Ziarat Pistachios",
    navLink:'ZiaratPistachiosShelled',
    navName: "Ziarat",
    heroImage: "/assets/images/latestphotos/Ziarat Pistachio Shelled.png",
    coverPhoto: "/assets/images/coverPhotos/Pistachio.jpg",
    points: [
      "Rich & Earthy: Distinctive, bold nutty taste with slight chewiness.",
      "Robust Texture: Naturally dense and flavourful kernel.",
      "Gourmet Use: Perfect for nougats, pralines, biscotti, and Mediterranean pastries.",
      "Origin: Quetta – celebrated for premium pistachio orchards.",
      "Size: 45/50 per ounce – consistent calibre for quality presentation.",
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
        description:
          "Ziarat pistachios come from the cool, dry region of Ziarat in Balochistan, Pakistan. These nuts are known for their rich, buttery flavor and satisfying crunch. Grown in a unique microclimate, Ziarat pistachios have a full-bodied taste that stands out among regional varieties.",
        availability: createAvailability([9, 10, 11, 12, 1]),
      },
      {
        id: "ziarat-pista-shell",
        name: "Ziarat Pista w shell",
        description:
          "Ziarat pistachios come from the cool, dry region of Ziarat in Balochistan, Pakistan. These nuts are known for their rich, buttery flavor and satisfying crunch. Grown in a unique microclimate, Ziarat pistachios have a full-bodied taste that stands out among regional varieties.",
        availability: createAvailability([9, 10, 11, 12, 1]),
      },
      {
        id: "killa-saifullah-pista",
        name: "Killa Saifullah Pista",
        description:
          "From the highlands of Killa Saifullah in northern Balochistan, this pistachio variety is known for its robust flavor and traditional sun-drying techniques. They are consumed both with and without shells and are particularly popular when roasted, making them a premium offering.",
        availability: createAvailability([9, 10, 11, 12, 1]),
      },
      {
        id: "killa-saifullah-roasted",
        name: "Killa Saifullah Pista Roasted with Shell",
        description:
          "From the highlands of Killa Saifullah in northern Balochistan, this pistachio variety is known for its robust flavor and traditional sun-drying techniques. They are consumed both with and without shells and are particularly popular when roasted, making them a premium offering.",
        availability: createAvailability([9, 10, 11, 12, 1]),
      },
    ],
    origins: [
      { name: "Ziarat", coordinates: [30.3811, 67.7261] },
      { name: "Killa Saifullah", coordinates: [30.7056, 68.7444] },
      { name: "Sherani", coordinates: [30.2264, 68.9383] },
    ],
    nutritionalInfo: "High in protein, healthy fats, and antioxidants",
    type: "Pistachio",
  },
  KillaSaifullahPistachiosUnshelled: {
    id: "killa-saifullah-pistachios-unshelled",
    name: "Killa Saifullah Pistachios",
    navName: "Killa Saifullah",
    navLink:'KillaSaifullahPistachiosUnshelled',
    heroImage: "/assets/images/latestphotos/Killah Saifullah Pistachio.png",
    coverPhoto: "/assets/images/coverPhotos/Pistachio.jpg",
    description:
      "World-renowned Pakistani pistachios with exceptional taste and quality. A perfect blend of flavor and nutrition.",
    detailedDescription:
      "Pakistan produces some of the world's finest pistachios, known for their distinctive flavor and superior quality. Our pistachios are carefully harvested and processed to maintain their natural taste and nutritional benefits. Rich in protein, healthy fats, and antioxidants, they make an excellent healthy snack.",
    points: [
      "Smooth & Delicate: Slightly rounder with a mild, sweet flavour and soft crunch.",
      "Elegant Profile: Balanced taste for refined desserts.",
      "Gourmet Use: Suited for gelato, luxury chocolates, macarons, and bakery toppings.",
      "Origin: Kalat – renowned for superior pistachio cultivation.",
      "Size: 40/45 per ounce – premium grade.",
      "Storage: Ambient – preserves freshness and texture.",
    ],
    varieties: [
      {
        id: "ziarat-pista",
        name: "Ziarat Pista",
        description:
          "Ziarat pistachios come from the cool, dry region of Ziarat in Balochistan, Pakistan. These nuts are known for their rich, buttery flavor and satisfying crunch. Grown in a unique microclimate, Ziarat pistachios have a full-bodied taste that stands out among regional varieties.",
        availability: createAvailability([9, 10, 11, 12, 1]),
      },
      {
        id: "ziarat-pista-shell",
        name: "Ziarat Pista w shell",
        description:
          "Ziarat pistachios come from the cool, dry region of Ziarat in Balochistan, Pakistan. These nuts are known for their rich, buttery flavor and satisfying crunch. Grown in a unique microclimate, Ziarat pistachios have a full-bodied taste that stands out among regional varieties.",
        availability: createAvailability([9, 10, 11, 12, 1]),
      },
      {
        id: "killa-saifullah-pista",
        name: "Killa Saifullah Pista",
        description:
          "From the highlands of Killa Saifullah in northern Balochistan, this pistachio variety is known for its robust flavor and traditional sun-drying techniques. They are consumed both with and without shells and are particularly popular when roasted, making them a premium offering.",
        availability: createAvailability([9, 10, 11, 12, 1]),
      },
      {
        id: "killa-saifullah-roasted",
        name: "Killa Saifullah Pista Roasted with Shell",
        description:
          "From the highlands of Killa Saifullah in northern Balochistan, this pistachio variety is known for its robust flavor and traditional sun-drying techniques. They are consumed both with and without shells and are particularly popular when roasted, making them a premium offering.",
        availability: createAvailability([9, 10, 11, 12, 1]),
      },
    ],
    origins: [
      { name: "Ziarat", coordinates: [30.3811, 67.7261] },
      { name: "Killa Saifullah", coordinates: [30.7056, 68.7444] },
      { name: "Sherani", coordinates: [30.2264, 68.9383] },
    ],
    nutritionalInfo: "High in protein, healthy fats, and antioxidants",
    type: "Pistachio",
  },
  ZiaratPistachiosUnshelled: {
    id: "ziarat-pistachios-unshelled",
    name: "Ziarat Pistachios",
    navLink:'ZiaratPistachiosUnshelled',
    navName: "Ziarat",
    heroImage: "/assets/images/latestphotos/Ziarat Pista.png",
    coverPhoto: "/assets/images/coverPhotos/Pistachio.jpg",
    points: [
      "Rich & Earthy: Distinctive, bold nutty taste with slight chewiness.",
      "Robust Texture: Naturally dense and flavourful kernel.",
      "Gourmet Use: Perfect for nougats, pralines, biscotti, and Mediterranean pastries.",
      "Origin: Quetta – celebrated for premium pistachio orchards.",
      "Size: 45/50 per ounce – consistent calibre for quality presentation.",
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
        description:
          "Ziarat pistachios come from the cool, dry region of Ziarat in Balochistan, Pakistan. These nuts are known for their rich, buttery flavor and satisfying crunch. Grown in a unique microclimate, Ziarat pistachios have a full-bodied taste that stands out among regional varieties.",
        availability: createAvailability([9, 10, 11, 12, 1]),
      },
      {
        id: "ziarat-pista-shell",
        name: "Ziarat Pista w shell",
        description:
          "Ziarat pistachios come from the cool, dry region of Ziarat in Balochistan, Pakistan. These nuts are known for their rich, buttery flavor and satisfying crunch. Grown in a unique microclimate, Ziarat pistachios have a full-bodied taste that stands out among regional varieties.",
        availability: createAvailability([9, 10, 11, 12, 1]),
      },
      {
        id: "killa-saifullah-pista",
        name: "Killa Saifullah Pista",
        description:
          "From the highlands of Killa Saifullah in northern Balochistan, this pistachio variety is known for its robust flavor and traditional sun-drying techniques. They are consumed both with and without shells and are particularly popular when roasted, making them a premium offering.",
        availability: createAvailability([9, 10, 11, 12, 1]),
      },
      {
        id: "killa-saifullah-roasted",
        name: "Killa Saifullah Pista Roasted with Shell",
        description:
          "From the highlands of Killa Saifullah in northern Balochistan, this pistachio variety is known for its robust flavor and traditional sun-drying techniques. They are consumed both with and without shells and are particularly popular when roasted, making them a premium offering.",
        availability: createAvailability([9, 10, 11, 12, 1]),
      },
    ],
    origins: [
      { name: "Ziarat", coordinates: [30.3811, 67.7261] },
      { name: "Killa Saifullah", coordinates: [30.7056, 68.7444] },
      { name: "Sherani", coordinates: [30.2264, 68.9383] },
    ],
    nutritionalInfo: "High in protein, healthy fats, and antioxidants",
    type: "Pistachio",
  },

  SwatdirWalnutsShelled: {
    id: "swat-dir-walnuts-shelled",
    name: "Swat-Dir Walnuts",
    navLink:'SwatdirWalnutsShelled',
    navName: "Swat-Dir",
    heroImage: "/assets/images/latestphotos/Swat-dir Walnut Shelled.png",
    coverPhoto: "/assets/images/coverPhotos/walnut.webp",
    points: [
      "Mildly Sweet & Soft: Subtle sweetness with faint bitterness and an oily texture.",
      "Natural Smoothness: Soft and easy to use in both sweet and savoury dishes.",
      "Culinary Use: Baking, winter snacks, artisan breads, savory salads, cheese pairings, hearty sauces, and walnut oil.",
      "Origin: Swat – a mountain valley known for rich walnut produce.",
      "Size: 6/8 halves per ounce – large and meaty.",
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
        description:
          "These walnuts are harvested from the valleys of Swat and Dir in northern Pakistan, where the cool climate helps develop their distinctive taste. Swat-Dir walnuts are mildly sweet with a faint bitterness and have a soft, oily texture. They are widely used in baking, winter snacks, and for extracting walnut oil due to their rich lipid content.",
        availability: createAvailability([10, 11, 12, 1, 2, 3]),
      },
      {
        id: "swat-dir-shelled",
        name: "Swat-Dir Walnut",
        description:
          "These walnuts are harvested from the valleys of Swat and Dir in northern Pakistan, where the cool climate helps develop their distinctive taste. Swat-Dir walnuts are mildly sweet with a faint bitterness and have a soft, oily texture. They are widely used in baking, winter snacks, and for extracting walnut oil due to their rich lipid content.",
        availability: createAvailability([10, 11, 12, 1, 2, 3]),
      },
      {
        id: "kaghzi-walnut",
        name: "Kaghzi Walnut",
        description:
          "Kaghzi walnuts are known for their paper-thin shells and easy cracking. The kernels inside are pale, plump, and subtly sweet. Their high yield and easy usability make them popular.",
        availability: createAvailability([10, 11, 12, 1, 2, 3]),
      },
      {
        id: "kaghzi-shell",
        name: "Kaghzi Walnut w Shell",
        description:
          "Kaghzi walnuts are known for their paper-thin shells and easy cracking. The kernels inside are pale, plump, and subtly sweet. Their high yield and easy usability make them popular.",
        availability: createAvailability([10, 11, 12, 1, 2, 3]),
      },
    ],
    origins: [
      { name: "Swat", coordinates: [35.2227, 72.4258] },
      { name: "Dir", coordinates: [35.2058, 71.8786] },
      { name: "Chitral", coordinates: [35.8518, 71.7864] },
    ],
    nutritionalInfo: "Rich in omega-3 fatty acids, protein, and antioxidants",
    type: "Walnut",
  },
  KaghziWalnutsShelled: {
    id: "kaghzi-walnuts-shelled",
    name: "Kaghzi Walnuts",
    navLink:'KaghziWalnutsShelled',
    navName: "Kaghzi",
    heroImage: "/assets/images/latestphotos/Kaghzi Walnut Shelled.png",
    coverPhoto: "/assets/images/coverPhotos/walnut.webp",
    points: [
      "Paper-Thin Shells: Easy to crack with pale, plump kernels.",
      "Delicate Sweetness: Subtly sweet flavour perfect for premium desserts.",
      "Culinary Use: Ideal for cakes, tarts, confectionery, chocolates, and gourmet nut mixes.",
      "Origin: Gilgit – cool climate producing high-grade walnuts.",
      "Size: 10/12 halves per ounce ensuring light, clean halves.",
      "Storage: Ambient – preserves taste and texture.",
    ],
    description:
      "Premium walnuts from the northern regions of Pakistan, known for their rich taste and excellent nutritional profile.",
    detailedDescription:
      "Our walnuts come from the pristine valleys of northern Pakistan, where the climate and soil conditions produce nuts of exceptional quality. These brain-healthy nuts are rich in omega-3 fatty acids, protein, and antioxidants. Perfect for snacking, baking, or adding to salads and cereals.",
    varieties: [
      {
        id: "swat-dir-shell",
        name: "Swat-Dir Walnut w shell",
        description:
          "These walnuts are harvested from the valleys of Swat and Dir in northern Pakistan, where the cool climate helps develop their distinctive taste. Swat-Dir walnuts are mildly sweet with a faint bitterness and have a soft, oily texture. They are widely used in baking, winter snacks, and for extracting walnut oil due to their rich lipid content.",
        availability: createAvailability([10, 11, 12, 1, 2, 3]),
      },
      {
        id: "swat-dir-shelled",
        name: "Swat-Dir Walnut",
        description:
          "These walnuts are harvested from the valleys of Swat and Dir in northern Pakistan, where the cool climate helps develop their distinctive taste. Swat-Dir walnuts are mildly sweet with a faint bitterness and have a soft, oily texture. They are widely used in baking, winter snacks, and for extracting walnut oil due to their rich lipid content.",
        availability: createAvailability([10, 11, 12, 1, 2, 3]),
      },
      {
        id: "kaghzi-walnut",
        name: "Kaghzi Walnut",
        description:
          "Kaghzi walnuts are known for their paper-thin shells and easy cracking. The kernels inside are pale, plump, and subtly sweet. Their high yield and easy usability make them popular.",
        availability: createAvailability([10, 11, 12, 1, 2, 3]),
      },
      {
        id: "kaghzi-shell",
        name: "Kaghzi Walnut w Shell",
        description:
          "Kaghzi walnuts are known for their paper-thin shells and easy cracking. The kernels inside are pale, plump, and subtly sweet. Their high yield and easy usability make them popular.",
        availability: createAvailability([10, 11, 12, 1, 2, 3]),
      },
    ],
    origins: [
      { name: "Swat", coordinates: [35.2227, 72.4258] },
      { name: "Dir", coordinates: [35.2058, 71.8786] },
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
    heroImage: "/assets/images/latestphotos/Swat-dir Walnut.png",
    coverPhoto: "/assets/images/coverPhotos/walnut.webp",
    points: [
      "Mildly Sweet & Soft: Subtle sweetness with faint bitterness and an oily texture.",
      "Natural Smoothness: Soft and easy to use in both sweet and savoury dishes.",
      "Culinary Use: Baking, winter snacks, artisan breads, savory salads, cheese pairings, hearty sauces, and walnut oil.",
      "Origin: Swat – a mountain valley known for rich walnut produce.",
      "Size: 6/8 halves per ounce – large and meaty.",
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
        description:
          "These walnuts are harvested from the valleys of Swat and Dir in northern Pakistan, where the cool climate helps develop their distinctive taste. Swat-Dir walnuts are mildly sweet with a faint bitterness and have a soft, oily texture. They are widely used in baking, winter snacks, and for extracting walnut oil due to their rich lipid content.",
        availability: createAvailability([10, 11, 12, 1, 2, 3]),
      },
      {
        id: "swat-dir-shelled",
        name: "Swat-Dir Walnut",
        description:
          "These walnuts are harvested from the valleys of Swat and Dir in northern Pakistan, where the cool climate helps develop their distinctive taste. Swat-Dir walnuts are mildly sweet with a faint bitterness and have a soft, oily texture. They are widely used in baking, winter snacks, and for extracting walnut oil due to their rich lipid content.",
        availability: createAvailability([10, 11, 12, 1, 2, 3]),
      },
      {
        id: "kaghzi-walnut",
        name: "Kaghzi Walnut",
        description:
          "Kaghzi walnuts are known for their paper-thin shells and easy cracking. The kernels inside are pale, plump, and subtly sweet. Their high yield and easy usability make them popular.",
        availability: createAvailability([10, 11, 12, 1, 2, 3]),
      },
      {
        id: "kaghzi-shell",
        name: "Kaghzi Walnut w Shell",
        description:
          "Kaghzi walnuts are known for their paper-thin shells and easy cracking. The kernels inside are pale, plump, and subtly sweet. Their high yield and easy usability make them popular.",
        availability: createAvailability([10, 11, 12, 1, 2, 3]),
      },
    ],
    origins: [
      { name: "Swat", coordinates: [35.2227, 72.4258] },
      { name: "Dir", coordinates: [35.2058, 71.8786] },
      { name: "Chitral", coordinates: [35.8518, 71.7864] },
    ],
    nutritionalInfo: "Rich in omega-3 fatty acids, protein, and antioxidants",
    type: "Walnut",
  },
  KaghziWalnutsUnshelled: {
    id: "kaghzi-walnuts-unshelled",
    name: "Kaghzi Walnuts",
    navLink:'KaghziWalnutsUnshelled',
    navName: "Kaghzi",
    heroImage: "/assets/images/latestphotos/Kaghzi Walnut.png",
    coverPhoto: "/assets/images/coverPhotos/walnut.webp",
    points: [
      "Paper-Thin Shells: Easy to crack with pale, plump kernels.",
      "Delicate Sweetness: Subtly sweet flavour perfect for premium desserts.",
      "Culinary Use: Ideal for cakes, tarts, confectionery, chocolates, and gourmet nut mixes.",
      "Origin: Gilgit – cool climate producing high-grade walnuts.",
      "Size: 10/12 halves per ounce ensuring light, clean halves.",
      "Storage: Ambient – preserves taste and texture.",
    ],
    description:
      "Premium walnuts from the northern regions of Pakistan, known for their rich taste and excellent nutritional profile.",
    detailedDescription:
      "Our walnuts come from the pristine valleys of northern Pakistan, where the climate and soil conditions produce nuts of exceptional quality. These brain-healthy nuts are rich in omega-3 fatty acids, protein, and antioxidants. Perfect for snacking, baking, or adding to salads and cereals.",
    varieties: [
      {
        id: "swat-dir-shell",
        name: "Swat-Dir Walnut w shell",
        description:
          "These walnuts are harvested from the valleys of Swat and Dir in northern Pakistan, where the cool climate helps develop their distinctive taste. Swat-Dir walnuts are mildly sweet with a faint bitterness and have a soft, oily texture. They are widely used in baking, winter snacks, and for extracting walnut oil due to their rich lipid content.",
        availability: createAvailability([10, 11, 12, 1, 2, 3]),
      },
      {
        id: "swat-dir-shelled",
        name: "Swat-Dir Walnut",
        description:
          "These walnuts are harvested from the valleys of Swat and Dir in northern Pakistan, where the cool climate helps develop their distinctive taste. Swat-Dir walnuts are mildly sweet with a faint bitterness and have a soft, oily texture. They are widely used in baking, winter snacks, and for extracting walnut oil due to their rich lipid content.",
        availability: createAvailability([10, 11, 12, 1, 2, 3]),
      },
      {
        id: "kaghzi-walnut",
        name: "Kaghzi Walnut",
        description:
          "Kaghzi walnuts are known for their paper-thin shells and easy cracking. The kernels inside are pale, plump, and subtly sweet. Their high yield and easy usability make them popular.",
        availability: createAvailability([10, 11, 12, 1, 2, 3]),
      },
      {
        id: "kaghzi-shell",
        name: "Kaghzi Walnut w Shell",
        description:
          "Kaghzi walnuts are known for their paper-thin shells and easy cracking. The kernels inside are pale, plump, and subtly sweet. Their high yield and easy usability make them popular.",
        availability: createAvailability([10, 11, 12, 1, 2, 3]),
      },
    ],
    origins: [
      { name: "Swat", coordinates: [35.2227, 72.4258] },
      { name: "Dir", coordinates: [35.2058, 71.8786] },
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
    heroImage: "/assets/images/latestphotos/Bannu Pinenut Shelled.png",
    coverPhoto: "/assets/images/coverPhotos/Pinenuts.jpg",
    points: [
      "Delicate & Buttery: Buttery sweetness with a subtle crunch.",
      "Nutrient Dense: Rich in proteins and healthy fats, prized for natural flavour.",
      "Culinary Use: Ideal for luxury pesto, gourmet baked goods, salads, and fine confections.",
      "Origin: Bannu – region famous for authentic pine nut harvests.",
      "Size: 150/160 per ounce ensuring fine grading.",
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
        description:
          "These pinenuts hail from Banu and Chilas in Gilgit-Baltistan and are among the most premium dry fruits in Pakistan. Known for their soft bite and buttery flavor, Banu-Chilas pinenuts are wild-harvested and sold with or without shell. Their natural sweetness makes them ideal for both snacking and garnishing sweets or pulao.",
        availability: createAvailability([8, 9, 10, 11]),
      },
      {
        id: "banu-chilas-shelled",
        name: "Banu-Chilas Pinenut",
        description:
          "These pinenuts hail from Banu and Chilas in Gilgit-Baltistan and are among the most premium dry fruits in Pakistan. Known for their soft bite and buttery flavor, Banu-Chilas pinenuts are wild-harvested and sold with or without shell. Their natural sweetness makes them ideal for both snacking and garnishing sweets or pulao.",
        availability: createAvailability([8, 9, 10, 11]),
      },
      {
        id: "waziri-pinenuts",
        name: "Waziri Pinenuts",
        description:
          "Waziri pinenuts are collected from the rugged Waziristan region and share a similar profile with Banu-Chilas varieties. Slightly firmer, they offer a rich, nutty flavor and high oil content. They're often roasted and used in traditional tribal dishes or sold as a delicacy.",
        availability: createAvailability([8, 9, 10, 11]),
      },
      {
        id: "waziri-shell",
        name: "Waziri Pinenuts in shell",
        description:
          "Waziri pinenuts are collected from the rugged Waziristan region and share a similar profile with Banu-Chilas varieties. Slightly firmer, they offer a rich, nutty flavor and high oil content. They're often roasted and used in traditional tribal dishes or sold as a delicacy.",
        availability: createAvailability([8, 9, 10, 11]),
      },
    ],
    origins: [
      { name: "Chilas", coordinates: [35.4167, 74.0833] },
      { name: "Bannu", coordinates: [32.9889, 70.6056] },
      { name: "Waziristan", coordinates: [32.3617, 69.4306] },
    ],
    nutritionalInfo: "High in protein, healthy fats, and essential minerals",
    type: "Pine Nut",
  },
  WaziriPineNutsShelled: {
    id: "waziri-pinenuts-shelled",
    name: "Waziri Pine Nuts",
    navLink:'WaziriPineNutsShelled',
    navName: "Waziri",
    heroImage: "/assets/images/latestphotos/Waziri Pinenut Shelled.png",
    coverPhoto: "/assets/images/coverPhotos/Pinenuts.jpg",
    points: [
      "Rich & Distinct: Slightly firmer with a pronounced nutty aroma.",
      "Globally Prized: Known for premium quality and deep, nutty profile.",
      "Culinary Use: Artisan confections, fine chocolate, creamy desserts, cheese boards, and luxury snacks.",
      "Origin: Waziristan – high-altitude pine forests yielding top-grade produce.",
      "Size: 120/130 per ounce – premium size.",
      "Storage: Ambient – preserves natural oils and premium texture.",
    ],
    description:
      "Exotic pine nuts harvested from the pristine forests of northern Pakistan. A delicacy prized for its unique flavor.",
    detailedDescription:
      "Pine nuts are harvested from pine cones in the remote forests of northern Pakistan. These premium nuts have a distinctive buttery flavor and are considered a delicacy worldwide. Rich in protein, healthy fats, and minerals, they're perfect for gourmet cooking and traditional recipes.",
    varieties: [
      {
        id: "banu-chilas-shell",
        name: "Banu-Chilas Pinenut in shell",
        description:
          "These pinenuts hail from Banu and Chilas in Gilgit-Baltistan and are among the most premium dry fruits in Pakistan. Known for their soft bite and buttery flavor, Banu-Chilas pinenuts are wild-harvested and sold with or without shell. Their natural sweetness makes them ideal for both snacking and garnishing sweets or pulao.",
        availability: createAvailability([8, 9, 10, 11]),
      },
      {
        id: "banu-chilas-shelled",
        name: "Banu-Chilas Pinenut",
        description:
          "These pinenuts hail from Banu and Chilas in Gilgit-Baltistan and are among the most premium dry fruits in Pakistan. Known for their soft bite and buttery flavor, Banu-Chilas pinenuts are wild-harvested and sold with or without shell. Their natural sweetness makes them ideal for both snacking and garnishing sweets or pulao.",
        availability: createAvailability([8, 9, 10, 11]),
      },
      {
        id: "waziri-pinenuts",
        name: "Waziri Pinenuts",
        description:
          "Waziri pinenuts are collected from the rugged Waziristan region and share a similar profile with Banu-Chilas varieties. Slightly firmer, they offer a rich, nutty flavor and high oil content. They're often roasted and used in traditional tribal dishes or sold as a delicacy.",
        availability: createAvailability([8, 9, 10, 11]),
      },
      {
        id: "waziri-shell",
        name: "Waziri Pinenuts in shell",
        description:
          "Waziri pinenuts are collected from the rugged Waziristan region and share a similar profile with Banu-Chilas varieties. Slightly firmer, they offer a rich, nutty flavor and high oil content. They're often roasted and used in traditional tribal dishes or sold as a delicacy.",
        availability: createAvailability([8, 9, 10, 11]),
      },
    ],
    origins: [
      { name: "Chilas", coordinates: [35.4167, 74.0833] },
      { name: "Bannu", coordinates: [32.9889, 70.6056] },
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
    heroImage: "/assets/images/latestphotos/Bannu Pinenut.png",
    coverPhoto: "/assets/images/coverPhotos/Pinenuts.jpg",
    points: [
      "Delicate & Buttery: Buttery sweetness with a subtle crunch.",
      "Nutrient Dense: Rich in proteins and healthy fats, prized for natural flavour.",
      "Culinary Use: Ideal for luxury pesto, gourmet baked goods, salads, and fine confections.",
      "Origin: Bannu – region famous for authentic pine nut harvests.",
      "Size: 150/160 per ounce ensuring fine grading.",
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
        description:
          "These pinenuts hail from Banu and Chilas in Gilgit-Baltistan and are among the most premium dry fruits in Pakistan. Known for their soft bite and buttery flavor, Banu-Chilas pinenuts are wild-harvested and sold with or without shell. Their natural sweetness makes them ideal for both snacking and garnishing sweets or pulao.",
        availability: createAvailability([8, 9, 10, 11]),
      },
      {
        id: "banu-chilas-shelled",
        name: "Banu-Chilas Pinenut",
        description:
          "These pinenuts hail from Banu and Chilas in Gilgit-Baltistan and are among the most premium dry fruits in Pakistan. Known for their soft bite and buttery flavor, Banu-Chilas pinenuts are wild-harvested and sold with or without shell. Their natural sweetness makes them ideal for both snacking and garnishing sweets or pulao.",
        availability: createAvailability([8, 9, 10, 11]),
      },
      {
        id: "waziri-pinenuts",
        name: "Waziri Pinenuts",
        description:
          "Waziri pinenuts are collected from the rugged Waziristan region and share a similar profile with Banu-Chilas varieties. Slightly firmer, they offer a rich, nutty flavor and high oil content. They're often roasted and used in traditional tribal dishes or sold as a delicacy.",
        availability: createAvailability([8, 9, 10, 11]),
      },
      {
        id: "waziri-shell",
        name: "Waziri Pinenuts in shell",
        description:
          "Waziri pinenuts are collected from the rugged Waziristan region and share a similar profile with Banu-Chilas varieties. Slightly firmer, they offer a rich, nutty flavor and high oil content. They're often roasted and used in traditional tribal dishes or sold as a delicacy.",
        availability: createAvailability([8, 9, 10, 11]),
      },
    ],
    origins: [
      { name: "Chilas", coordinates: [35.4167, 74.0833] },
      { name: "Bannu", coordinates: [32.9889, 70.6056] },
      { name: "Waziristan", coordinates: [32.3617, 69.4306] },
    ],
    nutritionalInfo: "High in protein, healthy fats, and essential minerals",
    type: "Pine Nut",
  },
  WaziriPineNutsUnshelled: {
    id: "waziri-pinenuts-unshelled",
    name: "Waziri Pine Nuts",
    navLink:'WaziriPineNutsUnshelled',
    navName: "Waziri",
    heroImage: "/assets/images/latestphotos/Waziri Pinenuts.png",
    coverPhoto: "/assets/images/coverPhotos/Pinenuts.jpg",
    points: [
      "Rich & Distinct: Slightly firmer with a pronounced nutty aroma.",
      "Globally Prized: Known for premium quality and deep, nutty profile.",
      "Culinary Use: Artisan confections, fine chocolate, creamy desserts, cheese boards, and luxury snacks.",
      "Origin: Waziristan – high-altitude pine forests yielding top-grade produce.",
      "Size: 120/130 per ounce – premium size.",
      "Storage: Ambient – preserves natural oils and premium texture.",
    ],
    description:
      "Exotic pine nuts harvested from the pristine forests of northern Pakistan. A delicacy prized for its unique flavor.",
    detailedDescription:
      "Pine nuts are harvested from pine cones in the remote forests of northern Pakistan. These premium nuts have a distinctive buttery flavor and are considered a delicacy worldwide. Rich in protein, healthy fats, and minerals, they're perfect for gourmet cooking and traditional recipes.",
    varieties: [
      {
        id: "banu-chilas-shell",
        name: "Banu-Chilas Pinenut in shell",
        description:
          "These pinenuts hail from Banu and Chilas in Gilgit-Baltistan and are among the most premium dry fruits in Pakistan. Known for their soft bite and buttery flavor, Banu-Chilas pinenuts are wild-harvested and sold with or without shell. Their natural sweetness makes them ideal for both snacking and garnishing sweets or pulao.",
        availability: createAvailability([8, 9, 10, 11]),
      },
      {
        id: "banu-chilas-shelled",
        name: "Banu-Chilas Pinenut",
        description:
          "These pinenuts hail from Banu and Chilas in Gilgit-Baltistan and are among the most premium dry fruits in Pakistan. Known for their soft bite and buttery flavor, Banu-Chilas pinenuts are wild-harvested and sold with or without shell. Their natural sweetness makes them ideal for both snacking and garnishing sweets or pulao.",
        availability: createAvailability([8, 9, 10, 11]),
      },
      {
        id: "waziri-pinenuts",
        name: "Waziri Pinenuts",
        description:
          "Waziri pinenuts are collected from the rugged Waziristan region and share a similar profile with Banu-Chilas varieties. Slightly firmer, they offer a rich, nutty flavor and high oil content. They're often roasted and used in traditional tribal dishes or sold as a delicacy.",
        availability: createAvailability([8, 9, 10, 11]),
      },
      {
        id: "waziri-shell",
        name: "Waziri Pinenuts in shell",
        description:
          "Waziri pinenuts are collected from the rugged Waziristan region and share a similar profile with Banu-Chilas varieties. Slightly firmer, they offer a rich, nutty flavor and high oil content. They're often roasted and used in traditional tribal dishes or sold as a delicacy.",
        availability: createAvailability([8, 9, 10, 11]),
      },
    ],
    origins: [
      { name: "Chilas", coordinates: [35.4167, 74.0833] },
      { name: "Bannu", coordinates: [32.9889, 70.6056] },
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
    heroImage: "/assets/images/latestphotos/Parachinar Peanut Shelled.png",
    coverPhoto: "/assets/images/coverPhotos/Peanuts.jpg",
    points: [
      "Unique & Rich: Full-bodied flavour, rich in protein, healthy fats, vitamins, and minerals.",
      "Nutrient Power: High-quality produce cultivated in clean, mountainous terrain.",
      "Culinary Use: Perfect for gourmet roasted snacks, luxury peanut butter, salad toppers, and artisan baking.",
      "Origin: Para Chinar – known for dense, nutrient-rich soils.",
      "Size: 45/50 per ounce ensuring consistency.",
      "Storage: Ambient – maintains crunch and flavour.",
    ],
    description:
      "Fresh, crunchy peanuts packed with protein and flavor. Available in various preparations to suit every taste.",
    detailedDescription:
      "Our peanuts are sourced from the best agricultural regions of Pakistan, known for producing high-quality groundnuts. Whether raw or roasted, shelled or unshelled, our peanuts deliver consistent quality and taste. High in protein, healthy fats, and essential nutrients.",
    varieties: [
      {
        id: "para-chinar-shell",
        name: "Para-Chinar Peanuts w Shell",
        description:
          "From the tribal belt of Para-Chinar in Kurram district, these peanuts are a traditional snack, roasted over open fire or coals. They have a smoky, savory flavor with a crunchy shell and are commonly sold in paper cones by street vendors. They're appreciated for their rustic, authentic taste and affordability.",
        availability: createAvailability([11, 12, 1, 2, 3, 4]),
      },
      {
        id: "para-chinar-shelled",
        name: "Para-Chinar Peanuts shelled",
        description:
          "From the tribal belt of Para-Chinar in Kurram district, these peanuts are a traditional snack, roasted over open fire or coals. They have a smoky, savory flavor with a crunchy shell and are commonly sold in paper cones by street vendors. They're appreciated for their rustic, authentic taste and affordability.",
        availability: createAvailability([11, 12, 1, 2, 3, 4]),
      },
      {
        id: "chakwali-roasted-shell",
        name: "Chaqwali Peanuts Roasted w Shell",
        description:
          "Chaqwali peanuts are similar in use and flavor to Para-Chinar types, but are typically a bit smaller and have a more intense roasted profile. Often roasted with salt, they are commonly consumed in colder months and during festive gatherings.",
        availability: createAvailability([11, 12, 1, 2, 3, 4]),
      },
      {
        id: "chakwali-roasted-shelled",
        name: "Chaqwali Peanuts Roasted shelled",
        description:
          "Chaqwali peanuts are similar in use and flavor to Para-Chinar types, but are typically a bit smaller and have a more intense roasted profile. Often roasted with salt, they are commonly consumed in colder months and during festive gatherings.",
        availability: createAvailability([11, 12, 1, 2, 3, 4]),
      },
    ],
    origins: [
      { name: "Parachinar", coordinates: [33.9019, 70.0719] },
      { name: "Chakwal", coordinates: [32.9328, 72.8522] },
      { name: "Attock", coordinates: [33.7667, 72.3667] },
    ],
    nutritionalInfo: "High in protein, healthy fats, and niacin",
    type: "Peanut",
  },
  ChakwaliPeanutsShelled: {
    id: "chakwali-peanuts-shelled",
    name: "Chakwali Peanuts",
    navLink:'ChakwaliPeanutsShelled',
    navName: "Chakwali",
    heroImage: "/assets/images/latestphotos/Chawali Peanut Shelled.png",
    coverPhoto: "/assets/images/coverPhotos/Peanuts.jpg",
    points: [
      "Sweet & Creamy: Naturally sweet with high nutrition from Pothohar region.",
      "Smooth Texture: Excellent for spreads and savory blends.",
      "Culinary Use: Creamy peanut butters, savory sauces, protein snacks, baking, and chocolates.",
      "Origin: Chakwal – Pothohar plateau, home to fine peanut farming.",
      "Size: 50/55 per ounce – refined consistency.",
      "Storage: Ambient – retains natural oil balance.",
    ],
    description:
      "Fresh, crunchy peanuts packed with protein and flavor. Available in various preparations to suit every taste.",
    detailedDescription:
      "Our peanuts are sourced from the best agricultural regions of Pakistan, known for producing high-quality groundnuts. Whether raw or roasted, shelled or unshelled, our peanuts deliver consistent quality and taste. High in protein, healthy fats, and essential nutrients.",
    varieties: [
      {
        id: "para-chinar-shell",
        name: "Para-Chinar Peanuts w Shell",
        description:
          "From the tribal belt of Para-Chinar in Kurram district, these peanuts are a traditional snack, roasted over open fire or coals. They have a smoky, savory flavor with a crunchy shell and are commonly sold in paper cones by street vendors. They're appreciated for their rustic, authentic taste and affordability.",
        availability: createAvailability([11, 12, 1, 2, 3, 4]),
      },
      {
        id: "para-chinar-shelled",
        name: "Para-Chinar Peanuts shelled",
        description:
          "From the tribal belt of Para-Chinar in Kurram district, these peanuts are a traditional snack, roasted over open fire or coals. They have a smoky, savory flavor with a crunchy shell and are commonly sold in paper cones by street vendors. They're appreciated for their rustic, authentic taste and affordability.",
        availability: createAvailability([11, 12, 1, 2, 3, 4]),
      },
      {
        id: "chakwali-roasted-shell",
        name: "Chaqwali Peanuts Roasted w Shell",
        description:
          "Chaqwali peanuts are similar in use and flavor to Para-Chinar types, but are typically a bit smaller and have a more intense roasted profile. Often roasted with salt, they are commonly consumed in colder months and during festive gatherings.",
        availability: createAvailability([11, 12, 1, 2, 3, 4]),
      },
      {
        id: "chakwali-roasted-shelled",
        name: "Chaqwali Peanuts Roasted shelled",
        description:
          "Chaqwali peanuts are similar in use and flavor to Para-Chinar types, but are typically a bit smaller and have a more intense roasted profile. Often roasted with salt, they are commonly consumed in colder months and during festive gatherings.",
        availability: createAvailability([11, 12, 1, 2, 3, 4]),
      },
    ],
    origins: [
      { name: "Parachinar", coordinates: [33.9019, 70.0719] },
      { name: "Chakwal", coordinates: [32.9328, 72.8522] },
      { name: "Attock", coordinates: [33.7667, 72.3667] },
    ],
    nutritionalInfo: "High in protein, healthy fats, and niacin",
    type: "Peanut",
  },
  ParaChinarPeanutsUnshelled: {
    id: "para-chinar-peanuts-unshelled",
    name: "Para-Chinar Peanuts",
    navLink:'ParaChinarPeanutsUnshelled',
    navName: "Para-Chinar",
    heroImage: "/assets/images/latestphotos/Para chinar Peanut.png",
    coverPhoto: "/assets/images/coverPhotos/Peanuts.jpg",
    points: [
      "Unique & Rich: Full-bodied flavour, rich in protein, healthy fats, vitamins, and minerals.",
      "Nutrient Power: High-quality produce cultivated in clean, mountainous terrain.",
      "Culinary Use: Perfect for gourmet roasted snacks, luxury peanut butter, salad toppers, and artisan baking.",
      "Origin: Para Chinar – known for dense, nutrient-rich soils.",
      "Size: 45/50 per ounce ensuring consistency.",
      "Storage: Ambient – maintains crunch and flavour.",
    ],
    description:
      "Fresh, crunchy peanuts packed with protein and flavor. Available in various preparations to suit every taste.",
    detailedDescription:
      "Our peanuts are sourced from the best agricultural regions of Pakistan, known for producing high-quality groundnuts. Whether raw or roasted, shelled or unshelled, our peanuts deliver consistent quality and taste. High in protein, healthy fats, and essential nutrients.",
    varieties: [
      {
        id: "para-chinar-shell",
        name: "Para-Chinar Peanuts w Shell",
        description:
          "From the tribal belt of Para-Chinar in Kurram district, these peanuts are a traditional snack, roasted over open fire or coals. They have a smoky, savory flavor with a crunchy shell and are commonly sold in paper cones by street vendors. They're appreciated for their rustic, authentic taste and affordability.",
        availability: createAvailability([11, 12, 1, 2, 3, 4]),
      },
      {
        id: "para-chinar-shelled",
        name: "Para-Chinar Peanuts shelled",
        description:
          "From the tribal belt of Para-Chinar in Kurram district, these peanuts are a traditional snack, roasted over open fire or coals. They have a smoky, savory flavor with a crunchy shell and are commonly sold in paper cones by street vendors. They're appreciated for their rustic, authentic taste and affordability.",
        availability: createAvailability([11, 12, 1, 2, 3, 4]),
      },
      {
        id: "chakwali-roasted-shell",
        name: "Chaqwali Peanuts Roasted w Shell",
        description:
          "Chaqwali peanuts are similar in use and flavor to Para-Chinar types, but are typically a bit smaller and have a more intense roasted profile. Often roasted with salt, they are commonly consumed in colder months and during festive gatherings.",
        availability: createAvailability([11, 12, 1, 2, 3, 4]),
      },
      {
        id: "chakwali-roasted-shelled",
        name: "Chaqwali Peanuts Roasted shelled",
        description:
          "Chaqwali peanuts are similar in use and flavor to Para-Chinar types, but are typically a bit smaller and have a more intense roasted profile. Often roasted with salt, they are commonly consumed in colder months and during festive gatherings.",
        availability: createAvailability([11, 12, 1, 2, 3, 4]),
      },
    ],
    origins: [
      { name: "Parachinar", coordinates: [33.9019, 70.0719] },
      { name: "Chakwal", coordinates: [32.9328, 72.8522] },
      { name: "Attock", coordinates: [33.7667, 72.3667] },
    ],
    nutritionalInfo: "High in protein, healthy fats, and niacin",
    type: "Peanut",
  },
  ChakwaliPeanutsUnshelled: {
    id: "chakwali-peanuts-unshelled",
    name: "Chakwali Peanuts",
    navLink:'ChakwaliPeanutsUnshelled',
    navName: "Chakwali",
    heroImage: "/assets/images/latestphotos/Chakwali Peanut.png",
    coverPhoto: "/assets/images/coverPhotos/Peanuts.jpg",
    points: [
      "Sweet & Creamy: Naturally sweet with high nutrition from Pothohar region.",
      "Smooth Texture: Excellent for spreads and savory blends.",
      "Culinary Use: Creamy peanut butters, savory sauces, protein snacks, baking, and chocolates.",
      "Origin: Chakwal – Pothohar plateau, home to fine peanut farming.",
      "Size: 50/55 per ounce – refined consistency.",
      "Storage: Ambient – retains natural oil balance.",
    ],
    description:
      "Fresh, crunchy peanuts packed with protein and flavor. Available in various preparations to suit every taste.",
    detailedDescription:
      "Our peanuts are sourced from the best agricultural regions of Pakistan, known for producing high-quality groundnuts. Whether raw or roasted, shelled or unshelled, our peanuts deliver consistent quality and taste. High in protein, healthy fats, and essential nutrients.",
    varieties: [
      {
        id: "para-chinar-shell",
        name: "Para-Chinar Peanuts w Shell",
        description:
          "From the tribal belt of Para-Chinar in Kurram district, these peanuts are a traditional snack, roasted over open fire or coals. They have a smoky, savory flavor with a crunchy shell and are commonly sold in paper cones by street vendors. They're appreciated for their rustic, authentic taste and affordability.",
        availability: createAvailability([11, 12, 1, 2, 3, 4]),
      },
      {
        id: "para-chinar-shelled",
        name: "Para-Chinar Peanuts shelled",
        description:
          "From the tribal belt of Para-Chinar in Kurram district, these peanuts are a traditional snack, roasted over open fire or coals. They have a smoky, savory flavor with a crunchy shell and are commonly sold in paper cones by street vendors. They're appreciated for their rustic, authentic taste and affordability.",
        availability: createAvailability([11, 12, 1, 2, 3, 4]),
      },
      {
        id: "chakwali-roasted-shell",
        name: "Chaqwali Peanuts Roasted w Shell",
        description:
          "Chaqwali peanuts are similar in use and flavor to Para-Chinar types, but are typically a bit smaller and have a more intense roasted profile. Often roasted with salt, they are commonly consumed in colder months and during festive gatherings.",
        availability: createAvailability([11, 12, 1, 2, 3, 4]),
      },
      {
        id: "chakwali-roasted-shelled",
        name: "Chaqwali Peanuts Roasted shelled",
        description:
          "Chaqwali peanuts are similar in use and flavor to Para-Chinar types, but are typically a bit smaller and have a more intense roasted profile. Often roasted with salt, they are commonly consumed in colder months and during festive gatherings.",
        availability: createAvailability([11, 12, 1, 2, 3, 4]),
      },
    ],
    origins: [
      { name: "Parachinar", coordinates: [33.9019, 70.0719] },
      { name: "Chakwal", coordinates: [32.9328, 72.8522] },
      { name: "Attock", coordinates: [33.7667, 72.3667] },
    ],
    nutritionalInfo: "High in protein, healthy fats, and niacin",
    type: "Peanut",
  },

  FaraKaKalaChannaShelled: {
    id: "fara-ka-kala-channa-shelled",
    name: "Fara Ka Kala Channa",
    navLink:'FaraKaKalaChannaShelled',
    navName: "Fara Ka",
    coverPhoto: "/assets/images/coverPhotos/kalla channa.jpg",
    points: [
      "Bright & Clean: Softer texture and lighter tone with versatile appeal.",
      "Rich & Healthy: Nutty, high in protein, ideal for modern and traditional recipes.",
      "Culinary Use: Savory high-protein snacks, hearty stews, soups, and slow-cooked Mediterranean dishes.",
      "Origin: Layyah – known for clean, consistent chickpea yields.",
      "Size: 150/155 per ounce – consistent grading.",
      "Storage: Ambient – ensures freshness and firmness.",
    ],
    heroImage: "/assets/images/latestphotos/Faraka Channa Shelled.png",
    description:
      "Traditional black chickpeas known for their earthy flavor, firm bite, and excellent nutritional profile.",
    detailedDescription:
      "Fara Ka Kala Channa is a traditional variety of black chickpeas prized for its dense texture and deep, nutty taste. It holds shape wonderfully when boiled, making it ideal for chaats, curries, and slow-cooked stews. Naturally rich in plant protein, fiber, iron, and folate, it provides sustained energy and supports a balanced diet.",
    varieties: [
      {
        id: "fara-ka-kala-channa",
        name: "Fara Ka Kala Channa",
        description:
          "Smaller, darker grains with a firmer bite and concentrated flavor. Great for boiling, roasting, or pressure-cooking without turning mushy.",
        availability: createAvailability([11, 12, 1, 2, 3, 4]),
      },
    ],
    origins: [
      { name: "Chakwal", coordinates: [32.9328, 72.8522] },
      { name: "Bhakkar", coordinates: [31.6333, 71.0667] },
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
    heroImage: "/assets/images/latestphotos/Khilay Channa Shelled.png",
    coverPhoto: "/assets/images/coverPhotos/kalla channa.jpg",
    points: [
      "Rustic & Nutty: Brownish hue, firm bite, and rich, earthy flavour.",
      "Wholesome Taste: High satiety and traditional appeal.",
      "Culinary Use: Salads, mezze spreads, gourmet snack mixes, and healthy baking.",
      "Origin: Thal – region recognized for traditional pulse farming.",
      "Size: 145/150 per ounce for uniform grains.",
      "Storage: Ambient – preserves natural firmness and nutrition.",
    ],

    description:
      "Black chickpeas with a fuller grain and softer cook, perfect for chaats, pulao, and home-style gravies.",
    detailedDescription:
      "Khilay Kala Channa features a slightly larger grain that cooks to a pleasantly soft, creamy center while retaining a wholesome chew. Its balanced, savory profile pairs well with classic South Asian spices, making it a favorite for festive chaats, pulao, and everyday gravies.",
    varieties: [
      {
        id: "khilay-kala-channa",
        name: "Khilay Kala Channa",
        description:
          "Slightly larger grains that hydrate well and cook evenly, yielding a softer texture ideal for chaats and gravies.",
        availability: createAvailability([11, 12, 1, 2, 3, 4]),
      },
    ],
    origins: [
      { name: "Chakwal", coordinates: [32.9328, 72.8522] },
      { name: "Bhakkar", coordinates: [31.6333, 71.0667] },
      { name: "Layyah", coordinates: [30.9676, 70.9444] },
    ],
    nutritionalInfo: "Rich in protein, dietary fiber, and essential minerals",
    type: "Chickpea",
  },

  FaraKaKalaChannaUnshelled: {
    id: "fara-ka-kala-channa-unshelled",
    name: "Fara Ka Kala Channa",
    navName: "Fara Ka",
    navLink:'FaraKaKalaChannaUnshelled',
    coverPhoto: "/assets/images/coverPhotos/kalla channa.jpg",
    points: [
      "Bright & Clean: Softer texture and lighter tone with versatile appeal.",
      "Rich & Healthy: Nutty, high in protein, ideal for modern and traditional recipes.",
      "Culinary Use: Savory high-protein snacks, hearty stews, soups, and slow-cooked Mediterranean dishes.",
      "Origin: Layyah – known for clean, consistent chickpea yields.",
      "Size: 150/155 per ounce – consistent grading.",
      "Storage: Ambient – ensures freshness and firmness.",
    ],
    heroImage: "/assets/images/latestphotos/Faraka Chanay.png",
    description:
      "Traditional black chickpeas known for their earthy flavor, firm bite, and excellent nutritional profile.",
    detailedDescription:
      "Fara Ka Kala Channa is a traditional variety of black chickpeas prized for its dense texture and deep, nutty taste. It holds shape wonderfully when boiled, making it ideal for chaats, curries, and slow-cooked stews. Naturally rich in plant protein, fiber, iron, and folate, it provides sustained energy and supports a balanced diet.",
    varieties: [
      {
        id: "fara-ka-kala-channa",
        name: "Fara Ka Kala Channa",
        description:
          "Smaller, darker grains with a firmer bite and concentrated flavor. Great for boiling, roasting, or pressure-cooking without turning mushy.",
        availability: createAvailability([11, 12, 1, 2, 3, 4]),
      },
    ],
    origins: [
      { name: "Chakwal", coordinates: [32.9328, 72.8522] },
      { name: "Bhakkar", coordinates: [31.6333, 71.0667] },
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
    heroImage: "/assets/images/latestphotos/Khilay Channy.png",
    coverPhoto: "/assets/images/coverPhotos/kalla channa.jpg",
    points: [
      "Rustic & Nutty: Brownish hue, firm bite, and rich, earthy flavour.",
      "Wholesome Taste: High satiety and traditional appeal.",
      "Culinary Use: Salads, mezze spreads, gourmet snack mixes, and healthy baking.",
      "Origin: Thal – region recognized for traditional pulse farming.",
      "Size: 145/150 per ounce for uniform grains.",
      "Storage: Ambient – preserves natural firmness and nutrition.",
    ],

    description:
      "Black chickpeas with a fuller grain and softer cook, perfect for chaats, pulao, and home-style gravies.",
    detailedDescription:
      "Khilay Kala Channa features a slightly larger grain that cooks to a pleasantly soft, creamy center while retaining a wholesome chew. Its balanced, savory profile pairs well with classic South Asian spices, making it a favorite for festive chaats, pulao, and everyday gravies.",
    varieties: [
      {
        id: "khilay-kala-channa",
        name: "Khilay Kala Channa",
        description:
          "Slightly larger grains that hydrate well and cook evenly, yielding a softer texture ideal for chaats and gravies.",
        availability: createAvailability([11, 12, 1, 2, 3, 4]),
      },
    ],
    origins: [
      { name: "Chakwal", coordinates: [32.9328, 72.8522] },
      { name: "Bhakkar", coordinates: [31.6333, 71.0667] },
      { name: "Layyah", coordinates: [30.9676, 70.9444] },
    ],
    nutritionalInfo: "Rich in protein, dietary fiber, and essential minerals",
    type: "Chickpea",
  },
  RegularFigs: {
    id: "regular-fig",
    name: "Regular Figs",
    navName: "Regular",
    navLink:'RegularFigs',
    coverPhoto: "/assets/images/coverPhotos/Fig.jpg",
    points: [
      "Sweet & Chewy: Classic flavour with soft texture and earthy undertone.",
      "Nutrient Rich: Naturally sun-dried and rich in minerals.",
      "Culinary Use: Perfect for granolas, smoothies, everyday baking, and home-style snacking.",
      "Origin: Chitral – traditional fig-growing region.",
      "Size: 4/5 per ounce ensuring size consistency.",
      "Storage: Ambient – maintains natural chewiness and aroma.",
    ],
    heroImage: "/assets/images/latestphotos/Fig Regular.png",
    description:
      "Sun-dried premium figs with natural sweetness and chewy texture. A healthy and delicious treat.",
    detailedDescription:
      "Our figs are carefully sun-dried to preserve their natural sweetness and nutritional benefits. These fiber-rich fruits are perfect for healthy snacking, baking, or adding to cereals and salads. Rich in fiber, potassium, and antioxidants, figs support digestive health and overall wellness.",
    varieties: [
      {
        id: "chitrali-regular",
        name: "Chitrali Regular",
        description:
          "Chitrali figs come from the mountainous Chitral region in northern Pakistan, where they are sun-dried naturally without additives. The regular variety is chewy and sweet with a slightly earthy undertone. They are nutrient-dense and commonly consumed in winter for energy and digestion.",
        availability: createAvailability([8, 9, 10, 11, 12, 1]),
      },
      {
        id: "chitrali-premium",
        name: "Chitrali Premium",
        description:
          "Chitrali figs come from the mountainous Chitral region in northern Pakistan, where they are sun-dried naturally without additives. The premium type is larger, plumper, and richer in flavor. They are nutrient-dense and commonly consumed in winter for energy and digestion.",
        availability: createAvailability([8, 9, 10, 11, 12, 1]),
      },
    ],
    origins: [
      { name: "Chitral", coordinates: [35.8518, 71.7864] },
      { name: "Dir", coordinates: [35.2058, 71.8786] },
    ],
    nutritionalInfo: "High in fiber, potassium, and antioxidants",
    type: "Fig",
  },
  PremiumFigs: {
    id: "premium-fig",
    name: "Premium Figs",
    navName: "Premium",
    navLink:'PremiumFigs',
    coverPhoto: "/assets/images/coverPhotos/Fig.jpg",
    heroImage: "/assets/images/latestphotos/Fig Premium.png",
    points: [
      "Sun-Dried & Sweet: Tree-sun dried for enhanced sweetness and gourmet appeal.",
      "Elegant Look: Lighter colour, larger size, and soft texture.",
      "Culinary Use: Fine confectionery, charcuterie, luxury pastries, and artisanal spreads.",
      "Origin: Chitral – ideal climate for premium figs.",
      "Size: 3/4 per ounce – larger and uniform.",
      "Storage: Ambient – retains sweetness and supple texture.",
    ],
    description:
      "Sun-dried premium figs with natural sweetness and chewy texture. A healthy and delicious treat.",
    detailedDescription:
      "Our figs are carefully sun-dried to preserve their natural sweetness and nutritional benefits. These fiber-rich fruits are perfect for healthy snacking, baking, or adding to cereals and salads. Rich in fiber, potassium, and antioxidants, figs support digestive health and overall wellness.",
    varieties: [
      {
        id: "chitrali-regular",
        name: "Chitrali Regular",
        description:
          "Chitrali figs come from the mountainous Chitral region in northern Pakistan, where they are sun-dried naturally without additives. The regular variety is chewy and sweet with a slightly earthy undertone. They are nutrient-dense and commonly consumed in winter for energy and digestion.",
        availability: createAvailability([8, 9, 10, 11, 12, 1]),
      },
      {
        id: "chitrali-premium",
        name: "Chitrali Premium",
        description:
          "Chitrali figs come from the mountainous Chitral region in northern Pakistan, where they are sun-dried naturally without additives. The premium type is larger, plumper, and richer in flavor. They are nutrient-dense and commonly consumed in winter for energy and digestion.",
        availability: createAvailability([8, 9, 10, 11, 12, 1]),
      },
    ],
    origins: [
      { name: "Chitral", coordinates: [35.8518, 71.7864] },
      { name: "Dir", coordinates: [35.2058, 71.8786] },
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
      "Size: 6/7 per ounce ensuring quality consistency.",
      "Storage: Ambient – maintains vibrant colour and texture.",
    ],
    heroImage: "/assets/images/latestphotos/Kishta Apricot.png",
    coverPhoto: "/assets/images/coverPhotos/Apricot.avif",
    description:
      "Premium dried apricots from the valleys of northern Pakistan. Sweet, nutritious, and naturally preserved.",
    detailedDescription:
      "Our apricots come from the pristine valleys of northern Pakistan, where the climate produces fruits of exceptional quality. These sun-dried apricots retain their natural sweetness and are packed with vitamins A and C, fiber, and antioxidants. Perfect for healthy snacking and culinary applications.",
    varieties: [
      {
        id: "naag-seed",
        name: "Naag w seed",
        description:
          "These apricots are dried whole, with the pit left intact, resulting in a smaller, denser fruit that offers a chewy, compact texture and an intensely concentrated, almond-like sweetness thanks to the nutty flavor imparted by the pit.",
        availability: createAvailability([6, 7, 8, 9, 10]),
      },
      {
        id: "kishta-seedless",
        name: "Kishta without seed",
        description:
          "These apricots are carefully halved and sun-dried, achieving a moderately sized piece that maintains a well-balanced moisture level—neither too dry nor too soft. This method preserves their natural sweetness and chewy texture, offering a satisfying bite that's tender yet firm, with a sweet and slightly tart apricot flavor.",
        availability: createAvailability([6, 7, 8, 9, 10]),
      },
      {
        id: "gol-seedless",
        name: "Gol without seed",
        description:
          "These apricots are harvested at peak ripeness, then halved and pitted before being dried, resulting in large, round, and somewhat flattened pieces. Their generous size and soft texture make them exceptionally tender, offering a plush, melt-in-your-mouth experience while retaining a luscious, honeyed sweetness that's richer than whole-dried apricots.",
        availability: createAvailability([6, 7, 8, 9, 10]),
      },
    ],
    origins: [
      { name: "Hunza", coordinates: [36.3167, 74.65] },
      { name: "Skardu", coordinates: [35.2971, 75.6333] },
      { name: "Gilgit", coordinates: [35.92, 74.31] },
    ],
    nutritionalInfo: "Rich in vitamin A, vitamin C, and fiber",
    type: "Apricot",
  },
  GolApricots: {
    id: "gol-apricots",
    name: "Gol Apricots",
    navName: "Gol",
    navLink:'GolApricots',
    heroImage: "/assets/images/latestphotos/Gol Apricot.png",
    coverPhoto: "/assets/images/coverPhotos/Apricot.avif",
    points: [
      "Golden & Soft: Round, flat, and pitted with bright golden hue.",
      "Sweet & Tender: Large, soft, and rich in flavour.",
      "Culinary Use: Granolas, smoothies, everyday snacks, baking, and trail mixes.",
      "Origin: Gilgit – prime growing region for golden apricots.",
      "Size: 5/6 per ounce – uniform and plump.",
      "Storage: Ambient – retains sweetness and moisture.",
    ],
    description:
      "Premium dried apricots from the valleys of northern Pakistan. Sweet, nutritious, and naturally preserved.",
    detailedDescription:
      "Our apricots come from the pristine valleys of northern Pakistan, where the climate produces fruits of exceptional quality. These sun-dried apricots retain their natural sweetness and are packed with vitamins A and C, fiber, and antioxidants. Perfect for healthy snacking and culinary applications.",
    varieties: [
      {
        id: "naag-seed",
        name: "Naag w seed",
        description:
          "These apricots are dried whole, with the pit left intact, resulting in a smaller, denser fruit that offers a chewy, compact texture and an intensely concentrated, almond-like sweetness thanks to the nutty flavor imparted by the pit.",
        availability: createAvailability([6, 7, 8, 9, 10]),
      },
      {
        id: "kishta-seedless",
        name: "Kishta without seed",
        description:
          "These apricots are carefully halved and sun-dried, achieving a moderately sized piece that maintains a well-balanced moisture level—neither too dry nor too soft. This method preserves their natural sweetness and chewy texture, offering a satisfying bite that's tender yet firm, with a sweet and slightly tart apricot flavor.",
        availability: createAvailability([6, 7, 8, 9, 10]),
      },
      {
        id: "gol-seedless",
        name: "Gol without seed",
        description:
          "These apricots are harvested at peak ripeness, then halved and pitted before being dried, resulting in large, round, and somewhat flattened pieces. Their generous size and soft texture make them exceptionally tender, offering a plush, melt-in-your-mouth experience while retaining a luscious, honeyed sweetness that's richer than whole-dried apricots.",
        availability: createAvailability([6, 7, 8, 9, 10]),
      },
    ],
    origins: [
      { name: "Hunza", coordinates: [36.3167, 74.65] },
      { name: "Skardu", coordinates: [35.2971, 75.6333] },
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
    heroImage: "/assets/images/latestphotos/Naag Apricot.png",
    coverPhoto: "/assets/images/coverPhotos/Apricot.avif",
    points: [
      "Wholesome & Nutrient Dense: Packed with healthy fats, proteins, and vitamin B17.",
      "Naturally Rich: High in essential nutrients and energy.",
      "Culinary Use: Ideal for energy snacks, sports nutrition blends, immunity mixes, and health supplements.",
      "Origin: Hunza – region known for naturally nutrient-packed fruits.",
      "Size: 2/3 per ounce ensuring premium grading.",
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
        description:
          "These apricots are dried whole, with the pit left intact, resulting in a smaller, denser fruit that offers a chewy, compact texture and an intensely concentrated, almond-like sweetness thanks to the nutty flavor imparted by the pit.",
        availability: createAvailability([6, 7, 8, 9, 10]),
      },
      {
        id: "kishta-seedless",
        name: "Kishta without seed",
        description:
          "These apricots are carefully halved and sun-dried, achieving a moderately sized piece that maintains a well-balanced moisture level—neither too dry nor too soft. This method preserves their natural sweetness and chewy texture, offering a satisfying bite that's tender yet firm, with a sweet and slightly tart apricot flavor.",
        availability: createAvailability([6, 7, 8, 9, 10]),
      },
      {
        id: "gol-seedless",
        name: "Gol without seed",
        description:
          "These apricots are harvested at peak ripeness, then halved and pitted before being dried, resulting in large, round, and somewhat flattened pieces. Their generous size and soft texture make them exceptionally tender, offering a plush, melt-in-your-mouth experience while retaining a luscious, honeyed sweetness that's richer than whole-dried apricots.",
        availability: createAvailability([6, 7, 8, 9, 10]),
      },
    ],
    origins: [
      { name: "Hunza", coordinates: [36.3167, 74.65] },
      { name: "Skardu", coordinates: [35.2971, 75.6333] },
      { name: "Gilgit", coordinates: [35.92, 74.31] },
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
