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
  imageNoBg?: string; // Optional, used for products with no background image
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
    heroImage: '/assets/images/Kambri Almonds.png',
    imageNoBg: '/assets/images/Kambri_Almonds-removebg.png',
    description: 'Premium quality almonds sourced from the finest orchards of Pakistan. Rich in protein, healthy fats, and essential nutrients.',
    detailedDescription: 'Our almonds are carefully selected from the best orchards across Pakistan. These nutrient-dense nuts are perfect for snacking, baking, or adding to your favorite recipes. Rich in vitamin E, magnesium, and healthy monounsaturated fats, almonds support heart health and provide sustained energy throughout the day.',
    varieties: [
      {
        id: 'kambri-blanched',
        name: 'Kambri Almonds (Blanche)',
        description: 'Kambri almonds, also known as Kaghzi or Blanche almonds, come from the mountainous areas of Gilgit-Baltistan and Chitral. They are prized for their ultra-thin shells and light skin, making them easy to peel and perfect for light, healthy snacking. Their mild, delicate flavor and soft crunch make them a favorite in traditional sweets and health-focused diets.',
        availability: createAvailability([9, 8, 7, 12, 1, 2])
      },
      {
        id: 'kalamdana',
        name: 'Kalamdana Almonds',
        description: 'Kalamdana almonds, also referred to as Kalmi or Sonara almonds, are larger in size and richer in taste. These almonds have a naturally sweet, bold flavor and a firm crunch. Their high nutritional value — packed with vitamin E, fiber, magnesium, and healthy fats — makes them ideal for energy mixes, protein bars, or daily snacking for those with active lifestyles.',
        availability: createAvailability([9, 6, 11, 12,])
      },
      {
        id: 'said-kheli-white',
        name: 'Said-Kheli Almonds',
        description: 'Said-Kheli almonds are known for their pale white skin and unique appearance. Often used in luxury gifting and traditional celebrations, these almonds offer a fuller, more traditional almond flavor while maintaining a soft texture and clean look.',
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
    heroImage: '/assets/images/Green Raisin.png',
    description: 'Peela Kandhari raisins are a prized variety of golden-green raisins, traditionally sun-dried in Kandahar. These raisins are juicy, sweet, and slightly chewy, with a natural sugary taste.',
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
        description: 'Sabz Chamman or Green (golden) raisins are eye-catching with their light green to golden-yellow hue, appearing plump, elongated, and smooth-skinned—like little jewels in the bowl. They\'re chewy yet moist, offering a lively burst of sweet‐tart flavor with subtle grape-fresh notes that feel vibrant and refreshing on the palate.',
        availability: createAvailability([8, 9, 10, 11, 12, 1, 2, 3])
      },
      {
        id: 'kala-pishin',
        name: 'Kala Pishin',
        description: 'Kala Pishin or as Black raisins are deep brown to almost black with a richly wrinkled exterior, often full-bodied and slightly sticky—clearly sun-dried to deepen their sweetness. They deliver a luxurious, caramel-like sweetness paired with mellow grape undertones and a satisfyingly soft but chewy texture that feels indulgent and comforting.',
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
    heroImage: '/assets/images/Ziarat Pistachio without shell.png',
    description: 'World-renowned Pakistani pistachios with exceptional taste and quality. A perfect blend of flavor and nutrition.',
    detailedDescription: 'Pakistan produces some of the world\'s finest pistachios, known for their distinctive flavor and superior quality. Our pistachios are carefully harvested and processed to maintain their natural taste and nutritional benefits. Rich in protein, healthy fats, and antioxidants, they make an excellent healthy snack.',
    varieties: [
      {
        id: 'ziarat-pista',
        name: 'Ziarat Pista',
        description: 'Ziarat pistachios come from the cool, dry region of Ziarat in Balochistan, Pakistan. These nuts are known for their rich, buttery flavor and satisfying crunch. Grown in a unique microclimate, Ziarat pistachios have a full-bodied taste that stands out among regional varieties.',
        availability: createAvailability([9, 10, 11, 12, 1])
      },
      {
        id: 'ziarat-pista-shell',
        name: 'Ziarat Pista w shell',
        description: 'Ziarat pistachios come from the cool, dry region of Ziarat in Balochistan, Pakistan. These nuts are known for their rich, buttery flavor and satisfying crunch. Grown in a unique microclimate, Ziarat pistachios have a full-bodied taste that stands out among regional varieties.',
        availability: createAvailability([9, 10, 11, 12, 1])
      },
      {
        id: 'killa-saifullah-pista',
        name: 'Killa Saifullah Pista',
        description: 'From the highlands of Killa Saifullah in northern Balochistan, this pistachio variety is known for its robust flavor and traditional sun-drying techniques. They are consumed both with and without shells and are particularly popular when roasted, making them a premium offering.',
        availability: createAvailability([9, 10, 11, 12, 1])
      },
      {
        id: 'killa-saifullah-roasted',
        name: 'Killa Saifullah Pista Roasted with Shell',
        description: 'From the highlands of Killa Saifullah in northern Balochistan, this pistachio variety is known for its robust flavor and traditional sun-drying techniques. They are consumed both with and without shells and are particularly popular when roasted, making them a premium offering.',
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
    heroImage: '/assets/images/Swat Walnuts wo shell.png',
    description: 'Premium walnuts from the northern regions of Pakistan, known for their rich taste and excellent nutritional profile.',
    detailedDescription: 'Our walnuts come from the pristine valleys of northern Pakistan, where the climate and soil conditions produce nuts of exceptional quality. These brain-healthy nuts are rich in omega-3 fatty acids, protein, and antioxidants. Perfect for snacking, baking, or adding to salads and cereals.',
    varieties: [
      {
        id: 'swat-dir-shell',
        name: 'Swat-Dir Walnut w shell',
        description: 'These walnuts are harvested from the valleys of Swat and Dir in northern Pakistan, where the cool climate helps develop their distinctive taste. Swat-Dir walnuts are mildly sweet with a faint bitterness and have a soft, oily texture. They are widely used in baking, winter snacks, and for extracting walnut oil due to their rich lipid content.',
        availability: createAvailability([10, 11, 12, 1, 2, 3])
      },
      {
        id: 'swat-dir-shelled',
        name: 'Swat-Dir Walnut',
        description: 'These walnuts are harvested from the valleys of Swat and Dir in northern Pakistan, where the cool climate helps develop their distinctive taste. Swat-Dir walnuts are mildly sweet with a faint bitterness and have a soft, oily texture. They are widely used in baking, winter snacks, and for extracting walnut oil due to their rich lipid content.',
        availability: createAvailability([10, 11, 12, 1, 2, 3])
      },
      {
        id: 'kaghzi-walnut',
        name: 'Kaghzi Walnut',
        description: 'Kaghzi walnuts are known for their paper-thin shells and easy cracking. The kernels inside are pale, plump, and subtly sweet. Their high yield and easy usability make them popular.',
        availability: createAvailability([10, 11, 12, 1, 2, 3])
      },
      {
        id: 'kaghzi-shell',
        name: 'Kaghzi Walnut w Shell',
        description: 'Kaghzi walnuts are known for their paper-thin shells and easy cracking. The kernels inside are pale, plump, and subtly sweet. Their high yield and easy usability make them popular.',
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
    heroImage: '/assets/images/Banu_Chilas_Pinenuts_wo_shell.png',
    description: 'Exotic pine nuts harvested from the pristine forests of northern Pakistan. A delicacy prized for its unique flavor.',
    detailedDescription: 'Pine nuts are harvested from pine cones in the remote forests of northern Pakistan. These premium nuts have a distinctive buttery flavor and are considered a delicacy worldwide. Rich in protein, healthy fats, and minerals, they\'re perfect for gourmet cooking and traditional recipes.',
    varieties: [
      {
        id: 'banu-chilas-shell',
        name: 'Banu-Chilas Pinenut in shell',
        description: 'These pinenuts hail from Banu and Chilas in Gilgit-Baltistan and are among the most premium dry fruits in Pakistan. Known for their soft bite and buttery flavor, Banu-Chilas pinenuts are wild-harvested and sold with or without shell. Their natural sweetness makes them ideal for both snacking and garnishing sweets or pulao.',
        availability: createAvailability([8, 9, 10, 11])
      },
      {
        id: 'banu-chilas-shelled',
        name: 'Banu-Chilas Pinenut',
        description: 'These pinenuts hail from Banu and Chilas in Gilgit-Baltistan and are among the most premium dry fruits in Pakistan. Known for their soft bite and buttery flavor, Banu-Chilas pinenuts are wild-harvested and sold with or without shell. Their natural sweetness makes them ideal for both snacking and garnishing sweets or pulao.',
        availability: createAvailability([8, 9, 10, 11])
      },
      {
        id: 'waziri-pinenuts',
        name: 'Waziri Pinenuts',
        description: 'Waziri pinenuts are collected from the rugged Waziristan region and share a similar profile with Banu-Chilas varieties. Slightly firmer, they offer a rich, nutty flavor and high oil content. They\'re often roasted and used in traditional tribal dishes or sold as a delicacy.',
        availability: createAvailability([8, 9, 10, 11])
      },
      {
        id: 'waziri-shell',
        name: 'Waziri Pinenuts in shell',
        description: 'Waziri pinenuts are collected from the rugged Waziristan region and share a similar profile with Banu-Chilas varieties. Slightly firmer, they offer a rich, nutty flavor and high oil content. They\'re often roasted and used in traditional tribal dishes or sold as a delicacy.',
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
    heroImage: '/assets/images/Faraka Hazlenuts peeled.png',
    description: 'Premium hazelnuts with rich, buttery flavor. Perfect for confectionery and gourmet applications.',
    detailedDescription: 'Our hazelnuts are sourced from select regions known for producing nuts with exceptional flavor and texture. These versatile nuts are perfect for both sweet and savory applications, from chocolate making to salad toppings. Rich in healthy fats, vitamin E, and minerals.',
    varieties: [
      {
        id: 'fara-ka-hazlenut',
        name: 'Fara ka Hazlenut',
        description: 'Fara ka hazelnuts are grown in parts northwest Pakistan. They are small to medium in size and offer a rich, earthy, nutty flavor. These hazelnuts are typically consumed raw or peeled and roasted, ideal for use in chocolate spreads, desserts, and trail mixes.',
        availability: createAvailability([9, 10, 11, 12, 1])
      },
      {
        id: 'fara-ka-peeled',
        name: 'Fara ka Hazlenut peeled',
        description: 'Fara ka hazelnuts are grown in parts northwest Pakistan. They are small to medium in size and offer a rich, earthy, nutty flavor. These hazelnuts are typically consumed raw or peeled and roasted, ideal for use in chocolate spreads, desserts, and trail mixes.',
        availability: createAvailability([9, 10, 11, 12, 1])
      },
      {
        id: 'khilay-hazlenut',
        name: 'Khilay Hazlenut',
        description: 'Another regional variant, Khilay hazelnuts are known for their intense flavor and crunchy texture. Peeled Khilay hazelnuts are especially favored in winter dry fruit assortments. Their strong aroma and creamy taste make them well-suited for confectionery or energy bars.',
        availability: createAvailability([9, 10, 11, 12, 1])
      },
      {
        id: 'khilay-peeled',
        name: 'Khilay Hazlenut peeled',
        description: 'Another regional variant, Khilay hazelnuts are known for their intense flavor and crunchy texture. Peeled Khilay hazelnuts are especially favored in winter dry fruit assortments. Their strong aroma and creamy taste make them well-suited for confectionery or energy bars.',
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
    heroImage: '/assets/images/Para Chinar Peanuts wo shell.png',
    description: 'Fresh, crunchy peanuts packed with protein and flavor. Available in various preparations to suit every taste.',
    detailedDescription: 'Our peanuts are sourced from the best agricultural regions of Pakistan, known for producing high-quality groundnuts. Whether raw or roasted, shelled or unshelled, our peanuts deliver consistent quality and taste. High in protein, healthy fats, and essential nutrients.',
    varieties: [
      {
        id: 'para-chinar-shell',
        name: 'Para-Chinar Peanuts w Shell',
        description: 'From the tribal belt of Para-Chinar in Kurram district, these peanuts are a traditional snack, roasted over open fire or coals. They have a smoky, savory flavor with a crunchy shell and are commonly sold in paper cones by street vendors. They\'re appreciated for their rustic, authentic taste and affordability.',
        availability: createAvailability([11, 12, 1, 2, 3, 4])
      },
      {
        id: 'para-chinar-shelled',
        name: 'Para-Chinar Peanuts shelled',
        description: 'From the tribal belt of Para-Chinar in Kurram district, these peanuts are a traditional snack, roasted over open fire or coals. They have a smoky, savory flavor with a crunchy shell and are commonly sold in paper cones by street vendors. They\'re appreciated for their rustic, authentic taste and affordability.',
        availability: createAvailability([11, 12, 1, 2, 3, 4])
      },
      {
        id: 'chakwali-roasted-shell',
        name: 'Chaqwali Peanuts Roasted w Shell',
        description: 'Chaqwali peanuts are similar in use and flavor to Para-Chinar types, but are typically a bit smaller and have a more intense roasted profile. Often roasted with salt, they are commonly consumed in colder months and during festive gatherings.',
        availability: createAvailability([11, 12, 1, 2, 3, 4])
      },
      {
        id: 'chakwali-roasted-shelled',
        name: 'Chaqwali Peanuts Roasted shelled',
        description: 'Chaqwali peanuts are similar in use and flavor to Para-Chinar types, but are typically a bit smaller and have a more intense roasted profile. Often roasted with salt, they are commonly consumed in colder months and during festive gatherings.',
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
    heroImage: '/assets/images/Fig Dried Premium.png',
    description: 'Sun-dried premium figs with natural sweetness and chewy texture. A healthy and delicious treat.',
    detailedDescription: 'Our figs are carefully sun-dried to preserve their natural sweetness and nutritional benefits. These fiber-rich fruits are perfect for healthy snacking, baking, or adding to cereals and salads. Rich in fiber, potassium, and antioxidants, figs support digestive health and overall wellness.',
    varieties: [
      {
        id: 'chitrali-regular',
        name: 'Chitrali Regular',
        description: 'Chitrali figs come from the mountainous Chitral region in northern Pakistan, where they are sun-dried naturally without additives. The regular variety is chewy and sweet with a slightly earthy undertone. They are nutrient-dense and commonly consumed in winter for energy and digestion.',
        availability: createAvailability([8, 9, 10, 11, 12, 1])
      },
      {
        id: 'chitrali-premium',
        name: 'Chitrali Premium',
        description: 'Chitrali figs come from the mountainous Chitral region in northern Pakistan, where they are sun-dried naturally without additives. The premium type is larger, plumper, and richer in flavor. They are nutrient-dense and commonly consumed in winter for energy and digestion.',
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
    heroImage: '/assets/images/Apricot_Gol.png',
    description: 'Premium dried apricots from the valleys of northern Pakistan. Sweet, nutritious, and naturally preserved.',
    detailedDescription: 'Our apricots come from the pristine valleys of northern Pakistan, where the climate produces fruits of exceptional quality. These sun-dried apricots retain their natural sweetness and are packed with vitamins A and C, fiber, and antioxidants. Perfect for healthy snacking and culinary applications.',
    varieties: [
      {
        id: 'naag-seed',
        name: 'Naag w seed',
        description: 'These apricots are dried whole, with the pit left intact, resulting in a smaller, denser fruit that offers a chewy, compact texture and an intensely concentrated, almond-like sweetness thanks to the nutty flavor imparted by the pit.',
        availability: createAvailability([6, 7, 8, 9, 10])
      },
      {
        id: 'kishta-seedless',
        name: 'Kishta without seed',
        description: 'These apricots are carefully halved and sun-dried, achieving a moderately sized piece that maintains a well-balanced moisture level—neither too dry nor too soft. This method preserves their natural sweetness and chewy texture, offering a satisfying bite that\'s tender yet firm, with a sweet and slightly tart apricot flavor.',
        availability: createAvailability([6, 7, 8, 9, 10])
      },
      {
        id: 'gol-seedless',
        name: 'Gol without seed',
        description: 'These apricots are harvested at peak ripeness, then halved and pitted before being dried, resulting in large, round, and somewhat flattened pieces. Their generous size and soft texture make them exceptionally tender, offering a plush, melt-in-your-mouth experience while retaining a luscious, honeyed sweetness that\'s richer than whole-dried apricots.',
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