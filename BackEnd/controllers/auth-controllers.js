import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateAccessToken from "../utils/generateTokens.js";
import jwt from "jsonwebtoken"

export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;
    console.log("sent data");

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      // User with the given username already exists
      return res.status(400).json({ message: "User already exists" });
    }

    // No existing user found, it's safe to proceed with password hashing
    const hashedPassword = await bcrypt.hash(password, 10); // salt rounds = 10

    const profileBoyPic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const profileGirlPic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const profilePicture = gender === "male" ? profileBoyPic : profileGirlPic;

    const newUser = new User({
      fullname,
      username,
      password: hashedPassword, // Save hashed password instead of plain password
      gender,
      profilePicture,
    });

    generateAccessToken(newUser._id, res);

    const profile = await newUser.save();
    console.log(profile);
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    const passwordMatch = await bcrypt.compare(password, user?.password || "");

    if (!user || !passwordMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    generateAccessToken(user._id, res);

    res.status(200).json({
      message: "Logged in successfully",
    });
    console.log("Logged in successfully");
    // Passwords match, generate and send access token
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const logout = async (req, res) => {
  try{
    res.clearCookie("jwt", "token", {maxAge: 0}, {httpOnly: true}, {sameSite: "strict"});
    res.status(200).json({ message: "Logged out successfully" });
  }catch(err){
    console.error(err);
    res.status(500).json({ message: "Internal server error" }); 

  }

};
