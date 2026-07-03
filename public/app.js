const form = document.getElementById('login-form');
const result = document.getElementById('result');
const welcomeText = document.getElementById('welcome-text');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const username = formData.get('username');
  const password = formData.get('password');

  if (username === 'student' && password === 'bootcamp123') {
    welcomeText.textContent = `Welcome, ${username}. Your automation passed.`;
    result.classList.remove('hidden');
    return;
  }

  welcomeText.textContent = 'Login failed. Check the test data.';
  result.classList.remove('hidden');
});
