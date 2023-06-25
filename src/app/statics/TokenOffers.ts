const tokenOffers = [

  {
    "title": "10.000 Tokens",
    "description": "10000 Tokens",
    "price": 4.99,
    "features": [
      "100 Image Generations",
      "20 Minutes of Voice Generation",
      "10.000 Chat Messages"
    ]
  },
  {
    "title": "25.000 Tokens",
    "description": "25000 Tokens",
    "price": 9.99,
    "features": [
      "100 Image Generations",
      "20 Minutes of Voice Generation",
      "10.000 Chat Messages"
    ]
  },
  {
    "title": "60.000 Tokens",
    "description": "60000 Tokens",
    "price": 19.99,
    "features": [
      "100 Image Generations",
      "20 Minutes of Voice Generation",
      "10.000 Chat Messages"
    ]
  }
]

export interface TokenOffer {
  title: string;
  description: string;
  price: number;
  features: string[];
}

export default tokenOffers;