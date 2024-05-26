import express from 'express'
import {register} from '../controllers/auth.js'
import {updateUser,deleteUser,getUser,getUsers

} from '../controllers/users.js'
import {verifyToken,verifyUser,verifyAdmin} from '../utils/verifyToken.js'

const router = express.Router();

//create user route
router.post("/",verifyAdmin, register);
// Update route
router.put("/:id",verifyUser,updateUser)
// Delete Route
router.delete("/:id",verifyAdmin, deleteUser)

//GET
router.get("/:id",verifyUser, getUser)

// GET ALL
router.get("/",getUsers)



export default router