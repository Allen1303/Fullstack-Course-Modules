// Use user hook that hand;es the the execution accross all components
// import useContext hook to create custom hook for rendering the created context
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
export function useUser() {
  return useContext(UserContext);
}
