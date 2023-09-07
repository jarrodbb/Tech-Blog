const editBlog = () => {
  const currentRoute = document.location;
  const address = currentRoute.href;
  const addressArray = address.split("/");
  const blogId = addressArray[addressArray.length - 1];
  console.log(blogId);

  //   const response = await fetch("/api/blog", {
  //     method: "GET",
  //     body: JSON.stringify({}),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   if (response.ok) {
  //     const data = await response.json();
  //     console.log(data);
  //   } else {
  //     alert("Failed to create project");
  //   }
};

editBlog();
// const title = document.querySelector("#title").value;
// const description = document.querySelector("#content").value.trim();
