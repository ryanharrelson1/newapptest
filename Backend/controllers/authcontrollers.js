import bcrypt from "bcrypt";
import User from "../models/UserModel.js";
import GenToken from "../utils/Gentoken.js";

export const Signup = async (req, res) => {
  try {
    const { name, username, password, profilePic } = req.body;

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "user already Exist Try Again" });
    }
    const salt = await bcrypt.genSalt(12);

    const hashpassword = await bcrypt.hash(password, salt);
    const defaultprofilepic = "https://avatar.iran.liara.run/public/41";

    const newuser = new User({
      name,
      username,
      password: hashpassword,
      profilePic: defaultprofilepic,
    });
    if (newuser) {
      await newuser.save();
      GenToken(newuser._id, res);

      res.status(201).json({
        name: newuser.name,
        _id: newuser._id,
        username: newuser.username,
        profilePic: newuser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid data" });
    }
  } catch (error) {
    res.status(500).json({ error: "interal server error in signup", error });
    console.log(error.message);
  }
};

export const Login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    const ispasswordcorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !ispasswordcorrect) {
      return res
        .status(400)
        .json({ error: "user does not exist or invalid creditentals" });
    }
    GenToken(user._id, res);
    res.status(200).json({
      name: user.name,
      username: user.username,
      _id: user._id,
      profilePic: user.profilePic,
    });
  } catch (error) {
    res.status(500).json({ error: "internal server error in login" });
  }
};

export const Logout = async (req, res) => {
  try {
    res.cookie("key", "", { MaxAge: 0 });

    res.status(200).json({ message: "logged out" });
  } catch (error) {
    res.status(500).json({ error: "internal server error in logout" });
  }
};
