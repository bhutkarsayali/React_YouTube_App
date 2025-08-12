import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Music",
  "Podcasts",
  "Chants",
  "React",
  "Cooking",
  "Cricket",
];
const ButtonList = () => {
  return (
    <div className="flex m-5">
      {list.map((name) => (
        <Button key={name} name={name}/>
      ))}
    </div>
  );
};

export default ButtonList;
