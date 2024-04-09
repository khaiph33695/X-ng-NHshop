import { Router } from "express";
import {
    createAttribute,
    createValueAttribute,
    deleteAttribute,
    getAllAttributes,
    getAttributeById,
    updateAttribute,
} from "../controllers/attribute";

const router = Router();
router.post("/attributes", createAttribute);
router.post("/attributes/:id/values", createValueAttribute);
router.get("/attributes", getAllAttributes);
router.get("/attributes/:id", getAttributeById);
router.put("/attributes/:id", updateAttribute);
router.delete("/attributes/:id", deleteAttribute);

export default router;
