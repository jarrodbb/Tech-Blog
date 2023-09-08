const targetUsername = document.querySelector("data-name");

const userMakingComment = async () => {
  // const currentRoute = document.location;
  // const address = currentRoute.href;
  // const addressArray = address.split("/");
  // const blogId = addressArray[addressArray.length - 1];
  // console.log(blogId);

  const response = await fetch("/api/user/all", {
    method: "GET",

    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    console.log(data.username);

    targetUsername.setAttribute("data-name", data.username);
    // console.log(targetUsername)
  } else {
    alert("Failed");
  }
};
userMakingComment();

const newComment = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute("data-id")) {
    const blog_id = event.target.getAttribute("data-id");

    if (event.target.hasAttribute("data-name")) {
      const user_username = event.target.getAttribute("data-name");

      const comment_description = document
        .querySelector("#comment")
        .value.trim();

      if (comment_description) {
        const response = await fetch(`/api/comment`, {
          method: "POST",
          body: JSON.stringify({ blog_id, comment_description, user_username }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          document.location.replace("/");
        } else {
          alert("Failed to update ");
        }
      }
    }
  }
};

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newComment);
