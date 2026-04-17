//Custom Hook for useContext and to keep separation of concerns
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function useUser() {
  return useContext(UserContext);
}
