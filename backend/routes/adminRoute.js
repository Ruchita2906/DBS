import express from "express";
import { addDoctor } from "../controllers/adminController.js"; // ✅ added .js
import upload from "../middlewares/multer.js"; // ✅ added .js

const adminRouter = express.Router(); // ✅ consistent lowercase

adminRouter.post("/add-doctor", upload.single("image"), addDoctor); // ✅ same name

export default adminRouter; // ✅ consistent export
