import { axios } from "@/lib";
import { UserStateProps } from "@/types/user";
import { AxiosResponse } from "axios";

export async function getCurrentUser() {
  const user = await axios.get<never, AxiosResponse>('/api/users/user');
  return user;
}

export async function loginCheck() {
  const result = await axios.get<never, void>('/api/loginCheck');
  return result;
}