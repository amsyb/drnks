import oldFashioned from "../assets/images/old-fashioned.jpg";

export const recipes = [
  {
    id: 1,
    title: "Americano",
    mainIngredients: ["Campari", "Sweet Vermouth", "Soda Water"],
    image: oldFashioned,

    baseSpirit: "Other",
    method: "Built",

    recipe: {
      ingredients: [
        "1 oz Campari",
        "1 oz Sweet Vermouth",
        "3 oz Soda Water",
        "Orange slice for garnish",
      ],
      glassware: "Rocks Glass",
      ice: "Cubed Ice",
    },

    steps: [
      "Fill a rocks glass with ice",
      "Add Campari and sweet vermouth",
      "Top with soda water",
      "Stir gently to combine",
      "Garnish with an orange slice",
    ],

    history:
      "The Americano was first served in the 1860s at Gaspare Campari's bar in Milan, Italy.",

    allergens: [
      "May contain sulfites from vermouth",
      "Alcohol content: ~15% ABV",
    ],
  },

  {
    id: 2,
    title: "Martini",
    mainIngredients: ["Gin", "Dry Vermouth"],
    image: oldFashioned,

    baseSpirit: "Gin",
    method: "Stirred",

    recipe: {
      ingredients: [
        "2.5 oz Gin",
        "0.5 oz Dry Vermouth",
        "Lemon twist or olive for garnish",
      ],
      glassware: "Martini Glass",
      ice: "Cubed Ice (for mixing)",
    },

    steps: [
      "Add gin and dry vermouth to a mixing glass with ice",
      "Stir until well chilled",
      "Strain into a chilled martini glass",
      "Garnish with a lemon twist or olive",
    ],

    history:
      "The Martini became popular in the early 20th century and remains one of the most iconic gin cocktails.",

    allergens: [
      "May contain sulfites from vermouth",
      "Alcohol content: ~30% ABV",
    ],
  },

  {
    id: 3,
    title: "Margarita",
    mainIngredients: ["Tequila", "Triple Sec", "Lime Juice"],
    image: oldFashioned,

    baseSpirit: "Tequila",
    method: "Shaken",

    recipe: {
      ingredients: [
        "2 oz Tequila",
        "1 oz Triple Sec",
        "1 oz Fresh Lime Juice",
        "Salt for rim",
      ],
      glassware: "Margarita Glass",
      ice: "Cubed Ice",
    },

    steps: [
      "Rim the glass with salt",
      "Shake tequila, triple sec, and lime juice with ice",
      "Strain into the prepared glass over fresh ice",
      "Garnish with a lime wheel",
    ],

    history:
      "The Margarita rose to fame in the 1940s and is believed to have originated in Mexico or California.",

    allergens: ["Citrus", "Alcohol content: ~25% ABV"],
  },

  {
    id: 4,
    title: "Old Fashioned",
    mainIngredients: ["Whiskey", "Bitters", "Sugar"],
    image: oldFashioned,

    baseSpirit: "Whiskey",
    method: "Built",

    recipe: {
      ingredients: [
        "2 oz Bourbon or Rye Whiskey",
        "2 dashes Angostura Bitters",
        "1 Sugar Cube",
        "Orange twist for garnish",
      ],
      glassware: "Rocks Glass",
      ice: "Large Ice Cube",
    },

    steps: [
      "Muddle sugar and bitters in a rocks glass",
      "Add whiskey and stir",
      "Add ice cube and stir again",
      "Garnish with an orange twist",
    ],

    history:
      "The Old Fashioned dates back to the early 1800s and is considered the original cocktail.",

    allergens: ["None", "Alcohol content: ~32% ABV"],
  },

  {
    id: 5,
    title: "Mojito",
    mainIngredients: ["White Rum", "Mint", "Lime Juice", "Soda Water"],
    image: oldFashioned,

    baseSpirit: "Rum",
    method: "Built",

    recipe: {
      ingredients: [
        "2 oz White Rum",
        "0.75 oz Fresh Lime Juice",
        "2 tsp Sugar",
        "6 Mint Leaves",
        "Soda Water to top",
      ],
      glassware: "Highball Glass",
      ice: "Crushed Ice",
    },

    steps: [
      "Muddle mint leaves and sugar with lime juice",
      "Add rum and stir to dissolve sugar",
      "Fill with crushed ice and top with soda water",
      "Garnish with mint sprig and lime wheel",
    ],

    history:
      "Originating in Cuba, the Mojito became globally popular thanks to its refreshing combination of rum and mint.",

    allergens: ["Citrus", "Alcohol content: ~15% ABV"],
  },

  {
    id: 6,
    title: "Cosmopolitan",
    mainIngredients: ["Vodka", "Triple Sec", "Cranberry Juice", "Lime Juice"],
    image: oldFashioned,

    baseSpirit: "Vodka",
    method: "Shaken",

    recipe: {
      ingredients: [
        "1.5 oz Vodka",
        "1 oz Triple Sec",
        "0.5 oz Lime Juice",
        "1 oz Cranberry Juice",
      ],
      glassware: "Martini Glass",
      ice: "Cubed Ice",
    },

    steps: [
      "Shake all ingredients with ice",
      "Strain into a chilled martini glass",
      "Garnish with a lime wheel or orange twist",
    ],

    history:
      "The Cosmopolitan became a modern classic in the 1990s, popularized by New York cocktail culture.",

    allergens: ["Citrus", "Alcohol content: ~20% ABV"],
  },

  {
    id: 7,
    title: "Negroni",
    mainIngredients: ["Gin", "Campari", "Sweet Vermouth"],
    image: oldFashioned,

    baseSpirit: "Gin",
    method: "Stirred",

    recipe: {
      ingredients: ["1 oz Gin", "1 oz Campari", "1 oz Sweet Vermouth"],
      glassware: "Rocks Glass",
      ice: "Cubed Ice",
    },

    steps: [
      "Add all ingredients to a mixing glass with ice",
      "Stir until well chilled",
      "Strain into a rocks glass over ice",
      "Garnish with an orange peel",
    ],

    history:
      "Invented in Florence in 1919 when Count Negroni requested gin in his Americano instead of soda water.",

    allergens: [
      "May contain sulfites from vermouth",
      "Alcohol content: ~24% ABV",
    ],
  },

  {
    id: 8,
    title: "Piña Colada",
    mainIngredients: ["White Rum", "Coconut Cream", "Pineapple Juice"],
    image: oldFashioned,

    baseSpirit: "Rum",
    method: "Blended",

    recipe: {
      ingredients: [
        "2 oz White Rum",
        "1 oz Coconut Cream",
        "3 oz Pineapple Juice",
      ],
      glassware: "Hurricane Glass",
      ice: "Blended Ice",
    },

    steps: [
      "Add all ingredients with ice to a blender",
      "Blend until smooth",
      "Pour into a hurricane glass",
      "Garnish with pineapple wedge and cherry",
    ],

    history:
      "Originated in Puerto Rico in the 1950s, the Piña Colada became the island’s official drink in 1978.",

    allergens: ["Coconut", "Alcohol content: ~18% ABV"],
  },

  {
    id: 9,
    title: "Whiskey Sour",
    mainIngredients: ["Whiskey", "Lemon Juice", "Simple Syrup"],
    image: oldFashioned,

    baseSpirit: "Whiskey",
    method: "Shaken",

    recipe: {
      ingredients: [
        "2 oz Bourbon",
        "0.75 oz Lemon Juice",
        "0.5 oz Simple Syrup",
        "Optional: Egg White",
      ],
      glassware: "Rocks Glass",
      ice: "Cubed Ice",
    },

    steps: [
      "Shake all ingredients with ice (dry shake first if using egg white)",
      "Strain into a rocks glass over ice",
      "Garnish with cherry or lemon wheel",
    ],

    history:
      "A classic American cocktail dating back to the 1800s, balancing tart citrus with smooth whiskey sweetness.",

    allergens: ["Egg (if included)", "Citrus", "Alcohol content: ~25% ABV"],
  },

  {
    id: 10,
    title: "Daiquiri",
    mainIngredients: ["White Rum", "Lime Juice", "Simple Syrup"],
    image: oldFashioned,

    baseSpirit: "Rum",
    method: "Shaken",

    recipe: {
      ingredients: [
        "2 oz White Rum",
        "1 oz Fresh Lime Juice",
        "0.75 oz Simple Syrup",
      ],
      glassware: "Coupe Glass",
      ice: "Cubed Ice (for shaking)",
    },

    steps: [
      "Shake all ingredients with ice",
      "Strain into a chilled coupe glass",
      "Garnish with a lime wheel",
    ],

    history:
      "The Daiquiri was created in Cuba and became one of Hemingway’s favorite cocktails.",

    allergens: ["Citrus", "Alcohol content: ~22% ABV"],
  },

  {
    id: 11,
    title: "Bloody Mary",
    mainIngredients: ["Vodka", "Tomato Juice", "Spices"],
    image: oldFashioned,

    baseSpirit: "Vodka",
    method: "Built",

    recipe: {
      ingredients: [
        "2 oz Vodka",
        "4 oz Tomato Juice",
        "0.5 oz Lemon Juice",
        "2 dashes Worcestershire Sauce",
        "Tabasco, Salt, and Pepper to taste",
      ],
      glassware: "Highball Glass",
      ice: "Cubed Ice",
    },

    steps: [
      "Add all ingredients to a glass with ice",
      "Stir gently to mix",
      "Garnish with celery stalk and lemon wedge",
    ],

    history:
      "Created in the 1920s, the Bloody Mary became the ultimate brunch cocktail thanks to its savory profile.",

    allergens: ["Tomato", "Spices", "Alcohol content: ~12% ABV"],
  },

  {
    id: 12,
    title: "Sidecar",
    mainIngredients: ["Brandy", "Triple Sec", "Lemon Juice"],
    image: oldFashioned,

    baseSpirit: "Brandy",
    method: "Shaken",

    recipe: {
      ingredients: [
        "2 oz Brandy or Cognac",
        "1 oz Triple Sec",
        "0.75 oz Fresh Lemon Juice",
      ],
      glassware: "Coupe Glass",
      ice: "Cubed Ice",
    },

    steps: [
      "Shake all ingredients with ice",
      "Strain into a chilled coupe glass",
      "Optional: Sugar rim the glass",
    ],

    history:
      "The Sidecar was popularized in Paris after World War I and remains a classic balance of sweet and sour.",

    allergens: ["Citrus", "Alcohol content: ~25% ABV"],
  },
];
