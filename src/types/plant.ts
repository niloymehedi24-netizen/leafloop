export interface Plant {
  id: string;
  name: string;
  title?: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description?: string;
  careLevel?: "Easy" | "Medium" | "High";
  stock?: number;
  sellerName?: string;
}
