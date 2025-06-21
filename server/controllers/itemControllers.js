import formidable from "formidable"
import itemModel from "../models/itemModel.js";
import cloudinary from "../utils/cloudinary.js";

export const addItem = async(req, res) => {
    try {
        const form = formidable({multiples : true});

        form.parse(req, async(err, fields, files) => {

           if(err){
             return res.status(500).send({
                success : false,
                msg : "Failed to load files"
             })
           }

           try{

           const coverImg = files?.coverImg[0].filepath;
           const additionalImgs = files?.additionalImgs;
           const addiImgsUrl = new Array();

           if(additionalImgs){
             const addiImgsPaths = new Array();
             const imgs = Array.isArray(additionalImgs) ? additionalImgs : [additionalImgs];

             for(const img of imgs){
                addiImgsPaths.push(img.filepath);
              }

            for(const path of addiImgsPaths){
               const result = await cloudinary.uploader.upload(path, {
                   folder: "AMRR/ITEMS",
               });

              addiImgsUrl.push(result.secure_url);
            }

           }

            const coverImgResult = await cloudinary.uploader.upload(coverImg, {
                folder: "AMRR/ITEMS",
            });

            const coverimgURL = coverImgResult.secure_url;

            if(!coverimgURL){
                return res.status(400).send({
                    success : false,
                    msg : "cover image upload failed",
                })
            }


           const {name, type, description} = fields;

           if(! name ||! type){
              return res.status(400).send({
                 success : false,
                 msg : "Item name and type must be provided"
              })
           }


          const newItem = await new itemModel({
            name : name[0],
            type : type[0],
            description : description[0],
            coverImg : coverimgURL,
            additionalImgs : addiImgsUrl
          }).save();

            
           res.status(200).send({
             success : true,
             msg : "Item added !",
             newItem
           })

        }catch(error){
           return res.status(400).send({
               success : false,
               msg : error.message
           })
        }

     })


    } catch (error) {
        return res.status(500).send({
            success : false,
            msg : error.message
        })
    }
}


export const getAllItems = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}



export const getItemById = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}




export const deleteItem = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}