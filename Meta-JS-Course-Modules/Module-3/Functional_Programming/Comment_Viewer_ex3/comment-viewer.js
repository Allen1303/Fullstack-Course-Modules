"use strict";

// 1. Define the comment data
const commentsData = [
  {
    author: "Alice",
    text: "This is a great post!",
    replies: [
      {
        author: "Bob",
        text: "I agree with Alice.",
        replies: [
          {
            author: "Charlie",
            text: "Thanks Bob and Alice!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    author: "Dave",
    text: "I have a different opinion.",
    replies: [],
  },
];
// 2. Cache the DOM element
const commentTree = document.getElementById("commentTree");
// 3. Create a function `renderComments(commentObj, parentElement)`
function renderComments(commentObj, parentElement) {
  //HOF declaration
  const li = document.createElement("li"); // locally scope variable (li)
  li.textContent = `${commentObj.author}: ${commentObj.text}`;
  parentElement.appendChild(li);

  if (commentObj.replies && commentObj.replies.length > 0) {
    const ul = document.createElement("ul");
    li.appendChild(ul);
    //Recursive call that iterate through each replies.
    commentObj.replies.forEach( (reply) => renderComments(reply, ul));
  }
}

commentsData.forEach((comment) => renderComments(comment, commentTree));
