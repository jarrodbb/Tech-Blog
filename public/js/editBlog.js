const descriptionInput = document.getElementById("content");
const titleInput = document.getElementById("title");

const currentRoute = document.location;
const address = currentRoute.href;
const addressArray = address.split("/");
const blogId = addressArray[addressArray.length - 1];
console.log(blogId);

const editBlog = async () => {
  const response = await fetch(`/api/blog/${blogId}`, {
    method: "GET",

    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const data = await response.json();
    descriptionInput.textContent = `${data.description}`;
    // const currentBlogDescription = `${data.description}`;
    titleInput.textContent = `${data.title}`;
    console.log(data);
    // if (descriptionInput.textContent != currentBlogDescription) {
    //   document.querySelector("form button").classList.remove("display-none");
    // }
  } else {
    alert("Failed to create project");
  }
};

editBlog();

const updateBlogInfo = async (event) => {
  event.preventDefault();

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const newDate = `${year}-${month}-${day}`;
  const title = document.querySelector("#title").value.trim();
  const description = document.querySelector("#content").value.trim();

  if (title && description) {
    const response = await fetch(`/api/blog/${blogId}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        description,
        newDate,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return document.location.replace("/dashboard");
    } else {
      alert("Please make changes to the Blog before submitting");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/blog/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete ");
    }
  }
};

document
  .querySelector(".edit-blog-form")
  .addEventListener("submit", updateBlogInfo);

document
  .querySelector(".delete-now")
  .addEventListener("click", delButtonHandler);
