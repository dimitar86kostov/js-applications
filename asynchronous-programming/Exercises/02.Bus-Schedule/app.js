function solve() {
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    
    const info = document.querySelector('#info span');
    const url = `http://localhost:3030/jsonstore/bus/schedule/`;

    let busStop = {
        curr: '',
        next: 'depot'
    };

    async function depart() {
        try {
            const response = await fetch(url + busStop.next);
            const data = await response.json();
            busStop.curr = data.name;
            busStop.next = data.next;

            info.textContent = `Next stop ${busStop.curr}`;

            departBtn.disabled = true;
            arriveBtn.disabled = false;
        } catch (error) {

            info.textContent = `Error`;
            departBtn.disabled = true;
            arriveBtn.disabled = true;

        }

    }

    function arrive() {
        info.textContent = `Arriving at ${busStop.curr}`;

        departBtn.disabled = false;
        arriveBtn.disabled = true;

    }

    return {
        depart,
        arrive
    };
}

let result = solve();