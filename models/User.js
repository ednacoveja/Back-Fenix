const mongoose=require("mongoose")

const userSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  instagram: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  urlDelete: {
    type: String,
  }
}, {
  timestamps: true
})

module.exports= mongoose.model("User", userSchema)