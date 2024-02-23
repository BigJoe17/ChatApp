import User from "../models/user.model.js";

export const getUsersForSideBar = async (req, res) => {

    try {

        const LoggedInUserId = req.user._id;

        const allusersId = await User.find({ _id: { $ne: LoggedInUserId } }).select("-password");

        return res.status(200).json(allusersId);

    } catch (err) {
        console.error("error in getUsersForSideBar", err.message)
        res.status(500).json({ error: "internal server error" });
    }
}
