const tokenOffers = [
  {
    title: "500 Tokens",
    description: "500 Tokens",
    price: 4.99,
    features: [
      "500 Image Generations",
      "2.000 Characters of Voice Generation",
      "Chat Messages are Free!",
    ],
    appId: "price_1NVdStJB0jYECGoHAHrQo3EH",
  },
  {
    title: "1200 Tokens",
    description: "1200 Tokens",
    price: 9.99,
    features: [
      "1200 Image Generations",
      "6000 Characters of Voice Generation",
      "Chat Messages are Free!",
    ],
    appId: "price_1NVdSpJB0jYECGoHzExAfToe",
  },
  {
    title: "3000 Tokens",
    description: "3000 Tokens",
    price: 19.99,
    features: [
      "3000 Image Generations",
      "12.000 Characters of Voice Generation",
      "Chat Messages are Free!",
    ],
    appId: "price_1NVdSkJB0jYECGoHcE4dM2Mt",
  },
];

export interface TokenOffer {
  title: string;
  description: string;
  price: number;
  appId: string;
  features: string[];
}

export default tokenOffers;
