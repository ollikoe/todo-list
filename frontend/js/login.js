document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    
    // Send login credentials to the backend
    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            password
        })
    });

    const result = await response.json();

    if (response.ok) {
        // Redirect or take further actions on successful login
        alert('Login successful!');
        window.location.href = '/dashboard';
    } else {
        // Show error message
        document.getElementById('errorMessage').innerText = result.message || 'Login failed';
    }
});
