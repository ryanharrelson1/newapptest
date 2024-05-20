import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    caption: {
      type: String,
    },

    img: {
      type: String,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

export default Post;
