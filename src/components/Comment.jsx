import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <>
      <div className="flex items-center p-3 bg-gray-200 shadow-lg mb-3">
        <img
          className="h-10 w-10"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        <div className="ml-5">
          <div className="font-bold">{name}</div>
          <div>{text}</div>
        </div>
      </div>
    </>
  );
};

export default Comment;
