const addComment = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    document.location.replace(`/comment-add/${id}`);
  }
};




document.querySelector(".blog-button").addEventListener("click", addComment);
