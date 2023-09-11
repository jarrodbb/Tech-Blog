//Query selector used to get form and assign to variable
const targetUsername = document.querySelector('.new-comment-form');
console.log(targetUsername);

//Fetch request to get user information
//Request uses session ID
const userMakingComment = async () => {
  const response = await fetch('/api/user/all', {
    method: 'GET',

    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    console.log(data.username);
    //Set attribute of variable assigned using query selector
    targetUsername.setAttribute('data-name', data.username);
  } else {
    alert('Failed');
  }
};
//Call function when page loads
userMakingComment();

//Create new comment
const newComment = async (event) => {
  //This is a form, prevent default required
  event.preventDefault();
  //Check if target has data-id
  if (event.target.hasAttribute('data-id')) {
    //assign data-id to variable
    const blog_id = event.target.getAttribute('data-id');
    //check if target has data-name
    if (event.target.hasAttribute('data-name')) {
      //assign data-name to variable
      const user_username = event.target.getAttribute('data-name');
      //get value of description from form
      const comment_description = document
        .querySelector('#comment')
        .value.trim();
      //If description inputted call api to create comment
      if (comment_description) {
        const response = await fetch('/api/comment', {
          method: 'POST',
          body: JSON.stringify({ blog_id, comment_description, user_username }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        //if response is OK, got to page with comment and blog post
        if (response.ok) {
          document.location.replace(`/blogWithComment/${blog_id}`);
        } else {
          alert('Failed to update ');
        }
      }
    }
  }
};

//Event listener for form submit
document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newComment);
