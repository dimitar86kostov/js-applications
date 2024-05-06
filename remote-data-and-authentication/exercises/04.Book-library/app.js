// document.getElementById("loadBooks").addEventListener('click', onLoad);
document.querySelector('form').addEventListener('submit', onCreate);

const titleRef = document.querySelector("input[name='title']");
const authorRef = document.querySelector("input[name='author']");
const tbody = document.querySelector('tbody tr');

const url = 'http://localhost:3030/jsonstore/collections/books'
// async function onLoad(e) {

//     const response = await fetch(url);
//     const data = await response.json();

//     loadAll(data);
// }

// function loadAll(data) {
//     let td = document.querySelector('tbody td');
//     tbody.cells[0].textContent = '';
//     tbody.cells[1].textContent = '';

//     Object.values(data).forEach(b => {
//         tbody.cells[0].textContent += b.title;
//         tbody.cells[1].textContent += b.author;
//     });
// }

async function onCreate(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let title = formData.get('title');
    let author = formData.get('author');

    if (!title || !author) {
        alert('Invalid Input');
        return;
    }

    let data = {
        method: "POST",
        headers: {
            "Content-type": "Application/json"
        },
        body: { title, author }
    }
    await fetch(url, data);
    
    
    createTd(title, author)
    titleRef.value = '';
    authorRef.value = '';
}

function createTd(title, author) {
    let td = document.createElement('td');
    td.textContent = `${title}`
    td.textContent.trim();
    tbody.appendChild(td);
    
}

const editBtn = tbody.cells[2].children[0].addEventListener('click', onEdit);

async function onEdit(e) {
    // let parent = editBtn.parentElement.parentElement;
    console.log(e.target);
    // let id = 
    //     const response = await fetch(url + '/' + id)
}