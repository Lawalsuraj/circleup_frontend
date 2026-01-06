import React, { useState } from "react";
import API from "../utils/API";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    // append multiple images
    images.forEach((img) => {
      formData.append("images", img);
    });

    try {
      const res = await API.post("/api/createPost", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Post created:", res.data);

      setTitle("");
      setContent("");
      setImages([]);

      navigate("/home");
      
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

      {/* MULTIPLE IMAGES */}
      <input type="file" multiple onChange={handleImageChange} />

      {/* PREVIEW SECTION */}
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

      <button className="btn btn-primary w-full">Post</button>
    </form>
  );
};

export default CreatePost;
