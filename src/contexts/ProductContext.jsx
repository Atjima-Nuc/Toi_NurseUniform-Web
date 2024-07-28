import { createContext, useEffect, useState } from "react";
import productsApi from "../apis/products";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState();
  const [isProductsLoading, setIsProductLoading] = useState(true);

  const [quantity, setQuantity] = useState(1);

  const fetchProducts = async () => {
    try {
      const res = await productsApi.getAllProducts();
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsProductLoading(false);
    }
  };

  // const fetchProductById = async () => {
  //   try {
  //     const res = await productsApi.getAllProducts();
  //     setProducts(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setIsProductLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  return (
    <ProductContext.Provider
      value={{
        setProducts,
        setIsProductLoading,
        products,
        isProductsLoading,
        fetchProducts,
        quantity,
        setQuantity,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
