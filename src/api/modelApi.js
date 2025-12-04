import axios from "axios";

const API ="https://infusory-backend.onrender.com/api/models" || "http://localhost:5000/api/models";

// UPLOAD
export const uploadModel = async (file) => {
try
{
      const formData = new FormData();
  formData.append("file", file);

  const res = await axios.post(`${API}/upload`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
}catch(err){
    alert(err.message);
    console.log(err.message)
}
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
