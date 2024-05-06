function attachEvents() {
    document.getElementById("refresh").addEventListener('click', onRefresh);
    document.getElementById("submit").addEventListener('click', onSend);


    const url = "http://localhost:3030/jsonstore/messenger";

    async function onSend(e) {

        const nameRef = document.querySelector("input[name='author']");
        const textRef = document.querySelector("input[name='content']");

        const name = nameRef.value;
        const text = textRef.value;

        const data = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ author: name, content: text })
        };

        await fetch(url, data);

        nameRef.value = "";
        textRef.value = "";
    }

    async function onRefresh(ev) {

        const textAreaRef = document.getElementById("messages");
        textAreaRef.value = "";

        const response = await fetch(url)
        const data = await response.json();

        Object.values(data).forEach(rec => {
            textAreaRef.value += `${rec.author}: ${rec.content} \n`
        })
        textAreaRef.value = textAreaRef.value.trim();

    }
}

attachEvents();