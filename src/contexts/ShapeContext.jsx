import { createContext, useEffect, useState } from "react";
import shapeApi from "../apis/shape";

export const ShapeContext = createContext();

export default function ShapeContextProvider({ children }) {
  const [shapeData, setShapeData] = useState([]);
  const [isShapeDataLoading, setIsShapeDataLoading] = useState(false);

  const fetchShapeData = async () => {
    setIsShapeDataLoading(true);
    try {
      const res = await shapeApi.getShapeData();
      setShapeData(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsShapeDataLoading(false);
    }
  };

  useEffect(() => {
    fetchShapeData();
  }, []);

  return (
    <ShapeContext.Provider
      value={{ shapeData, setShapeData, setIsShapeDataLoading, fetchShapeData }}
    >
      {children}
    </ShapeContext.Provider>
  );
}
