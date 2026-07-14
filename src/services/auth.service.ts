import api from "./api";

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export async function registerUser(data: RegisterData) {
  // Added /api prefix
  const response = await api.post("/api/register", data);
  return response.data;
}

export interface LoginData {
  email: string;
  password: string;
}

export async function loginUser(data: LoginData) {
  // Added /api prefix
  const response = await api.post("/api/login", data);
  return response.data;
}
