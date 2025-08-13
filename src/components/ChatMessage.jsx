import React, { useEffect, useState } from "react";

const ChatMessage = ({ name, message }) => {
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    const colors = ["#f87171", "#34d399", "#60a5fa", "#fbbf24", "#a78bfa"];
    const random = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(random);
  });

  return (
    <div>
      <div className="flex items-center shadow p-2">
        <div
          className="h-10 w-10 rounded-full flex items-center justify-center"
          style={{ backgroundColor: bgColor }}
        >
          <div> {name[0]}</div>
        </div>
        <div className="ml-3">
          <span className="font-bold">{name}</span>
          <span className="ml-2">{message}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
