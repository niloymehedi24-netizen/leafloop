export interface Plant {
  id: string;
  name: string; // We will keep 'name' (industry standard) or 'title'
  title?: string; // Fallback in case other parts of your app use 'title'
  category: string;
  price: number;
  rating: number;
  image: string;
  description?: string;
  careLevel?: "Easy" | "Medium" | "High";
  stock?: number;
  sellerName?: string;
}
