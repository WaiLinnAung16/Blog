import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { createBlogRoute } from "../Global/API/apiRoute";
import Cookies from "js-cookie";
import { userStore } from "../Global/API/store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const userInfo = userStore((store) => store.userInfo);
  const [tags, setTags] = useState([]);
  const nav = useNavigate();

  const initialState = {
    title: "",
    blogImg: {},
    author_name: userInfo.name,
    hashTag: [],
    content: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [selectedImage, setSelectedImage] = useState(null);
  const token = Cookies.get("token");

  // Save values change in every input
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add Hash Tags
  const handleHashTag = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      e.preventDefault();

      const trimmedValue = e.target.value.trim();
      setTags((prevTags) => [...prevTags, trimmedValue]);

      setFormData((prevFormData) => ({
        ...prevFormData,
        hashTag: [...(prevFormData.hashTag || []), trimmedValue], // Join the array into a single string
      }));

      e.target.value = "";
    }
  };
  // console.log(tags);

  // Image input file save and show image in form
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Create a FileReader
      const reader = new FileReader();

      reader.onload = () => {
        // Set the selected image to the data URL
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }

    setFormData({
      ...formData,
      blogImg: file,
    });
  };

  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    // Append all other form data fields
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "hashTag") {
        // Convert hashTag array to a comma-separated string
        const conString = value.join(",");
        data.append(key, conString);
      } else {
        data.append(key, value);
      }
    });

    // console.log(data);

    try {
      const res = await axios.post(createBlogRoute, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res?.status === 201) {
        toast.success(res?.data?.message);
        nav("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>CreateBlog</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* content input */}
        {/* Image Input */}
        <div className="flex flex-col gap-y-2">
          <label className="flex flex-col relative border border-gray-300 rounded-md shadow-lg group">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected"
                className="object-contain"
              />
            ) : (
              <div className="flex flex-col h-full items-center justify-center py-7">
                <BiImageAdd className="text-4xl" />
                <p className="text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                  Upload Main Image
                </p>
              </div>
            )}

            <input
              type="file"
              accept="image/*"
              id="blogImg"
              name="blogImg"
              onChange={handleFileChange}
              // required
              className="opacity-0 absolute"
            />
          </label>
        </div>
        {/* Title */}
        <div className="flex flex-col gap-y-2">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Title"
            className="customInput"
            onChange={handleChangeInput}
          />
          {/* <span className="text-red-500">{errors?.name}</span> */}
        </div>
        {/* HashTag */}
        <div className="flex flex-col gap-y-2">
          <label htmlFor="hashTag">HashTag</label>
          <div className="flex gap-3">
            {tags.map((tag) => (
              <div className="bg-gray-300 rounded-md p-2">
                <span>{tag}</span>
              </div>
            ))}
          </div>
          <input
            id="hashTag"
            name="hashTag"
            type="text"
            placeholder="hashTags"
            className="customInput"
            onKeyDown={handleHashTag}
          />
          <span className="text-sm text-gray-500">Press Enter to add hashTags</span>
        </div>
        {/* Content */}
        <div className="flex flex-col gap-y-2">
          <label htmlFor="content">Content</label>
          <input
            id="content"
            name="content"
            type="text"
            placeholder="content"
            className="customInput"
            onChange={handleChangeInput}
          />
          {/* <span className="text-red-500">{errors?.email}</span> */}
        </div>
        <div className="flex flex-col gap-y-5 md:gap-0 md:flex-row justify-between items-center">
          {/* submit btn */}
          <button className="px-5 py-2 self-start primaryBtn">Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
