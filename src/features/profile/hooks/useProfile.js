import { useContext } from "react";
import { ProfileContext } from "../components/ProfileContextProvider";

export default function useProfile() {
  return useContext(ProfileContext);
}
