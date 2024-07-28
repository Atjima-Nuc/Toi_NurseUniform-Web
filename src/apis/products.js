import axios from "../config/axios";

const productsApi = {};

productsApi.getAllProducts = () => axios.get("/products");

export default productsApi;
