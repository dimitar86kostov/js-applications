document.querySelector('form').addEventListener('submit', onCreate);
const urlReg = 'http://localhost:3030/users/register';

async function onCreate(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    let email = formData.get('email');
    let password = formData.get('password');
    let rePass = formData.get('rePass');

    if (!email || !password || !rePass || password != rePass) {
        return alert('Try Again')
    }

    let data = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({email, password})
    };

    try {
        const response = await fetch(urlReg, data);
        if (response.status != 200) {
            throw new Error('New Error')
        }
        const userData = await response.json();
        
        sessionStorage.setItem("email", userData.email);
        sessionStorage.setItem("userId", userData._id);
        sessionStorage.setItem("accessToken", userData.accessToken);
        window.location.href = "./index.html";

    } catch (error) {
        throw new Error(error);
    }
}

// async function createUser(data) {
//     const option = createOption("POST", data);
//     const respons = await fetch(url, option);
//     const userData = await respons.json();
//     sessionStorage.setItem('userData', JSON.stringify(userData));
// }

// function createOption(method, data) {
//     return {
//         method,
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify(data)
//     };
// }