import jwt from "jsonwebtoken";

export const generateAccessToken = (userId, res) => {
    const token = jwt.sign({userId}, process.env.ACCESS_TOKEN_SECRET,{
        expiresIn: "15d"
    });    

    res.cookie("jwt", token,{
        maxAge: 15*24*60*60*1000,
        httpOnly: true,
        sameSite:"strict",

    })


}

export default generateAccessToken;