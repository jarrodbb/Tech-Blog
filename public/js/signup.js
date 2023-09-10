//Function to create new user
const newUser = async (event) => {
  event.preventDefault();
  //Assign form values to variables
  const username = document.querySelector("#username").value.trim();

  const password = document.querySelector("#password-signup").value.trim();
  //If username and password are included, call API to create new user
  if (username && password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      //redirect to dashboard
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create project");
    }
  }
};
//event listener for submit
document.querySelector(".new-user-form").addEventListener("submit", newUser);
