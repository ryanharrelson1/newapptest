import { useState } from "react";
import { useAuth } from "@/context/authcontext";
import axios from "axios";

const UseLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuth();

  const loginUser = async (values: any) => {
    setLoading(true);

    try {
      const response = await axios.post("/api/users/login", values);
      const Data = await response.data;
      if (Data.error) {
        throw new Error(Data.error);
      }
      localStorage.setItem("auth-user", JSON.stringify(Data));
      setAuthUser(Data);
    } catch (error) {
      console.log("this is the error message", error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, loginUser };
};

export default UseLogin;
