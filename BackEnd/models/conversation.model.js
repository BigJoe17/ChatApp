import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" , required: true}],
    messages: [
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message",
        default:[],
      },
    ],
    lastActivity: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
