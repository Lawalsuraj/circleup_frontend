import { useEffect, useState } from "react";
import API from "../utils/API";
import PostCard from "./PostCard";

const PostList = () => {
  const [posts, setPosts] = useState([]);


   const fetchPosts = async () => {
      try {
        const res = await API.get("/api/posts");
        console.log(res)
        setPosts(res.data);
      } catch (err) {
        console.log(err.response?.data || err.message);
      }
    };

  useEffect(() => {
   

    fetchPosts();

     const handleRefresh = () => fetchPosts();
     window.addEventListener('refreshPosts', handleRefresh);
  
  return () => window.removeEventListener('refreshPosts', handleRefresh);
  }, []);

  if(posts.length === 0) return <div className="text-7xl text-gray-500  text-center"> No Posts Availlable!!!</div>

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
