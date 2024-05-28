document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  const contact = document.getElementById('contact').value;
  const password = document.getElementById('password').value;

  // For now, just log the values to the console
  console.log('Email:', email);
  console.log('Contact Number:', contact);
  console.log('Password:', password);

  // You can add further logic here to handle login, e.g., sending data to a server
});
