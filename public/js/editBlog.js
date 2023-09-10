//Get element by ID and assign to variable
const descriptionInput = document.getElementById("content");
//Get element by ID and assign to variable
const titleInput = document.getElementById("title");

//Assign location to variable
const currentRoute = document.location;
//Assign URL to variable
const address = currentRoute.href;
//Split variable and assign to new Array
const addressArray = address.split("/");
//Get last position of Array
const blogId = addressArray[addressArray.length - 1];
console.log(blogId);

//Make a get request to get one blog by ID
const editBlog = async () => {
  const response = await fetch(`/api/blog/${blogId}`, {
    method: "GET",

    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const data = await response.json();
    // Assign values from Get request to input fields in form
    descriptionInput.textContent = `${data.description}`;
    titleInput.textContent = `${data.title}`;
    console.log(data);
  } else {
    alert("Failed to create project");
  }
};

//Call function when page loads
editBlog();

//Function to update blog
const updateBlogInfo = async (event) => {
  //Prevent defalut
  event.preventDefault();
  //Get new date
  const date = new Date();
  //format date
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  const newDate = `${year}-${month}-${day}`;
  //Get values of form and assign to variables
  const title = document.querySelector("#title").value.trim();
  const description = document.querySelector("#content").value.trim();

  //make a Put request for a blog by ID
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
      //Alert to inform the user to update the blog before submitting
      alert("Please make changes to the Blog before submitting");
    }
  }
};

//Function to delete blog
const delButtonHandler = async (event) => {
  //Check if target has data-id
  if (event.target.hasAttribute("data-id")) {
    //assign data-id
    const id = event.target.getAttribute("data-id");
    //make a fetch request to Delete by ID
    const response = await fetch(`/api/blog/${id}`, {
      method: "DELETE",
    });
    //If ok. render the dashboard
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete ");
    }
  }
};

//Event listener for updating blog
document
  .querySelector(".edit-blog-form")
  .addEventListener("submit", updateBlogInfo);

//Event listener for deleting
document
  .querySelector(".delete-now")
  .addEventListener("click", delButtonHandler);
