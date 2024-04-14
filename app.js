const express = require( "express")
const morgan = require("morgan") 
const cors = require("cors") 
const products = require("./routes/products.js") 
const users = require("./routes/users.js") 


const app = express()

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(products);
app.use(users);



module.exports= app