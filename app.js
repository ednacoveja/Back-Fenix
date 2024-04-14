import express from "express"
import morgan from "morgan"
import cors from "cors"
import products from "./routes/products.js"
import users from "./routes/users.js"


const app = express()

app.use(cors());
app.use(morgan("dev"))
app.use(express.json())
app.use(products)
app.use(users)



export default app