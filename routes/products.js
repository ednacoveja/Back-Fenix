const { Router } = require("express") 
const {
  getProducts,
  getProductId,
  createProducts,
  updateProducts,
  deleteProducts
} = require("../controllers/products.js") 
const fileUpload = require( "express-fileupload")

const router = Router()

router.get("/products", getProducts)
router.get("/products/:id", getProductId)
router.post("/products", fileUpload({
  useTempFiles: true,
  tempFileDir: "./uploads/"
}), createProducts)
router.put("/products/:id", updateProducts)
router.delete("/products/:id", deleteProducts)

module.exports=router