import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import axios from "axios";

const ViewItems = () => {
    const [allItems, setAllItems] = useState([]);
    
    const getAllItems = async() => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_SERVER_API}/api/v1/items/all-items`);

        if(res.data.success){
            setAllItems(res.data.allItems);
        }
        
      } catch (error) {
        toast.error(error.message);
      }
    }

    useEffect(() => {
       getAllItems();
    }, [])


    return <>
       <Layout>
         <div className="w-full md:w-5xl px-4 py-6 mx-auto bg-gray-50">
             <h1 className="text-3xl text-center text-gray-900 font-semibold mb-6">All Items</h1>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                 {
                    allItems?.map((item) => {
                      return (
                        <Link to={`/item/${item?._id}`} className="bg-white shadow-lg flex flex-col p-2">
                            <div className="bg-white rounded-md">
                               <img src={item?.coverImg} alt={item.name} className="rounded-md w-full"/>
                            </div>
                            <p className="text-md mt-2 text-gray-900 font-bold">{item.name}</p>
                            <p className="text-sm mt-2 text-gray-700">{item.description}</p>
                        </Link>
                      )
                    })
                 }
             </div>
         </div>

       </Layout>
    </>
}

export default ViewItems;