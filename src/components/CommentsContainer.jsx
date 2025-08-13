import React from "react";
import CommentsList from "./CommentsList";
// import commentsData from "./../utils/mocks/commentData";

const commentsData = [
  {
    name: "Level 1 Sayali Bhutkar",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
    replies: [
      {
        name: "Level 2 Sayali Bhutkar",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
        replies: [
          {
            name: "Level 3 Sayali Bhutkar",
            text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
            replies: [
              {
                name: "Level 4 Sayali Bhutkar",
                text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Level 1 Sayali Bhutkar",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
    replies: [
      {
        name: "Level 2 Sayali Bhutkar",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
        replies: [
          {
            name: "Level 3 Sayali Bhutkar",
            text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
            replies: [
              {
                name: "Level 4 Sayali Bhutkar",
                text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
                replies: [
                  {
                    name: "Level 5 Sayali Bhutkar",
                    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
                  },
                ],
              },
              {
                name: "Level 4.1 Sayali Bhutkar",
                text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
              },
            ],
          },
          {
            name: "Level  3.1 Sayali Bhutkar",
            text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
          },
        ],
      },
    ],
  },
  {
    name: "Level 1 Sayali Bhutkar",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
    replies: [
      {
        name: "Sayali Bhutkar",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
        replies: [
          {
            name: "Sayali Bhutkar",
            text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
          },
        ],
      },
    ],
  },
  {
    name: "Level 1 Sayali Bhutkar",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
    replies: [
      {
        name: "Sayali Bhutkar",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
      },
    ],
  },
  {
    name: "Level 1 Sayali Bhutkar",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
    replies: [
      {
        name: "Sayali Bhutkar",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
      },
    ],
  },
];
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
