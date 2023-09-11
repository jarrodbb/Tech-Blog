// loads the page for the user to create a blog if button is clicked

const newComment = (event) => {
  if (event.target.hasAttribute('data-id')) {
    document.location.replace('/createblog');
  }
};

//Event listener for submit
document.querySelector('.button').addEventListener('submit', newComment);
