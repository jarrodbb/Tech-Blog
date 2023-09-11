//Handle log out request

const logout = async () => {
  //Calls the API to handle logging out
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    //Redirects to homepage
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

//Event listener for click
document.querySelector('#logout').addEventListener('click', logout);
