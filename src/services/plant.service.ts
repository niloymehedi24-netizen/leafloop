import api from "./api";

export interface PlantData {
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
  careLevel: "Easy" | "Medium" | "Hard";
  stock: number;
  sellerName: string;
}

export async function addPlant(
  plantData: PlantData,
  token: string
) {
  const response = await api.post("/plants", plantData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}