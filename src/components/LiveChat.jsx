import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      //API polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "👌",
        })
      );
      console.log("API POLLLING");
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const submitChatMessage = (liveMessage) => {
    dispatch(
      addMessage({
        name: "Sayali bhutkar",
        message: liveMessage,
      })
    );
  };
  return (
    <div className="shadow-black shadow-md p-2 h-[600px] w-full bg-slate-100 ">
      <div className="h-[500px] overflow-auto flex flex-col-reverse">
        {
          // Dont use indexe as key
          chatMessages.map((msg, index) => (
            <ChatMessage key={index} name={msg.name} message={msg.message} />
          ))
        }
      </div>
      <form
        className="flex justify-between p-2 items-center h-[100px]"
        onSubmit={(e) => {
          e.preventDefault();
          submitChatMessage(liveMessage);
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="p-2 border border-gray-500 bg-white w-100"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button
          onClick={() => submitChatMessage(liveMessage)}
          type="submit"
          className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          <span>Send</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
