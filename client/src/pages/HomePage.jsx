import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const HomePage = () => {
    return <>
        <Layout>
            <div className="flex justify-center items-center h-screen flex-col">
              <h1 className="text-5xl text-gray-900 font-bold">Add a New Item</h1>
              <Link to={"/add-items"} className="bg-yellow-500 text-white px-8 py-2 rounded-lg mt-8 font-semibold cursor-pointer">Add</Link>
            </div>

        </Layout>    
    </>
}

export default HomePage;