import React, { useState } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { BsChatDots } from 'react-icons/bs';

const MsgContainer = () => {
  const [isChatSelected, setIsChatSelected] = useState(false);

  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {isChatSelected ? (
        /* Render messages and message input when a chat is selected */
        <>
          {/* Header */}
          <div className='px-2 bg-blue-900 py-2 gap-2'>
            <span className='label-text text-gray-50'>To: </span>
            <span className='text-gray-200 font-bold'>Joshua Olu</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      ) : (
        /* Render the "no chat selected" component when no chat is selected */
        <NoChatSelected />
      )}
    </div>
  );
};

export default MsgContainer;

export const NoChatSelected = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <BsChatDots className='text-8xl text-gray-400 mb-4' />
      <p className='text-gray-500 text-2xl mb-2 text-center'>Welcome 👋 Joshua Olu<br />
        <span className=''> No chat selected
        </span></p>
      <p className='text-gray-500'>Click on a chat to start messaging</p>
    </div>
  );
};
