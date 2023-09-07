const newBlog = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const description = document.querySelector("#content").value.trim();

  if (title && description) {
    const response = await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify({ title, description }),
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

document.querySelector(".new-blog-form").addEventListener("submit", newBlog);
