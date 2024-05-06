function attachEvents() {
    const URL = 'http://localhost:3030/jsonstore/phonebook';
    document.getElementById("btnLoad").addEventListener('click', onLoad);

    const luRef = document.getElementById("phonebook");
    document.getElementById("btnCreate").addEventListener('click', handleCreateBtn);

    async function handleCreateBtn(e) {
        let personRef = document.getElementById("person");
        let phoneRef = document.getElementById("phone");
        let person = personRef.value;
        let phone = phoneRef.value;

        let data = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({person, phone})
        }

        await fetch(URL, data);
        personRef.value = "";
        phoneRef.value = "";
        onLoad();
    }

    async function onLoad(e) {

        const res = await fetch(URL);
        const data = await res.json();
        luRef.innerHTML = '';
        Object.values(data).forEach(el => {
            createAndAppendLi(el);
        })
    }

    function createAndAppendLi(data) {

        let li = document.createElement('li');
        li.textContent = `${data.person}: ${data.phone}`;

        let btnDelete = document.createElement('button');
        btnDelete.textContent = 'Delete';
        btnDelete.dataset.id = data._id


        btnDelete.addEventListener('click', onDelete);

        li.appendChild(btnDelete);
        luRef.appendChild(li);

    }
    async function onDelete(e) {
        let id = e.target.dataset.id;
        await fetch(URL + "/" + id, { method: 'DELETE' });
        onLoad();
    }
}

attachEvents();
