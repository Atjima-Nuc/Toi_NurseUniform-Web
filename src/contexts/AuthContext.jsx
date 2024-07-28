import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../utils/local-storage";
import authApi from "../apis/auth";
import userApi from "../apis/user";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [isAuthUserLoading, setIsAuthUserLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (getAccessToken()) {
          const res = await authApi.getAuthUser();
          setAuthUser(res.data.user);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsAuthUserLoading(false);
      }
    };
    fetchUser();
  }, []);

  const login = async (credentials) => {
    console.log(credentials);
    const res = await authApi.login(credentials);
    setAccessToken(res.data.accessToken);
    const resGetAuthUser = await authApi.getAuthUser();
    setAuthUser(resGetAuthUser.data.user);
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };

  const updateAuthUser = async (formData) => {
    const res = await userApi.getProfileUser(formData);
    setAuthUser((prev) => ({ ...prev, ...res.data }));
  };

  // const updateProfileByAdmin = async (userId, formData) => {
  //   await userApi.editProfileByAdmin(userId, formData);
  // };

  // const deleteProfileByAdmin = async (userId) => {
  //   await userApi.deleteUser(userId);
  // };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        authUser,
        isAuthUserLoading,
        updateAuthUser,
        setAuthUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
