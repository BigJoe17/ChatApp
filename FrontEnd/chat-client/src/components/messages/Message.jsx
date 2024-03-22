import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const profilePicture = fromMe ? authUser.profilePicture : selectedConversation?.profilePicture || ''; // Added fallback value

	const timeElapsed = Date.now() - new Date(message.createdAt).getTime();
    let deliveryStatus;

    if (timeElapsed < 60000) { // Less than a minute
        deliveryStatus = "Just now";
    } else if (timeElapsed < 3600000) { // Less than an hour
        deliveryStatus = `${Math.floor(timeElapsed / 60000)} minutes ago`;
    } else if (timeElapsed < 86400000) { // Less than a day
        deliveryStatus = `${Math.floor(timeElapsed / 3600000)} hours ago`;
    } else { // More than a day
        deliveryStatus = `${Math.floor(timeElapsed / 86400000)} days ago`;
    }


    const bubbleBgColor = fromMe ? "bg-blue-500" : "";

    return (
        <>
            <div className={`chat ${chatClassName}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Profile" src={profilePicture} />
                    </div>
                </div>
                <div className="chat-header w-4/6">
                    {!fromMe && <span className="text-xs opacity-50">{selectedConversation?.fullname}</span>}
                    <time className="text-xs opacity-50">{formattedTime}</time>
                </div>
                <div className={`chat-bubble ${bubbleBgColor}`}>{message.message}</div> {/* Use bubbleBgColor dynamically */}
                <div className="chat-footer opacity-80 gap-1 flex text-xs">
                    {fromMe && <span className="text-blue-500">{deliveryStatus}</span>}
                </div>
            </div>
        </>
    );
}

export default Message;
