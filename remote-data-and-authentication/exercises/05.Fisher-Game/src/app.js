
document.querySelector('button.load').addEventListener('click', onLoadCatch);

const loginBtnRef = document.getElementById('login');
const registerBtnRef = document.getElementById('register');
const logoutBtnRef = document.getElementById('logout');
const homeBtnRef = document.getElementById('home');
const userNameRef = document.querySelector('.email span');
const catchesRef = document.getElementById("catches");
const addCatchesBtn = document.querySelector(".add");

catchesRef.innerHTML = '';

const urlLogout = "http://localhost:3030/users/logout";
const url = "http://localhost:3030/data/catches";

const logoutBtn = logoutBtnRef.addEventListener('click', onLogout);
document.querySelector("form").addEventListener('submit', onCreateCatches);


async function onCreateCatches(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    let angler = formData.get('angler');
    let weight = formData.get('weight');
    let species = formData.get('species');
    let location = formData.get('location');
    let bait = formData.get('bait');
    let captureTime = formData.get('captureTime');

    if (!angler || !weight || !species || !location || !bait || !captureTime) {
        throw new Error('empty input');
    }

    let data = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "x-authorization": sessionStorage.getItem("accessToken")
        },
        body: JSON.stringify({ angler, weight, species, location, bait, captureTime })
    };

    try {
        const respons = await fetch(url, data);
        if (respons.status != 200) {
            throw new Error('error')
        }
    } catch (error) {
        throw new Error(error)
    }
    e.target.reset();
    onLoadCatch();
}
let userData = sessionStorage.getItem("userData");

function hasOwner(id) {

    return userData?._id === id;
}

updateNav()

function updateNav() {
    if (sessionStorage.getItem("userId")) {
        loginBtnRef.style.display = "none";
        registerBtnRef.style.display = "none";
        userNameRef.textContent = sessionStorage.getItem("email");
        addCatchesBtn.disabled = false;
    } else {
        logoutBtnRef.style.display = "none";
        userNameRef.textContent = sessionStorage.getItem("guest");
        addCatchesBtn.disabled = true;
    };
}

async function onLogout(e) {

    await fetch(urlLogout, {
        method: "GET",
        headers:
            { "X-Authorization": sessionStorage.getItem('accessToken') }
    });

    sessionStorage.clear();

    window.location.href = "./index.html";
    onLoadCatch();
}

async function onLoadCatch(e) {
    catchesRef.innerHTML = "";

    const response = await fetch(url);
    const data = await response.json();
    data.forEach(x => {
        let div = generateCatches(x);
        catchesRef.appendChild(div);
    });

}

function generateCatches(data) {
    let div = document.createElement('div');
    div.classList.add('catch');
    let isOwner = data._ownerId !== sessionStorage.getItem("userId");

    div.innerHTML += `<label>Angler</label>`;
    div.innerHTML += `<input type="text" class="angler" value="${data.angler}" ${!isOwner ? "disabled" : ""}>`;
    div.innerHTML += `<label>Weight</label>`;
    div.innerHTML += `<input type="text" class="weight" value="${data.weight}" ${!isOwner ? "disabled" : ""}>`;
    div.innerHTML += `<label>Species</label>`;
    div.innerHTML += `<input type="text" class="species" value="${data.species}" ${!isOwner ? "disabled" : ""}>`;
    div.innerHTML += `<label>Location</label>`;
    div.innerHTML += `<input type="text" class="location" value="${data.location}" ${!isOwner ? "disabled" : ""}>`;
    div.innerHTML += `<label>Bait</label>`;
    div.innerHTML += `<input type="text" class="bait" value="${data.bait}" ${!isOwner ? "disabled" : ""}>`;
    div.innerHTML += `<label>Capture Time</label>`;
    div.innerHTML += `<input type="number" class="captureTime" value="${data.captureTime}" ${!isOwner ? "disabled" : ""}>`;
    div.innerHTML += `<button class="update" data-id="${data._id}">Update</button>`;
    div.innerHTML += `<button class="delete" data-id="${data._id}">Delete</button>`;

    // if (data._ownerId === sessionStorage.getItem("userId")) {
    //     const btns = div.querySelectorAll("button");
    //     Array.from(btns).forEach(x => {
    //         x.disabled = false;
    //         if (x.classList.contains("delete")) {
    //             x.addEventListener('click', onDelete)
    //         }
    //         x.addEventListener('click', onUpdate)
    //     });
    // }

    const updateBtn = document.createElement('button');
    updateBtn.classList.add("update");
    updateBtn.dataset.id = data._id;
    updateBtn.textContent = "UPDATE";

    const delBtn = document.createElement('button');
    updateBtn.classList.add("delete");
    updateBtn.dataset.id = data._id;
    updateBtn.textContent = "DELETE";

    if (!hasOwner(data._ownerId)) {
        updateBtn.disabled = true;
        delBtn.disabled = true;
    };

    div.appendChild(updateBtn);
    div.appendChild(delBtn);

    updateBtn.addEventListener('click', onUpdate)
    updateBtn.addEventListener('click', onDelete);

    return div;
}

async function onUpdate(e) {
    // const idCatch = e.target.dataset.id;
    // let inputs = e.target.parentElement.querySelectorAll('input')

    // let angler = inputs[0].value;
    // let weight = inputs[1].value;
    // let species = inputs[2].value;
    // let location = inputs[3].value;
    // let bait = inputs[4].value;
    // let captureTime = inputs[5].value;

    // let _ownerId = sessionStorage.getItem("userId");

    // if (!angler || !weight || !species || !location || !bait || !captureTime) {
    //     throw new Error('empty input');
    // }

    // let data = { angler, weight, species, location, bait, captureTime }

    // const response = await fetch(url + "/" + idCatch, {
    //     method: "PUT",
    //     headers: {
    //         "Content-type": "application/json",
    //         "x-authorization": sessionStorage.getItem("accessToken")
    //     },
    //     body: JSON.stringify(data)
    // })
    // onLoadCatch();

}

async function onDelete(e) {
    const idCatch = e.target.dataset.id;
    debugger
    const response = await fetch(url + '/' + idCatch, {
        method: "DELETE",
        headers: { "x-authorization": sessionStorage.getItem("accessToken") }
    });
    onLoadCatch();
}




