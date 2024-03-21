import axios from "axios";

export const apiRequest = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true
  });

export async function signUpService(data) {
    const res = await apiRequest.post("/register", data);
    return res.data;
}
export async function loginService(data) {
    const res = await apiRequest.post("/login", data);
    return res.data;
}