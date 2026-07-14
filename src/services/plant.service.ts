import api from "./api";

export interface PlantData {
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
  // Updated to support both sets of naming conventions cleanly
  careLevel: "Easy" | "Medium" | "Hard" | string;
  stock: number;
  sellerName: string;
}

export interface Plant extends PlantData {
  _id: string;
  sellerEmail: string;
  createdAt: string;
}

export async function addPlant(plantData: PlantData, token: string) {
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

// ==========================================
// NEW: Fetch a single plant by its ID
// ==========================================
export async function getPlantById(id: string, token: string): Promise<Plant> {
  const response = await api.get(`/plants/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // Accessing response.data.data because backend sends { success: true, data: plant }
  return response.data.data;
}

// ==========================================
// NEW: Update an existing plant via PATCH
// ==========================================
export async function updatePlant(
  id: string,
  token: string,
  updates: Partial<PlantData>,
) {
  const response = await api.patch(`/plants/${id}`, updates, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function deletePlant(id: string, token: string) {
  const response = await api.delete(`/plants/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getPlants(search = "", category = "", sort = "") {
  const response = await api.get("/plants", {
    params: {
      search,
      category,
      sort,
    },
  });

  return response.data.data;
}
