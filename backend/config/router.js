import express from "express"
import CategoryController from "../controllers/CategoryController.js"
import ProductController from "../controllers/ProductController.js";

const router = express.Router();

//Category Routes
router.get("/category",CategoryController.get)
router.post("/category",CategoryController.add)
router.put("/category",CategoryController.edit)
router.delete("/category",CategoryController.delete)

//Product Routes
router.get("/product",ProductController.get)
router.post("/product",ProductController.add)
router.put("/product",ProductController.edit)
router.delete("/product",ProductController.delete)

export default router;