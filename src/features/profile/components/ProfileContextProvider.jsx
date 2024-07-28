import { createContext, useEffect, useState } from "react";
import userApi from "../../../apis/user";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {
  const [profileUser, setProfileUser] = useState(null);

  const { userId } = useParams();
  const { authUser } = useAuth();

  useEffect(() => {
    const fecthProfileUser = async () => {
      try {
        const res = await userApi.getProfileUser(userId);
        setProfileUser(res.data.user);
      } catch (err) {
        console.log(err);
      }
    };
    fecthProfileUser();
  }, [userId]);

  useEffect(() => {
    if (authUser?.id === +userId) {
      setProfileUser(authUser);
    }
  }, [authUser, userId]);
  const value = {
    profileUser,
  };
  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}
