import User from "../models/UserModel.js";
import Post from "../models/postModel.js";
import { v2 as cloudinary } from "cloudinary";

export const CreatePost = async (req, res) => {
  try {
    const { caption, img } = req.body;

    const userId = req.userids._id.toString();

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }

    const result = await cloudinary.uploader.upload(img, {
      folder: "posts",
    });

    const newpost = new Post({
      user: userId,
      caption,
      img: result.secure_url,
    });

    await newpost.save();
    res.status(201).json({ message: "post created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error in create post" });
  }
};

export const GetPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).populate("user");

    if (posts.length === 0) {
      res.status(200).json([]);
    }
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error in getting post" });
  }
};
