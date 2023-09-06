const newUser = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();

  const password = document.querySelector("#password-signup").value.trim();

  if (username && password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create project");
    }
  }
};

document.querySelector(".new-user-form").addEventListener("submit", newUser);
