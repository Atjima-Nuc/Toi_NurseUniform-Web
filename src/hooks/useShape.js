import { useContext } from "react";
import { ShapeContext } from "../contexts/ShapeContext";

export default function useShape() {
  return useContext(ShapeContext);
}
