import { Plant } from "@/types/plant";

export const featuredPlants: Plant[] = [
  {
    id: "1",
    name: "Monstera Deliciosa",
    title: "Monstera Deliciosa", // Aligns with plant.title
    category: "Indoor",
    price: 35,
    rating: 4.9,
    image: "/images/plants/monstera.jpg",
    description:
      "Known as the Swiss Cheese Plant, the Monstera Deliciosa is famous for its natural leaf holes. It thrives in bright, indirect sunlight and adds an instant tropical feel to any room.",
    careLevel: "Easy",
    stock: 14,
    sellerName: "Green Life Nurseries",
  },
  {
    id: "2",
    name: "Snake Plant",
    title: "Snake Plant",
    category: "Air Purifying",
    price: 28,
    rating: 4.8,
    image: "/images/plants/snake.jpg",
    description:
      "An incredibly resilient choice perfect for beginners. The Snake Plant filters toxic indoor pollutants and can thrive in low-light environments with very minimal watering.",
    careLevel: "Easy",
    stock: 25,
    sellerName: "Eco-Grow Bangladesh",
  },
  {
    id: "3",
    name: "Peace Lily",
    title: "Peace Lily",
    category: "Flowering",
    price: 32,
    rating: 4.7,
    image: "/images/plants/peace-lily.jpg",
    description:
      "Peace Lilies are elegant house plants that yield beautiful white spade-like flowers. They tell you exactly when they need water by drooping their leaves slightly.",
    careLevel: "Medium",
    stock: 8,
    sellerName: "Flora Valley",
  },
  {
    id: "4",
    name: "Aloe Vera",
    title: "Aloe Vera",
    category: "Succulent",
    price: 22,
    rating: 4.9,
    image: "/images/plants/aloe.jpg",
    description:
      "This medicinal succulent contains a cooling gel inside its leaves that is widely used for skin care. It requires dry, sandy soil and plenty of direct sun.",
    careLevel: "Easy",
    stock: 40,
    sellerName: "Green Life Nurseries",
  },
];
