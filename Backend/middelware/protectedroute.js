import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";

const ProtectedRoute = async (req, res, next) => {
  try {
    const token = req.cookies.key; // Ensure this matches the actual cookie name

    if (!token) {
      return res.status(401).json({ error: "Unauthorized access denied" });
    }

    // Verify the token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.TOKEN_KEY);
    } catch (error) {
      return res.status(401).json({ error: "Invalid token" });
    }

    // Check if the decoded token contains the correct userId field
    if (!decoded.userId) {
      return res.status(401).json({ error: "Invalid token payload" });
    }

    // Find user by decoded token ID
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.userids = user;

    next();
  } catch (error) {
    console.error("Error in ProtectedRoute middleware:", error);
    res.status(500).json({ error: "Server error in protected route" });
  }
};

export default ProtectedRoute;
