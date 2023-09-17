const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = form.querySelector('input[name="username"]').value;
  const email = form.querySelector('input[name="email"]').value;
  const password = form.querySelector('input[name="password"]').value;

  // TODO: Validate the input

  // TODO: Send the data to the server

  // TODO: Redirect the user to the home page
});