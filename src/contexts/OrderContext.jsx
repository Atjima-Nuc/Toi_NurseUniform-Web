import { createContext, useEffect, useState } from "react";
import orderApi from "../apis/order";

export const OrderContext = createContext();

export function OrderContextProvider({ children }) {
  const [orders, setOrders] = useState([]);
  // const [orderByUserId, setOrderByUserId] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await orderApi.getOrders();
      setOrders(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  console.log("context", orders);

  const updateOrders = async (id, status) => {
    try {
      await orderApi.updateOrderStatusbyId(id, status);
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === id ? { ...order, orderStatus: status } : order
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  // const fetchOrderByUserId = async () => {
  //   try {
  //     const res = await orderApi.getOrderByUser();
  //     setOrderByUserId(res.data);
  //     setLoading(false);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <OrderContext.Provider
      value={{
        orders,
        updateOrders,
        setOrders,
        fetchOrders,
        // fetchOrderByUserId,
        // orderByUserId,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
