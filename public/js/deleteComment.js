//Function to delete comment
const delButtonHandler = async (event) => {
  //Checks if target has data-id
  if (event.target.hasAttribute("data-id")) {
    //assigns data-id to variable
    const id = event.target.getAttribute("data-id");
    //calls API to delete comment by ID
    const response = await fetch(`/api/comment/${id}`, {
      method: "DELETE",
    });
    //if response is ok, load homepage
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to delete ");
    }
  }
};

//Event listener for click
document
  .querySelector(".delete-now")
  .addEventListener("click", delButtonHandler);
