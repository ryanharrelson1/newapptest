import { useState } from "react";
import { useAuth } from "@/context/authcontext";
import axios from "axios";

const UseLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuth();

  const logoutuser = async () => {
    setLoading(true);

    try {
      const response = await axios.post("/api/users/logout");
      const Data = await response.data;
      if (Data.error) {
        throw new Error(Data.error);
      }
      localStorage.removeItem("auth-user");
      setAuthUser(null);
    } catch (error) {
      console.log("this is the error message", error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, logoutuser };
};

export default UseLogout;
