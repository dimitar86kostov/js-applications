export function setUserData(data) {
    localStorage.setItem('user', JSON.stringify(data));
};

export function getUserData() {
    return JSON.parse(localStorage.getItem('user'));
};

export function clearUserData() {
    localStorage.removeItem('user');
};


//TODO Add custom validation
export function createSubmitHandler(callback) {
    return function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = [...formData.entries()].map(([k, v]) => [k, v.trim()]);
        
        callback(Object.fromEntries(data), event.target);
    }
}

export function updateNav() {
    const userData = getUserData();

    const guestNav = document.querySelector("nav #guest");
    const userNav = document.querySelector("nav #user");

    if (userData) {
        guestNav.style.display = 'none';
        userNav.style.display = 'block';
    } else {
        guestNav.style.display = 'block';
        userNav.style.display = 'none';
    }
}