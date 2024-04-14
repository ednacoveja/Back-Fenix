const { Router } =require("express") 
const {
  getUsers,
  getUserId,
  createUser,
  updateUser,
  deleteUser
} =require( "../controllers/users.js")
const fileUpload =require("express-fileupload") 


const router = Router()

router.get("/users", getUsers)
router.get("/users/:id", getUserId)
router.post("/users",fileUpload({
  useTempFiles: true,
  tempFileDir: "./uploadsUser/"
}),createUser)
router.put("/users/:id", updateUser)
router.delete("/users/:id", deleteUser)

module.exports=router