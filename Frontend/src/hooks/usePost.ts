import { useState } from "react";

import axios from "axios";

const UsePost = () => {
  const [loading, setLoading] = useState(false);

  const createpost = async (caption: any, img: any) => {
    setLoading(true);
    console.log(img);

    try {
      const res = await axios.post("/api/posts/create", caption, img);
      const Data = await res.data;
      if (Data.error) {
        throw new Error(Data.error);
      }
    } catch (error) {
      console.log("this is the error message", error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, createpost };
};

export default UsePost;
