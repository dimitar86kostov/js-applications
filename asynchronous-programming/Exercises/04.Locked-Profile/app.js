function lockedProfile() {

    const btn = document.getElementsByTagName('button')[0].addEventListener('click', handleShowMoreBtn)
    const profile = document.getElementsByClassName('profile')[0];
    const info = document.querySelector('input[type="text"]');
    const URL = 'http://localhost:3030/jsonstore/advanced/profiles';


    async function handleShowMoreBtn(ev) {
        const response = await fetch(URL);
        const data = await response.json();

        let name = info.name;

        if (data.username === name) {
            
        }
        debugger



    }


}