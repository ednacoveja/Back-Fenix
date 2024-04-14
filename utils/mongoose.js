const mongoose = require("mongoose") 
const {config} = require("dotenv") 
config()
const MONGODB = process.env.MONGODB_URI


export async function connectToDB(){
  try{
      await mongoose.connect(MONGODB )
      console.log("MongoDB conectado")
  }
  catch(error){
    console.error(error)
  }
}