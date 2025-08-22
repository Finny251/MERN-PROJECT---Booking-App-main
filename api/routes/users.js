import express from "express";
<<<<<<< HEAD
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//   res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//   res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//   res.send("hello admin, you are logged in and you can delete all accounts")
// })

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);

=======
import { updateUser,deleteUser, getUser, getUsers } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();
/***
 router.get("/checkauthentication",verifyToken,(req,res,next)=>{
  res.send("Hello user, you are logged in")
})

router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
  res.send("Hello user, you are logged in and you can delete your account")
})
router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
  res.send("Hello admin, you are logged in and you can delete all account")
})

***/
//UPDATE
router.put("/:id",verifyUser,updateUser);
//DELETE
router.delete("/:id",verifyUser,deleteUser);

//GET

router.get("/:id",verifyUser,getUser);
//GET ALL
router.get("/",verifyAdmin,getUsers);
>>>>>>> 895f4278cd300f98295191297723a8c0711282fe
export default router;
