import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments = [] }) => {
  console.log("comments", comments);
  //   const { replies } = comments;
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <div key={index}>
            <Comment data={comment} />
            <div className="replies ml-7 pl-3 border border-l-black border-r-0 border-t-0 border-b-0 shadow shadow-lg">
              {/* <Comment key={index} data={comment} />
            <Comment key={index} data={comment} />
            <Comment key={index} data={comment} />
            <Comment key={index} data={comment} /> */}
              <CommentsList comments={comment?.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsList;
