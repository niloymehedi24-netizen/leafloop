import api from "./api";

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export async function registerUser(data: RegisterData) {
  const response = await api.post("/register", data);
  return response.data;
}