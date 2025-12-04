import axios from "axios";

const API ="https://infusory-backend.onrender.com" || "http://localhost:5000/api/models";

// UPLOAD
export const uploadModel = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await axios.post(`${API}/upload`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
};

// GET ALL MODELS
export const getModels = async () => {
  const res = await axios.get(API);
  return res.data;
};

// DELETE MODEL
export const deleteModel = async (id) => {
  const res = await axios.delete(`${API}/${id}`);
  return res.data;
};
