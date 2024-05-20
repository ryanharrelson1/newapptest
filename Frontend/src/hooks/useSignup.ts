import { useAuth } from "@/context/authcontext";
import axios from "axios";
import { useState } from "react";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuth();

  const newuser = async (values: any) => {
    setLoading(true);

    try {
      const res = await axios.post("/api/users/signup", values);

      const Data = res.data;

      if (Data.error) {
        throw new Error(Data.error);
      }
      setAuthUser(Data);
      localStorage.setItem("auth-user", JSON.stringify(Data));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, newuser };
};

export default useSignup;
