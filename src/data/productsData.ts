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
}

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

// Helper function to create availability data
const createAvailability = (availableMonths: number[]): AvailabilityMonth[] => {
  return months.map((month, index) => ({
    month,
    available: availableMonths.includes(index + 1)
  }));
};

export const productsData: Record<string, Product> = {
  almonds: {
    id: 'almonds',
    name: 'Almonds',
    heroImage: '/api/placeholder/800/400',
    description: 'Premium quality almonds sourced from the finest orchards of Pakistan. Rich in protein, healthy fats, and essential nutrients.',
    detailedDescription: 'Our almonds are carefully selected from the best orchards across Pakistan. These nutrient-dense nuts are perfect for snacking, baking, or adding to your favorite recipes. Rich in vitamin E, magnesium, and healthy monounsaturated fats, almonds support heart health and provide sustained energy throughout the day.',
    varieties: [
      {
        id: 'kambri-blanched',
        name: 'Kambri Almonds (Blanche)',
        description: 'Premium blanched almonds with smooth texture and rich flavor, perfect for premium confectionery and direct consumption.',
        availability: createAvailability([9, 8, 7, 12, 1, 2])
      },
      {
        id: 'kalamdana',
        name: 'Kalamdana Almonds',
        description: 'Traditional variety known for its distinctive taste and crunchy texture, highly valued in local markets.',
        availability: createAvailability([9, 6, 11, 12,])
      },
      {
        id: 'said-kheli-white',
        name: 'Said-kheli (White Skin) Almonds',
        description: 'Natural white-skinned almonds with exceptional taste, ideal for both raw consumption and processing.',
        availability: createAvailability([9, 10, 11, 12, 1, 2])
      }
    ],
    origins: [
      { name: 'Quetta', coordinates: [30.1798, 67.0011] },
      { name: 'Kalat', coordinates: [29.0233, 66.5897] },
      { name: 'Mastung', coordinates: [29.7969, 66.8453] }
    ],
    nutritionalInfo: 'High in protein, vitamin E, magnesium, and healthy fats'
  },

  raisin: {
    id: 'raisin',
    name: 'Raisin',
    heroImage: '/api/placeholder/800/400',
    description: 'Sun-dried premium raisins with natural sweetness and rich flavor. Perfect for snacking and culinary applications.',
    detailedDescription: 'Our raisins are naturally sun-dried to preserve their nutritional value and enhance their natural sweetness. These golden gems are packed with antioxidants, fiber, and essential minerals. Whether enjoyed as a healthy snack or used in baking and cooking, our raisins deliver exceptional quality and taste.',
    varieties: [
      {
        id: 'peela-kandhari',
        name: 'Peela Kandhari',
        description: 'Golden yellow raisins known for their sweet taste and soft texture, premium variety from Kandahar region.',
        availability: createAvailability([8, 9, 10, 11, 12, 1, 2, 3])
      },
      {
        id: 'sabz-chamman',
        name: 'Sabz Chamman',
        description: 'Green-colored raisins with unique flavor profile, specially processed to maintain their natural color.',
        availability: createAvailability([8, 9, 10, 11, 12, 1, 2, 3])
      },
      {
        id: 'kala-pishin',
        name: 'Kala Pishin',
        description: 'Dark raisins with intense flavor and chewy texture, perfect for traditional recipes and direct consumption.',
        availability: createAvailability([8, 9, 10, 11, 12, 1, 2, 3])
      }
    ],
    origins: [
      { name: 'Pishin', coordinates: [30.5833, 66.9833] },
      { name: 'Kandahar', coordinates: [31.6137, 65.7372] },
      { name: 'Chaman', coordinates: [30.9167, 66.4500] }
    ],
    nutritionalInfo: 'Rich in antioxidants, fiber, and natural sugars'
  },

  pistachio: {
    id: 'pistachio',
    name: 'Pistachio',
    heroImage: '/api/placeholder/800/400',
    description: 'World-renowned Pakistani pistachios with exceptional taste and quality. A perfect blend of flavor and nutrition.',
    detailedDescription: 'Pakistan produces some of the world\'s finest pistachios, known for their distinctive flavor and superior quality. Our pistachios are carefully harvested and processed to maintain their natural taste and nutritional benefits. Rich in protein, healthy fats, and antioxidants, they make an excellent healthy snack.',
    varieties: [
      {
        id: 'ziarat-pista',
        name: 'Ziarat Pista',
        description: 'Premium shelled pistachios from Ziarat region, known for their large size and exceptional flavor.',
        availability: createAvailability([9, 10, 11, 12, 1])
      },
      {
        id: 'ziarat-pista-shell',
        name: 'Ziarat Pista w shell',
        description: 'Natural pistachios in shell from Ziarat, perfect for traditional consumption and gifting.',
        availability: createAvailability([9, 10, 11, 12, 1])
      },
      {
        id: 'killa-saifullah-pista',
        name: 'Killa Saifullah Pista',
        description: 'High-quality shelled pistachios from Killa Saifullah district, prized for their consistent quality.',
        availability: createAvailability([9, 10, 11, 12, 1])
      },
      {
        id: 'killa-saifullah-roasted',
        name: 'Killa Saifullah Pista Roasted with Shell',
        description: 'Roasted pistachios in shell with enhanced flavor, perfect for snacking and entertainment.',
        availability: createAvailability([9, 10, 11, 12, 1])
      }
    ],
    origins: [
      { name: 'Ziarat', coordinates: [30.3811, 67.7261] },
      { name: 'Killa Saifullah', coordinates: [30.7056, 68.7444] },
      { name: 'Sherani', coordinates: [30.2264, 68.9383] }
    ],
    nutritionalInfo: 'High in protein, healthy fats, and antioxidants'
  },

  walnuts: {
    id: 'walnuts',
    name: 'Walnuts',
    heroImage: '/api/placeholder/800/400',
    description: 'Premium walnuts from the northern regions of Pakistan, known for their rich taste and excellent nutritional profile.',
    detailedDescription: 'Our walnuts come from the pristine valleys of northern Pakistan, where the climate and soil conditions produce nuts of exceptional quality. These brain-healthy nuts are rich in omega-3 fatty acids, protein, and antioxidants. Perfect for snacking, baking, or adding to salads and cereals.',
    varieties: [
      {
        id: 'swat-dir-shell',
        name: 'Swat-Dir Walnut w shell',
        description: 'Natural walnuts in shell from Swat and Dir regions, known for their large size and rich flavor.',
        availability: createAvailability([10, 11, 12, 1, 2, 3])
      },
      {
        id: 'swat-dir-shelled',
        name: 'Swat-Dir Walnut',
        description: 'Premium shelled walnuts from Swat-Dir region, carefully processed to maintain freshness.',
        availability: createAvailability([10, 11, 12, 1, 2, 3])
      },
      {
        id: 'kaghzi-walnut',
        name: 'Kaghzi Walnut',
        description: 'Thin-shelled variety (paper-thin shell) that\'s easy to crack, premium quality kernels.',
        availability: createAvailability([10, 11, 12, 1, 2, 3])
      },
      {
        id: 'kaghzi-shell',
        name: 'Kaghzi Walnut w Shell',
        description: 'Paper-thin shelled walnuts, perfect for those who prefer cracking their own nuts.',
        availability: createAvailability([10, 11, 12, 1, 2, 3])
      }
    ],
    origins: [
      { name: 'Swat', coordinates: [35.2227, 72.4258] },
      { name: 'Dir', coordinates: [35.2058, 71.8786] },
      { name: 'Chitral', coordinates: [35.8518, 71.7864] }
    ],
    nutritionalInfo: 'Rich in omega-3 fatty acids, protein, and antioxidants'
  },

  pinenuts: {
    id: 'pinenuts',
    name: 'Pine Nuts',
    heroImage: '/api/placeholder/800/400',
    description: 'Exotic pine nuts harvested from the pristine forests of northern Pakistan. A delicacy prized for its unique flavor.',
    detailedDescription: 'Pine nuts are harvested from pine cones in the remote forests of northern Pakistan. These premium nuts have a distinctive buttery flavor and are considered a delicacy worldwide. Rich in protein, healthy fats, and minerals, they\'re perfect for gourmet cooking and traditional recipes.',
    varieties: [
      {
        id: 'banu-chilas-shell',
        name: 'Banu-Chilas Pinenut in shell',
        description: 'Natural pine nuts in shell from Banu-Chilas region, traditional harvesting methods ensure premium quality.',
        availability: createAvailability([8, 9, 10, 11])
      },
      {
        id: 'banu-chilas-shelled',
        name: 'Banu-Chilas Pinenut',
        description: 'Carefully shelled pine nuts from Banu-Chilas, ready for culinary use and direct consumption.',
        availability: createAvailability([8, 9, 10, 11])
      },
      {
        id: 'waziri-pinenuts',
        name: 'Waziri Pinenuts',
        description: 'Premium shelled pine nuts from Waziristan region, known for their exceptional taste and quality.',
        availability: createAvailability([8, 9, 10, 11])
      },
      {
        id: 'waziri-shell',
        name: 'Waziri Pinenuts in shell',
        description: 'Natural pine nuts in shell from Waziristan, traditionally harvested from wild pine forests.',
        availability: createAvailability([8, 9, 10, 11])
      }
    ],
    origins: [
      { name: 'Chilas', coordinates: [35.4167, 74.0833] },
      { name: 'Bannu', coordinates: [32.9889, 70.6056] },
      { name: 'Waziristan', coordinates: [32.3617, 69.4306] }
    ],
    nutritionalInfo: 'High in protein, healthy fats, and essential minerals'
  },

  hazelnuts: {
    id: 'hazelnuts',
    name: 'Hazelnuts',
    heroImage: '/api/placeholder/800/400',
    description: 'Premium hazelnuts with rich, buttery flavor. Perfect for confectionery and gourmet applications.',
    detailedDescription: 'Our hazelnuts are sourced from select regions known for producing nuts with exceptional flavor and texture. These versatile nuts are perfect for both sweet and savory applications, from chocolate making to salad toppings. Rich in healthy fats, vitamin E, and minerals.',
    varieties: [
      {
        id: 'fara-ka-hazlenut',
        name: 'Fara ka Hazlenut',
        description: 'Premium hazelnuts with shell from Fara region, known for their rich flavor and perfect size.',
        availability: createAvailability([9, 10, 11, 12, 1])
      },
      {
        id: 'fara-ka-peeled',
        name: 'Fara ka Hazlenut peeled',
        description: 'Carefully peeled hazelnuts from Fara region, ready for immediate use in recipes and snacking.',
        availability: createAvailability([9, 10, 11, 12, 1])
      },
      {
        id: 'khilay-hazlenut',
        name: 'Khilay Hazlenut',
        description: 'Traditional variety from Khilay region, prized for its distinctive taste and texture.',
        availability: createAvailability([9, 10, 11, 12, 1])
      },
      {
        id: 'khilay-peeled',
        name: 'Khilay Hazlenut peeled',
        description: 'Peeled hazelnuts from Khilay region, perfect for confectionery and premium applications.',
        availability: createAvailability([9, 10, 11, 12, 1])
      }
    ],
    origins: [
      { name: 'Fara', coordinates: [34.0522, 71.5269] },
      { name: 'Khilay', coordinates: [34.1897, 71.4297] },
      { name: 'Kurram', coordinates: [33.9047, 70.0778] }
    ],
    nutritionalInfo: 'Rich in vitamin E, healthy fats, and minerals'
  },

  peanuts: {
    id: 'peanuts',
    name: 'Peanuts',
    heroImage: '/api/placeholder/800/400',
    description: 'Fresh, crunchy peanuts packed with protein and flavor. Available in various preparations to suit every taste.',
    detailedDescription: 'Our peanuts are sourced from the best agricultural regions of Pakistan, known for producing high-quality groundnuts. Whether raw or roasted, shelled or unshelled, our peanuts deliver consistent quality and taste. High in protein, healthy fats, and essential nutrients.',
    varieties: [
      {
        id: 'para-chinar-shell',
        name: 'Para-Chinar Peanuts w Shell',
        description: 'Natural peanuts in shell from Para-Chinar region, perfect for traditional roasting and snacking.',
        availability: createAvailability([11, 12, 1, 2, 3, 4])
      },
      {
        id: 'para-chinar-shelled',
        name: 'Para-Chinar Peanuts shelled',
        description: 'Carefully shelled peanuts from Para-Chinar, ready for cooking and direct consumption.',
        availability: createAvailability([11, 12, 1, 2, 3, 4])
      },
      {
        id: 'chakwali-roasted-shell',
        name: 'Chakwali Peanuts Roasted w Shell',
        description: 'Pre-roasted peanuts in shell from Chakwal region, enhanced flavor and extended shelf life.',
        availability: createAvailability([11, 12, 1, 2, 3, 4])
      },
      {
        id: 'chakwali-roasted-shelled',
        name: 'Chakwali Peanuts Roasted shelled',
        description: 'Roasted and shelled peanuts from Chakwal, perfect for snacking and recipe use.',
        availability: createAvailability([11, 12, 1, 2, 3, 4])
      }
    ],
    origins: [
      { name: 'Parachinar', coordinates: [33.9019, 70.0719] },
      { name: 'Chakwal', coordinates: [32.9328, 72.8522] },
      { name: 'Attock', coordinates: [33.7667, 72.3667] }
    ],
    nutritionalInfo: 'High in protein, healthy fats, and niacin'
  },

  fig: {
    id: 'fig',
    name: 'Fig',
    heroImage: '/api/placeholder/800/400',
    description: 'Sun-dried premium figs with natural sweetness and chewy texture. A healthy and delicious treat.',
    detailedDescription: 'Our figs are carefully sun-dried to preserve their natural sweetness and nutritional benefits. These fiber-rich fruits are perfect for healthy snacking, baking, or adding to cereals and salads. Rich in fiber, potassium, and antioxidants, figs support digestive health and overall wellness.',
    varieties: [
      {
        id: 'chitrali-regular',
        name: 'Chitrali Regular',
        description: 'Standard quality figs from Chitral region, perfect for everyday consumption and cooking applications.',
        availability: createAvailability([8, 9, 10, 11, 12, 1])
      },
      {
        id: 'chitrali-premium',
        name: 'Chitrali Premium',
        description: 'Premium grade figs from Chitral, larger size and superior taste, perfect for gifting and special occasions.',
        availability: createAvailability([8, 9, 10, 11, 12, 1])
      }
    ],
    origins: [
      { name: 'Chitral', coordinates: [35.8518, 71.7864] },
      { name: 'Dir', coordinates: [35.2058, 71.8786] }
    ],
    nutritionalInfo: 'High in fiber, potassium, and antioxidants'
  },

  apricot: {
    id: 'apricot',
    name: 'Apricot',
    heroImage: '/api/placeholder/800/400',
    description: 'Premium dried apricots from the valleys of northern Pakistan. Sweet, nutritious, and naturally preserved.',
    detailedDescription: 'Our apricots come from the pristine valleys of northern Pakistan, where the climate produces fruits of exceptional quality. These sun-dried apricots retain their natural sweetness and are packed with vitamins A and C, fiber, and antioxidants. Perfect for healthy snacking and culinary applications.',
    varieties: [
      {
        id: 'naag-seed',
        name: 'Naag w seed',
        description: 'Traditional apricots with seed intact, allowing for longer storage and enhanced flavor development.',
        availability: createAvailability([6, 7, 8, 9, 10])
      },
      {
        id: 'kishta-seedless',
        name: 'Kishta without seed',
        description: 'Premium seedless apricots (Kishta variety), soft texture and intense sweetness, ready to eat.',
        availability: createAvailability([6, 7, 8, 9, 10])
      },
      {
        id: 'gol-seedless',
        name: 'Gol without seed',
        description: 'Round variety seedless apricots, perfect size and sweetness for direct consumption and recipes.',
        availability: createAvailability([6, 7, 8, 9, 10])
      }
    ],
    origins: [
      { name: 'Hunza', coordinates: [36.3167, 74.6500] },
      { name: 'Skardu', coordinates: [35.2971, 75.6333] },
      { name: 'Gilgit', coordinates: [35.9200, 74.3100] }
    ],
    nutritionalInfo: 'Rich in vitamin A, vitamin C, and fiber'
  }
};

export const allProducts = Object.values(productsData);

// Helper function to get product by ID
export const getProductById = (id: string): Product | undefined => {
  return productsData[id];
};

// Helper function to get all product names for navigation
export const getAllProductNames = (): string[] => {
  return Object.keys(productsData);
}; 