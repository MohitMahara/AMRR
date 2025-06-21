import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ItemPage = () => {
  const { pid } = useParams();
  const [item, setItem] = useState(null);
  const [enqBtnText, setEnqBtnText] = useState("Enquire");

  const getItemById = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/api/v1/items/get-item/${pid}`
      );

      if (res.data.success) {
        setItem(res.data.item);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getItemById();
  }, []);


  const handleEnquiry = async() =>{
    try {
        setEnqBtnText("Enquiring...");
        const name = item?.name;
        const itemId = item?._id;
        const res = await axios.post(`${import.meta.env.VITE_SERVER_API}/api/v1/items/enquire`, {name, itemId});

        if(res.data.success){
            toast.success("Enquiry releated to this item has been sent to admin.");
            setEnqBtnText("Enquire");
        }
    } catch (error) {
        toast.error(error.message);
    }
  }

  return (
    <>
      <Layout>
        <div className="w-full px-4 md:px-10 mx-auto py-8 ">
          <div className="flex flex-col">
            <div className="coverPage w-full rounded-sm flex flex-col md:flex-row gap-4">
              <img src={item?.coverImg} alt={item?.name} className="w-full h-[200px] md:h-[80vh] md:w-[50%] rounded-md"/>
              <div className="px-4 py-2 w-full md:w-[50%]">
                <p className="text-4xl text-gray-900 font-bold md:text-center mb-2">{item?.name}</p>
                <p className="text-lg text-gray-700 mb-2">Category - {item?.type}</p>
                <p className="text-lg text-gray-700">{item?.description}</p>
              </div>
            </div>

        { item?.additionalImgs.length > 0 && <>
            <div>
              <h2 className="text-2xl text-gray-900 my-8 font-bold"> Additional Images </h2>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="w-full max-w-2xl"
              >
                {item?.additionalImgs.map((path) => {
                    return <SwiperSlide>
                        <div className="flex flex-col h-[400px] md:h-[500px] w-full">
                           <img src={path} alt={item?.name} className="w-full img-cover h-[300px] md:h-[400px] rounded-lg" />
                           <button className="bg-gray-700 px-4 py-2 rounded-full text-gray-100 my-2 w-[20%] mx-auto cursor-pointer hover:bg-gray-600" onClick={handleEnquiry}>{enqBtnText}</button>
                        </div>
                        </SwiperSlide>
                })}

              </Swiper>
            </div>
            </>
           }
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ItemPage;
