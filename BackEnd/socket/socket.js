import socketIO from "socket.io";
import http from "http";
import Message from "./models/message.model.js";

const setupSocket = (server) => {
  const io = socketIO(server);

  io.on("connection", (socket) => {
    console.log("New client connected");

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });

    socket.on("joinRoom", (roomId) => {
      socket.join(roomId);
      console.log(`Socket ${socket.id} joined room ${roomId}`);
    });

    socket.on("sendMessage", async (messageData) => {
      try {
        const { chatRoomId, message, senderId } = messageData;

        const newMessage = new Message({
          senderId,
          chatRoomId,
          message,
        });

        await newMessage.save();

        io.to(chatRoomId).emit("message", newMessage);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }

const socket = setupSocket(server);