import React, { useState } from 'react';
import useConversation from '../Zustand/useConversation';

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      // Send message to server
      const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, conversationId: selectedConversation._id }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      // Update conversation with new message
     
      setMessages([...message, data]);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default useSendMessage;
