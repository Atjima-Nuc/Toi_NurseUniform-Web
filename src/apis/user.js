import axios from "../config/axios";

const userApi = {};

userApi.editProfileUser = (edit) => axios.patch("/profile", edit);

userApi.getAllUser = () => axios.get("profile/admin/getAlluser");
userApi.editProfileByAdmin = (userId, edit) =>
  axios.patch(`/admin/profile/${userId}`, edit);
userApi.deleteUser = (userId) =>
  axios.delete(`/profile/admin/delete/${userId}`);

export default userApi;
