const Message = () => {
  return (
     <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounder-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="avatar image"
          />
        </div>
      </div>
      <div className="chat-header">
        John Doe
        <time className="text-xs opacity-50">12:46</time>
      </div>
      <div className="chat-bubble text-white bg-gray-700">Hey, what is up?</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
    </div>
  )
};

export default Message;
