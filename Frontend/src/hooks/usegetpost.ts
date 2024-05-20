import { useEffect, useState } from "react";
import axios from "axios";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/posts/getposts");
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading };
};

export default usePosts;
