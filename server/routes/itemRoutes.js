import { Router } from "express";
import { addItem, getAllItems, getItemById, itemEnquiryController } from "../controllers/itemControllers.js";
const router = Router();


router.post("/add-item", addItem);
router.get("/all-items", getAllItems);
router.get("/get-item/:pid", getItemById);
router.post("/enquire", itemEnquiryController);

export default router;