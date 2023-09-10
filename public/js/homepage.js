//Function to send user to the page to add a comment
const addComment = async (event) => {
  //Check if event has a data-id
  if (event.target.hasAttribute("data-id")) {
    //assign data-id to a variable
    const id = event.target.getAttribute("data-id");
    document.location.replace(`/comment-add/${id}`);
  }
};

//event listener for click
document.querySelector(".blog-button").addEventListener("click", addComment);
