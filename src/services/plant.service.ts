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

export interface Plant extends PlantData {
  _id: string;
  sellerEmail: string;
  createdAt: string;
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

export async function getMyPlants(token: string) {
  const response = await api.get("/my-plants", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data;
}

export async function deletePlant(
  id: string,
  token: string
) {
  const response = await api.delete(`/plants/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}