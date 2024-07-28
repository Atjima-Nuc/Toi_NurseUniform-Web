import axios from "../config/axios";

const shapeApi = {};

shapeApi.getShapeData = () => axios.get("/shape/");
shapeApi.getShapeDataByUserId = (userId) => axios.get(`/shape/${userId}`);
shapeApi.editShapeDataByAdmin = (data, id) => axios.patch(`/shape/${id}`, data);
shapeApi.postShapeDataByAdmin = (body) => axios.post("/shape", body);

export default shapeApi;
