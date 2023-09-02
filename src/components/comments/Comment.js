import React from "react";

const Comment = ({ data }) => {
  const { name, text} = data;
  return (
    <div className="flex w-[1250px] shadow-sm bg-gray-300 p-2 rounded-lg my-2">
      <img
      className="w-12 h-12" 
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />

      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p className="font-medium">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
