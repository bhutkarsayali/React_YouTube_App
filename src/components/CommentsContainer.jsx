import React from "react";
import CommentsList from "./CommentsList";
import { commentsData } from "./../utils/mocks/commentData";

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl my-5">Comments</h1>
      {/* <Comment data={commentsData[0]} /> */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
