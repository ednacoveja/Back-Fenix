const mongoose=require("mongoose")

const productSchema = mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true,
    unique:true,
  },
  type:{
    type:String,
  },
  cantidad:{
    type:String,
  },
  description:{
    type:String,
    trim:true,
  },
  price:{
    type:Number,
    default:0
  },
  image:{
    type:String,
  },
  emprendimiento:{
    type:String,
    trim:true,
  },
  urlDelete:{
     type:String,
  }
},{
  timestamps:true
})

module.exports= mongoose.model("Product", productSchema)