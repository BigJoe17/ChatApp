import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({  
    message:{
        type:String,
        required:true
    },
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    chatRoomId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ChatRoom',
        // required:false,
    },
    status:{
        type:String,
        enum:['sent','delivered','read'],
        default:'sent'
    },
    messageType:{
        type:String,
        enum:['text','image','video'],
        default:'text'
    }

}, {timestamps:true});

const Message = mongoose.model('Message', messageSchema);
export default Message;