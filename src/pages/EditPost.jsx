import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthStore } from '../store/AuthStore';
import API from '../utils/API';

const EditPost = () => {

  const params = useParams();
  const { user } = useAuthStore();

  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    const fetchPost = async () => {
      const res = await API.get(`/api/posts/${params.id}`);
      const data = res.data;

      setPost(data);
      setTitle(data.title);
      setContent(data.content);

      console.log("Fetched:", data);
    };

    fetchPost();
  }, []);
  
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    images.forEach((img) => {
      formData.append("images", img);
    });

    try {

      const data = {
        title, content
      }
      const res= await API.put(`/api/updatePost/${params.id}`, data)
      console.log(res)
     
      navigate('/home')
      

    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded">

      <input
        type="text"
        className="input input-bordered w-full"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="textarea textarea-bordered w-full"
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <input type="file" multiple onChange={handleImageChange} />

      {images.length > 0 && (
        <div className="flex gap-2 flex-wrap mt-2">
          {images.map((img, i) => (
            <img
              key={i}
              src={URL.createObjectURL(img)}
              alt="preview"
              className="w-20 h-20 object-cover rounded"
            />
          ))}
        </div>
      )}

      <button className="btn btn-primary w-full">Update</button>
    </form>
  );
};

export default EditPost;
