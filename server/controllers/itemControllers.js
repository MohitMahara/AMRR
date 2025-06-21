import formidable from "formidable"
import itemModel from "../models/itemModel.js";
import cloudinary from "../utils/cloudinary.js";
import nodemailer from "nodemailer";

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
      const allItems = await itemModel.find();

      return res.status(200).send({
        msg : "all items has been fetched",
        success : true,
        allItems
      })
        
    } catch (error) {
        return res.status(500).send({
            success : false,
            msg : error.message
        })
    }
}



export const getItemById = async(req, res) => {
    try {
       const {pid} = req.params;

       if(!pid){
        return res.status(400).send({
            msg : "item id is must",
            success : false
        });
       }

       const item = await itemModel.findById(pid);

       if(!item){
        return res.status(400).send({
            msg : "item not found",
            success : false
        });
       }

        return res.status(200).send({
            msg : "item found",
            success : true,
            item
        });
        
    } catch (error) {
       return res.status(500).send({
         success : false,
         msg : error.message
        })
    }
}



export const itemEnquiryController = async(req, res) => {
    try {
        const {name, itemId} = req.body;

        const transporter = nodemailer.createTransport({
            service : "gmail",
            auth : {
                user : process.env.EMAIL_USER,
                pass : process.env.EMAIL_PASS,
            }
        })

        const mailOptions = {
            from : "ackerman5023@gmail.com",
            to :   "admin@amrr.com", 
            subject : "Product Enquiry",
            text : `User is interested in the product : ${name}\n\n product id is : ${itemId}`
        }

        await transporter.sendMail(mailOptions);

        return res.status(200).send({
            msg : "item details has been sent to admin for enquiry",
            success : true
        })
        
    } catch (error) {
        return res.status(500).send({
         success : false,
         msg : error.message
        })
    }
}