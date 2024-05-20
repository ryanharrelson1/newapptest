import jwt from "jsonwebtoken";

const GenToken = (userId, res) => {
  console.log("toke userpayload", userId);
  const token = jwt.sign({ userId }, process.env.TOKEN_KEY, {
    expiresIn: "30m",
  });

  res.cookie("key", token, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 30 * 60 * 1000,
  });
};

export default GenToken;
