const Product =require("../models/Product.js") 
const { uploadImageProducts, deleteImage } =require("../utils/cloudinary.js")
const fs =require("fs-extra")  


const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .sort({ createdAt: -1 })
    res.json(products)
  }
  catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

const getProductId = async (req, res) => {
  try {
    const productId = await Product.findById(req.params.id)
    if (!productId) return res.satus(404).json({
      message: "Product does not exists"
    })
    return res.json(productId)
  }
  catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

const createProducts = async (req, res) => {
  try {
    const { name, description, price, type, cantidad, emprendimiento } = req.body
    const newProduct = new Product({
      name,
      description,
      price,
      type,
      cantidad,
      emprendimiento,
    })
    if (req.files) {
      const result = await uploadImageProducts(req.files.image.tempFilePath)
      newProduct.image = result.secure_url
      newProduct.urlDelete = result.public_id

      await fs.unlink(req.files.image.tempFilePath)
    }
  
    await newProduct.save()
    res.json(newProduct)
  }
  catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

const updateProducts = async (req, res) => {
  try {
    const { id } = req.params
    const productUpdated = await Product.findByIdAndUpdate(id, req.body, {
      new: true
    })
    return res.json(productUpdated)
  }
  catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


const deleteProducts = async (req, res) => {
  try {
    const productDelete = await Product.findByIdAndDelete(req.params.id)

    if (!productDelete) return res.satus(404).json({
      message: "Product does not exists"
    })
    if (productDelete.urlDelete) {
      await deleteImage(productDelete.urlDelete, "fenix-replit/products")
    }
    return res.json(productDelete)
  }
  catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getProducts,
  getProductId,
  createProducts,
  updateProducts,
  deleteProducts
};