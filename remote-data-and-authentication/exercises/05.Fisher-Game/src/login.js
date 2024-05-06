document.querySelector('form').addEventListener('submit', onLogin);
const urlLogin = 'http://localhost:3030/users/login';

async function onLogin(e) {
    e.preventDefault();

    let formData = new FormData(e.target);

    let email = formData.get('email');
    let password = formData.get('password');


    if (!email || !password) {
        return alert('Try Again')
    }

    let data = {
        method: "POST",
        headers: {
            "Content-type": "Application/json"
        },
        body: JSON.stringify({ email, password })
    };

    try {
        const response = await fetch(urlLogin, data);
        if (response.status != 200) {
            throw new Error('New Error')
        }
        const userData = await response.json();
        sessionStorage.setItem("email", userData.email);
        sessionStorage.setItem("userId", userData._id);
        sessionStorage.setItem("accessToken", userData.accessToken);
    } catch (error) {
        throw new Error(error)
    }

    window.location.href = "./index.html"
}