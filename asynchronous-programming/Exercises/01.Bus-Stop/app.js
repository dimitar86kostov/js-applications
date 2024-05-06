
async function getInfo() {
    const stopIdRef = document.getElementById('stopId');
    const stopId = stopIdRef.value;

    const stopNameRef = document.getElementById('stopName');
    const busesRef = document.getElementById('buses');

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`

    stopNameRef.textContent = "";
    busesRef.innerHTML = "";

    try {
        const response = await fetch(url);
        const data = await response.json();
        stopNameRef.textContent = data.name
        appendChild(Object.entries(data.buses));
        
    } catch (error) {
        stopNameRef.textContent = 'Error'
    }


    function appendChild(data) {

        for (const [bus, time] of data) {
            stopNameRef.textContent = busesRef.name;
            let li = document.createElement('li');
            li.textContent = `Bus ${bus} arrives in ${time} minutes`;
            busesRef.appendChild(li);
            
        }
    }
}