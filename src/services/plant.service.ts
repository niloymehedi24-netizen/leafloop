// import api from "./api";
// import { featuredPlants } from "@/data/plants"; // <-- Import static backup data

// export interface PlantData {
//   title: string;
//   category: string;
//   price: number;
//   image: string;
//   description: string;
//   careLevel: "Easy" | "Medium" | "Hard" | string;
//   stock: number;
//   sellerName: string;
// }

// export interface Plant extends PlantData {
//   _id: string; // Backend database ID
//   id?: string; // Fallback map support for client static list mapping
//   sellerEmail: string;
//   createdAt: string;
// }

// export interface PaginatedPlantsResponse {
//   plants: Plant[];
//   pagination: {
//     totalItems: number;
//     totalPages: number;
//     currentPage: number;
//     itemsPerPage: number;
//   };
// }

// export interface AddPlantResponse {
//   success: boolean;
//   message?: string;
//   data?: Plant;
// }

// export interface DeletePlantResponse {
//   success: boolean;
//   message?: string;
// }

// export interface UpdatePlantResponse {
//   success: boolean;
//   message?: string;
//   data?: Plant;
// }

// export async function addPlant(
//   plantData: PlantData,
//   token: string,
// ): Promise<AddPlantResponse> {
//   const response = await api.post("/plants", plantData, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return response.data as AddPlantResponse;
// }

// export async function getMyPlants(
//   token: string,
// ): Promise<Plant[] | { plants: Plant[] }> {
//   const response = await api.get("/my-plants", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return response.data.data as Plant[] | { plants: Plant[] };
// }

// // ==========================================
// // Fetch a single plant by its ID (Authenticated)
// // ==========================================
// export async function getPlantById(id: string, token: string): Promise<Plant> {
//   const response = await api.get(`/plants/${id}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data.data as Plant;
// }

// // ==========================================
// // Update an existing plant via PATCH (Cleaned up endpoints)
// // ==========================================
// export async function updatePlant(
//   id: string,
//   token: string,
//   updates: Partial<PlantData>,
// ): Promise<UpdatePlantResponse> {
//   // Explicitly extract fields to prevent sending empty or broken structural fields
//   const response = await api.patch(`/plants/${id}`, updates, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data as UpdatePlantResponse;
// }

// // ==========================================
// // Delete a plant via DELETE
// // ==========================================
// export async function deletePlant(
//   id: string,
//   token: string,
// ): Promise<DeletePlantResponse> {
//   const response = await api.delete(`/plants/${id}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data as DeletePlantResponse;
// }

// export async function getPlants(
//   search = "",
//   category = "",
//   sort = "",
//   page = 1,
//   limit = 6,
// ): Promise<PaginatedPlantsResponse> {
//   const response = await api.get("/plants", {
//     params: {
//       search,
//       category,
//       sort,
//       page,
//       limit,
//     },
//   });

//   return response.data.data as PaginatedPlantsResponse;
// }

// export async function getPlant(id: string): Promise<Plant | null> {
//   try {
//     const response = await api.get(`/public/plants/${id}`);
//     if (response.data && response.data.data) {
//       return response.data.data as Plant;
//     }

//     const fallbackResponse = await api.get(`/plants/${id}`);
//     if (fallbackResponse.data && fallbackResponse.data.data) {
//       return fallbackResponse.data.data as Plant;
//     }
//   } catch (error) {
//     console.warn(
//       `Backend lookup failed for plant ID "${id}". Falling back to static featured collection.`,
//       error,
//     );
//   }

//   const localPlant = featuredPlants.find((item) => {
//     const itemId = item.id;
//     const hasDbId =
//       "_id" in item &&
//       typeof (item as Record<string, unknown>)._id === "string";
//     const dbId = hasDbId ? (item as Record<string, string>)._id : undefined;

//     return itemId === id || dbId === id;
//   });

//   if (localPlant) {
//     return {
//       _id: localPlant.id,
//       id: localPlant.id,
//       title: localPlant.name,
//       category: localPlant.category,
//       price: localPlant.price,
//       image: localPlant.image,
//       description: localPlant.description || "Beautiful handpicked plant.",
//       careLevel: localPlant.careLevel || "Easy",
//       stock: localPlant.stock || 10,
//       sellerName: localPlant.sellerName || "LeafLoop Botanical",
//       sellerEmail: "support@leafloop.com",
//       createdAt: new Date().toISOString(),
//     };
//   }

//   return null;
// }

import api from "./api";
import { featuredPlants } from "@/data/plants";

export interface PlantData {
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
  careLevel: "Easy" | "Medium" | "Hard" | string;
  stock: number;
  sellerName: string;
}

export interface Plant extends PlantData {
  _id: string;
  id?: string;
  sellerEmail: string;
  createdAt: string;
}

export interface PaginatedPlantsResponse {
  plants: Plant[];
  pagination: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    itemsPerPage: number;
  };
}

export interface AddPlantResponse {
  success: boolean;
  message?: string;
  data?: Plant;
}

export interface DeletePlantResponse {
  success: boolean;
  message?: string;
}

export interface UpdatePlantResponse {
  success: boolean;
  message?: string;
  data?: Plant;
}

export async function addPlant(
  plantData: PlantData,
  token: string,
): Promise<AddPlantResponse> {
  const response = await api.post("/api/plants", plantData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data as AddPlantResponse;
}

export async function getMyPlants(
  token: string,
): Promise<Plant[] | { plants: Plant[] }> {
  const response = await api.get("/api/my-plants", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data as Plant[] | { plants: Plant[] };
}

export async function getPlantById(id: string, token: string): Promise<Plant> {
  const response = await api.get(`/api/plants/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data as Plant;
}

export async function updatePlant(
  id: string,
  token: string,
  updates: Partial<PlantData>,
): Promise<UpdatePlantResponse> {
  const response = await api.patch(`/api/plants/${id}`, updates, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data as UpdatePlantResponse;
}

export async function deletePlant(
  id: string,
  token: string,
): Promise<DeletePlantResponse> {
  const response = await api.delete(`/api/plants/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data as DeletePlantResponse;
}

export async function getPlants(
  search = "",
  category = "",
  sort = "",
  page = 1,
  limit = 6,
): Promise<PaginatedPlantsResponse> {
  const response = await api.get("/api/plants", {
    params: {
      search,
      category,
      sort,
      page,
      limit,
    },
  });

  return response.data.data as PaginatedPlantsResponse;
}

export async function getPlant(id: string): Promise<Plant | null> {
  try {
    // Priority: Public API
    const response = await api.get(`/api/public/plants/${id}`);
    if (response.data && response.data.data) {
      return response.data.data as Plant;
    }
  } catch (error) {
    console.warn(`Backend lookup failed for plant ID "${id}".`);
  }

  // Fallback to static data
  const localPlant = featuredPlants.find((item) => {
    const itemId = item.id;
    return itemId === id;
  });

  if (localPlant) {
    return {
      _id: localPlant.id,
      id: localPlant.id,
      title: localPlant.name,
      category: localPlant.category,
      price: localPlant.price,
      image: localPlant.image,
      description: localPlant.description || "Beautiful handpicked plant.",
      careLevel: localPlant.careLevel || "Easy",
      stock: localPlant.stock || 10,
      sellerName: localPlant.sellerName || "LeafLoop Botanical",
      sellerEmail: "support@leafloop.com",
      createdAt: new Date().toISOString(),
    };
  }

  return null;
}
