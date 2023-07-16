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
    appId: "price_1NMtH3JB0jYECGoH5jJWpE27",
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
    appId: "price_1NMtJKJB0jYECGoHmpzvcCLt",
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
    appId: "price_1NMtLBJB0jYECGoH7tyUz7ih",
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
