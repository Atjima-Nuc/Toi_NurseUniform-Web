import axios from "../config/axios";

const orderApi = {};

orderApi.getOrders = () => axios.get("/order");
orderApi.getOrderByUser = () => axios.get(`/order/byuser`);

orderApi.updateOrderStatusbyId = (id, status) =>
  axios.patch(`/order/${id}`, { status });

orderApi.createOrder = (quantity) => axios.post("/order", { quantity });

export default orderApi;
