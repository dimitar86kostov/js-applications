const list = document.getElementById('commits');

function loadCommits() {

    const username = document.getElementById('username').value;
    const repos = document.getElementById('repo').value;
    const url = `https://api.github.com/repos/${username}/${repos}/commits`;

    fetch(url)
        .then(onHeaders)
        .then(handleCommitSuccess)
        .catch(onError);
}

function onHeaders(response) {

    if (!response.ok) {
        throw `Error`;
    }
    return response.json();
}

function onError(error) {
    list.innerHTML = `<li>Error: 404 Not Found   </li>`
}

function handleCommitSuccess(params) {
    list.replaceChildren(...params.map(createListItem));

}

function createListItem({ commit: { author: { name }, message } }) {
    const item = document.createElement('li');
    item.textContent = `${name}: ${message}`;
    return item;
}