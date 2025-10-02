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
  images?: string[]; // New: array of image URLs for gallery
  imageNoBg?: string; // Optional, used for products with no background image
  varieties: Variety[];
  origins: OriginLocation[];
  nutritionalInfo?: string;
  details?: {
    reasonToBelieve?: string[];
    storage?: string;
    origin?: string[];
    calibre?: string[];
    application?: string[];
  };
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
    images: [
      '/assets/images/Images-2/Kalam Dana Almond.png',
      '/assets/images/Images-2/Kalamdana Almond shelled.png',
      '/assets/images/Images-2/Kambri Almond Unshelled.png',
      '/assets/images/Images-2/Kambri Almond.png',
      '/assets/images/Images-2/Katta Jumbo Shelled.png',
      '/assets/images/Images-2/Katta Jumbo.png'
    ],
    imageNoBg: '/assets/images/Kambri_Almonds-removebg.png',
    details: {
      reasonToBelieve: [
        'Firm, rich, and flavourful with a nutty depth - Kambri',
        'Soft, slightly bitter-sweet, and aromatic – Kalam Dana',
        'Distinctively large, crunchy and delicately flavoured with a hint of sweetness– Katta Jumbo'
      ],
      storage: 'Ambient',
      origin: [
        'Peshawar - Kambri',
        'Kalat – Kalam Dana',
        'Skardu – Katta Jumbo'
      ],
      calibre: [
        '26/28 per ounce – Kambri',
        '30/32 per ounce – Kalamdana',
        '20/22 per ounce – Katta Jumbo'
      ],
      application: [
        'Premium nut mixes, dessert toppings (ice creams, yogurts), and chocolate coatings – Kambri',
        'Nutritional supplements, energy/protein bars, and functional bakery products. – Kalamdana',
        'Cold-pressed almond oil, specialty liqueurs, and gourmet dry fruit snacks – Katta Jumbo'
      ]
    },
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
    name: 'Raisins',
    heroImage: '/assets/images/Green Raisin.png',
    images: [

      '/assets/images/Images-2/Kala Pishin - Black Raisin.png',
      '/assets/images/Images-2/Peela Khandhari - Golden Raisin.png',
      '/assets/images/Images-2/Sultana Raisin.png'
    ],
    details: {
      reasonToBelieve: [
        'Juicy, sweet, and slightly chewy, with a natural sugary taste - (Peela Kandhari / Golden Raisin)',
        'Rich, chewy, and full-bodied with deep, fruity flavor - (Kala Pishin / Black Raisin)',
        'Sweet, soft, and juicy with a light golden hue - (Sultana Raisin)'
      ],
      storage: 'Ambient',
      origin: [
        'Chamman - Sabz Chamman / Golden Raisin',
        'Kandhar – (Sultana Raisin)',
        'Pishin – (Kala Pishin / Black Raisin)'
      ],
      calibre: [
        '50/60 per ounce – (Sultana Raisin)',
        '45/55 per ounce – (Peela Kandhari / Golden Raisin)',
        '55/65 per ounce - (Kala Pishin / Black Raisin)'
      ],
      application: [
        'Pastries, curries, pilafs, cheese boards – (Sultana Raisin)',
        'Cakes, cereals, salads, chutneys – (Peela Kandhari / Golden Raisin)',
        'Snacks, hearty breads, pilafs, stews – (Kala Pishin / Black Raisin)'
      ]
    },
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
    name: 'Pistachios',
    heroImage: '/assets/images/Ziarat Pistachio without shell.png',
    images: [
      '/assets/images/Images-2/Ziarat Pista.png',
      '/assets/images/Images-2/Ziarat Pistachio Shelled.png',
      '/assets/images/Images-2/Killah Saifullah Pistachio.png',
      '/assets/images/Images-2/Killah Saifullah Pistachio Shelled.png'
    ],
    details: {
      reasonToBelieve: [
        'Rich, earthy, and slightly chewy with a bold nutty taste – Ziarat Pista',
        'Smooth, slightly rounder and delicately sweet with a soft crunch – Killa Saifullah Pista'
      ],
      storage: 'Ambient',
      origin: [
        'Quetta – Ziarat Pista',
        'Kalat – Killa Saifullah Pista'
      ],
      calibre: [
        '45/50 per ounce – Ziarat Pista',
        '40/45 per ounce – Killa Saifullah Pista'
      ],
      application: [
        'Nougats, pralines, biscotti, and rich Mediterranean pastries. – Ziarat Pista',
        'Gelato, luxury chocolates, macarons, and gourmet bakery toppings. – Killa Saifullah Pista'
      ]
    },
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
    images: [
      '/assets/images/Images-2/Swat-dir Walnut.png',
      '/assets/images/Images-2/Swat-dir Walnut Shelled.png',
      '/assets/images/Images-2/Kaghzi Walnut.png',
      '/assets/images/Images-2/Kaghzi Walnut Shelled.png'
    ],
    details: {
      reasonToBelieve: [
        'Mildly sweet with a faint bitterness and have a soft, oily texture – Swat-dir',
        'Paper-thin shells and easy cracking with pale, plump, and subtly sweet flavour – Kaghzi'
      ],
      storage: 'Ambient',
      origin: [
        'Swat – Swat-dir',
        'Gilgit – Kaghzi'
      ],
      calibre: [
        '6/8 halves per ounce – Swat-dir',
        '10/12 halves per ounce – Kaghzi'
      ],
      application: [
        'Baking, winter snacks, artisan breads, savory salads, cheese pairings, hearty sauces, and walnut oil – Swat-dir',
        'Desserts (cakes, tarts), confectionery, chocolates, and gourmet nut mixes – Kaghzi'
      ]
    },
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
    name: 'Pinenuts',
    heroImage: '/assets/images/Banu_Chilas_Pinenuts_wo_shell.png',
    images: [
      '/assets/images/Images-2/Bannu Pinenut.png',
      '/assets/images/Images-2/Bannu Pinenut Shelled.png',
      '/assets/images/Images-2/Waziri Pinenuts.png',
      '/assets/images/Images-2/Waziri Pinenut Shelled.png'
    ],
    details: {
      reasonToBelieve: [
        'Delicate, buttery sweetness paired with a subtle crunch— rich in nutritiouns - Banu Chillas',
        'Globally Prized; known for slightly firmer, rich, distinct, premium & nutty flavor.   - Waziri'
      ],
      storage: 'Ambient',
      origin: [
        'Bannu - Banu Chillas',
        'Wazisristan - Waziri'
      ],
      calibre: [
        '150/160 per ounce - Banu Chillas',
        '120/130 per ounce - Waziri'
      ],
      application: [
        'Luxury pesto, gourmet baked goods, salad & grain bowl, fine pastry & confections - Banu Chillas',
        'Artisan confections, fine chocolate, creamy desserts or cheese boards, luxury snack- Waziri'
      ]
    },
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

  channa: {
    id: 'channa',
    name: 'Channa',
    heroImage: '/assets/images/Faraka Hazlenuts peeled.png',
    images: [
      '/assets/images/Faraka Hazlenuts peeled.png',
      '/assets/images/Faraka Hazlenuts in hard shell.png',
      '/assets/images/Khiley Hazlenut wo shell.png',
      '/assets/images/Khiley Hazlenut in shell.png',
      '/assets/images/Images-2/Faraka Chanay.png',
      '/assets/images/Images-2/Faraka Channa Shelled.png',
      '/assets/images/Images-2/Khilay Channy.png',
      '/assets/images/Images-2/Khilay Channa Shelled.png'
    ],
    details: {
      reasonToBelieve: [
        'Brownish, nutty premium taste, and firm bite. Highly satiety & rustic, traditional appeal- Khilay',
        'Brighter in appearance, slightly softer texture, cleaner and versatile - Faraka'
      ],
      storage: 'Ambient',
      origin: [
        'Layyah - Fara Ka',
        'Thal - Khilay'
      ],
      calibre: [
        '150/155 per ounce – Fara ka',
        '145/150 per ounce - Khilay'
      ],
      application: [
        'Savory high-protein snacks; hearty stews, soups & slow-cooked Mediterranean dishes - Fara ka',
        'Salads, mezze spreads, and gourmet snack mixes. Baking for health-focused products - Khilay'
      ]
    },
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
    images: [
      '/assets/images/Para Chinar Peanuts wo shell.png',
      '/assets/images/Para Chinar Peanuts w Shell.png',
      '/assets/images/Chakwal Peanuts wo shells.png',
      '/assets/images/Chakwal Peanuts in shell.png',
      '/assets/images/Images-2/Para chinar Peanut.png',
      '/assets/images/Images-2/Parachinar Peanut Shelled.png',
      '/assets/images/Images-2/Chakwali Peanut.png',
      '/assets/images/Images-2/Chawali Peanut Shelled.png'
    ],
    details: {
      reasonToBelieve: [
        'Unique flavor, high quality, rich in protein, healthy fats, vitamins & minerals - Para Chinar',
        'Sweet taste, high nutrition, grown in Pothohar region - Chakwali'
      ],
      storage: 'Ambient',
      origin: [
        'Para Chinar - Para Chinar',
        'Chakwal - Chakwali'
      ],
      calibre: [
        '45/50 per ounce - Para Chinar',
        '50/55 per ounce - Chakwali'
      ],
      application: [
        'Gourmet roasted snacks, luxury peanut butter spreads, salad topper, artisan baking - Para Chinar',
        'Creamier peanut butters, velvety savory sauces, protein snacks, baking and chocolate - Chakwali'
      ]
    },
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
    name: 'Figs',
    heroImage: '/assets/images/Fig Dried Premium.png',
    images: [
      '/assets/images/Images-2/Fig Premium.png',
      '/assets/images/Images-2/Fig Regular.png'
    ],
    details: {
      reasonToBelieve: [
        'Classic sweet-chewy flavour, nutrient-rich and slightly earthy undertone - Regular',
        'Tree-sun dried for enhanced sweetness, lighter appearance & larger size, gourmet appeal - Premium'
      ],
      storage: 'Ambient',
      origin: [
        'Chitral – Regular',
        'Chitral – Premium'
      ],
      calibre: [
        '4/5 per ounce - Regular',
        '3/4 per ounce – Premium'
      ],
      application: [
        'Granolas, smoothies, everyday baking, home-style snacking – Regular',
        'Fine confectionery, charcuterie, luxury pastries, artisanal spreads – Premium'
      ]
    },
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
    images: [
      '/assets/images/Images-2/Gol Apricot.png',
      '/assets/images/Images-2/Kishta Apricot.png',
      '/assets/images/Images-2/Naag Apricot.png'
    ],
    details: {
      reasonToBelieve: [
        'Split & enriched by natural sun-dried method; unique sweet-tart taste and are loaded with vitamins & antioxidants - Kishta',
        'Round, flat, and pitted, Bright golden hue with large size, softer and sweeter – Gol',
        'Known for their rich nutritional profile, they are packed with healthy fats, proteins, and even vitamin B17 – Naag'
      ],
      storage: 'Ambient',
      origin: [
        'Hunza - Kishta',
        'Gilgit - Gol',
        'Hunza – Naag'
      ],
      calibre: [
        '6/7 - Kishta',
        '5/6 - Gol',
        '2/3 – Naag'
      ],
      application: [
        'Luxury confectionery, cheese platters, gourmet baking; artisanal bars - Kishta',
        'Granola, smoothies, everyday snacks, baking, trail mixes – Gol',
        'Wholesome energy snacks, sports nutrition blends, immunity-boosting mixes and premium health supplement – Naag'
      ]
    },
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