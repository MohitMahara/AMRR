import { Router } from "express";
import { addItem, getAllItems, getItemById } from "../controllers/itemControllers.js";
const router = Router();


router.post("/add-item", addItem);
router.get("/all-items", getAllItems);
router.get("/get-item/:pid", getItemById);

export default router;