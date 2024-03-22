import React from 'react';
import useConversation from '../../Zustand/useConversation';

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;  

  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
    ${isSelected ? "bg-blue-600": ""}`
  }

  onClick={() => setSelectedConversation(conversation)}
    >
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src={conversation.profilePicture} alt={conversation.fullname} />
        </div>
      </div>
      <div className='flex flex-col flex-1'>
        <div className='flex gap-3 justify-between'>
          <p className='font-bold text-gray-200'>{conversation.fullname}</p>
          <span className='text-xl'>{emoji}</span>
        </div>
      </div>
    </div>
    {!lastIdx && <div className='divider my-0 py-0 h-1'></div>}
    </>
  );
};

export default Conversation;
