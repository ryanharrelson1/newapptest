import express from "express";
import { CreatePost, GetPosts } from "../controllers/postcontroller.js";
import ProtectedRoute from "../middelware/protectedroute.js";

const router = express.Router();

router.post("/create", ProtectedRoute, CreatePost);
router.get("/getposts", ProtectedRoute, GetPosts);

export default router;
