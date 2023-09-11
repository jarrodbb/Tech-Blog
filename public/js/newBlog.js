//Function to create new blog

const newBlog = async (event) => {
  //Prevent default
  event.preventDefault();
  //Get form values and assign to variables
  const title = document.querySelector('#title').value;
  const description = document.querySelector('#content').value.trim();
  //If title and description are included, call API to create Blog
  if (title && description) {
    const response = await fetch('/api/blog', {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      //Redirect to dashboard
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create project');
    }
  }
};

//Event listener for submit
document.querySelector('.new-blog-form').addEventListener('submit', newBlog);
