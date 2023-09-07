const newComment = (event) => {
  if (event.target.hasAttribute("data-id")) {
    document.location.replace("/createblog");
  }
};

document.querySelector(".button").addEventListener("submit", newComment);
