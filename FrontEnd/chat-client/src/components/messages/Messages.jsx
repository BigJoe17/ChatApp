import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";

import Message from "./Message";
import MessageSkeleton from "../skeleton/MessageSkeleton";

const Messages = () => {
	const { messages, loading } = useGetMessages();
	console.log("Messages: ", messages);

	const lastMessageRef = useRef(null);
	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 1000);
		
	}, [messages])

	return (
		<div className="px-4 flex-1 overflow-auto">
			{!loading && messages.length > 0 && messages.map((message) => (
				<Message key={message._id} message={message} />
			))} {/* Corrected the mapping of messages and removed unnecessary closing parenthesis */}
			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton className="text-center" key={idx} />)}
			{!loading && messages.length === 0 && (
				<p className='text-gray-300 px-4 py-4'>Send a message to begin the conversation</p>
			)}
		</div>
	);
};

export default Messages;
