import React, { useState } from "react";
import Layout from "../components/Layout";
import toast from "react-hot-toast";
import axios from "axios";

export const AddItem = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [coverImg, setCoverImg] = useState(null);
    const [additionalImgs, setAdditionalImgs] = useState(null);

    const handleSubmit = async (e) => {
       e.preventDefault();
       try {
        
        const formData = new FormData();

        formData.append("name", name);
        formData.append("type", type);
        formData.append("description", description);
        formData.append("coverImg", coverImg);

        for (let i = 0; i < additionalImgs.length; i++) {
           formData.append("additionalImgs", additionalImgs[i]);
        }

        const res = await axios.post(`${import.meta.env.VITE_SERVER_API}/api/v1/items/add-item`, formData);

        if(res.data.success){
          toast.success("Item added successfully");
        }

       } catch (error) {
        toast.error(error.message);
       }
    }


  return (
    <Layout>
    <div className="w-full py-8 px-6 mx-auto bg-gray-50">
    <form className="max-w-2xl p-6 mx-auto bg-white rounded-2xl shadow-md space-y-6" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-gray-800 text-center">Add New Item</h2>

      <div>
        <label className="block mb-1 font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
        <input type="text" value={name} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400" onChange={(e) => setName(e.target.value)} required/>
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">Type <span className="text-red-500">*</span></label>
        <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400" value={type} onChange={(e) => setType(e.target.value)} required>
          <option value="">Select a type</option>
          <option value={"Shirt"}>Shirt</option>
          <option value={"Pant"}>Pant</option>
          <option value={"Shoes"}>Shoes</option>
          <option value={"Sports Gear"}>Sports Gear</option>
          <option value={"Other"}>Other</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">Description</label>
        <textarea className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400" rows="4" value={description}
          placeholder="Enter a detailed description..." onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>

      <div>
         <label className="block mb-1 font-medium text-gray-700">Cover Image <span className="text-red-500">*</span></label>
         <input type="file" accept="image/*" className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-gray-200 file:text-black hover:file:bg-gray-300" onChange={(e) => setCoverImg(e.target.files[0])} required/>
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">Additional Images</label>
        <input type="file" multiple accept="image/*" className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-gray-200 file:text-black hover:file:bg-gray-300" onChange={(e) => setAdditionalImgs(e.target.files)}/>
      </div>

      <div className="text-center w-full">
        <button type="submit" className="bg-yellow-500 w-full text-white font-semibold px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
          Submit
        </button>
      </div>
    </form>
    </div>
    </Layout>
  );
}


export default AddItem;