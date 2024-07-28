import { useEffect } from "react";
import { createContext } from "react";
import userApi from "../apis/user";
import { useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState();
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    const fetchAllUser = async () => {
      try {
        const allUser = await userApi.getAllUser();
        setUser(allUser.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsUserLoading(false);
      }
    };
    fetchAllUser();
  }, []);
  return (
    <UserContext.Provider value={{ user, isUserLoading, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
