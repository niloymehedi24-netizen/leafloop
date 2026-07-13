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

export interface LoginData {
  email: string;
  password: string;
}

export async function loginUser(data: LoginData) {
  const response = await api.post("/login", data);
  return response.data;
}