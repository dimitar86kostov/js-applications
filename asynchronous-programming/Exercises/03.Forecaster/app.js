function attachEvents() {

    document.getElementById('submit').addEventListener('click', getWeather);

    const locationRef = document.getElementById('location');
    const currendRef = document.getElementById('current');
    const upcomingRef = document.getElementById('upcoming');
    const forecastLocationRef = document.getElementById('forecast');

    const findSymbol = { "Sunny": "&#x2600", "Partly sunny": "&#x26C5", "Overcast": "&#x2601", "Rain": "&#x2614", "Degrees": "&#176" };

    const locationURL = "http://localhost:3030/jsonstore/forecaster/locations";
    const todayURL = "http://localhost:3030/jsonstore/forecaster/today/";
    const upcomingURL = "http://localhost:3030/jsonstore/forecaster/upcoming/";


    async function getWeather(event) {

        try {
            const userInput = locationRef.value;
            forecastLocationRef.style.display = 'block';
            const locationResponse = await fetch(locationURL);
            const locationData = await locationResponse.json();
            const currentData = locationData.find(x => x.name === userInput);
            await fillTodayData(currentData.code);
            await fillUpcomingData(currentData.code);

        } catch (error) {
            forecastLocationRef.textContent = 'Error'
        }

    }

    async function fillTodayData(code) {

        const todayRespons = await fetch(todayURL + code);
        const todayData = await todayRespons.json();

        const todayInfo = createTodaySection(todayData);

        currendRef.appendChild(todayInfo)
    }

    async function fillUpcomingData(code) {
        const respons = await fetch(upcomingURL + code);
        const data = await respons.json();

        const upcomingInfo = createUpcomingForecastSection(data);

        upcomingRef.appendChild(upcomingInfo)
    }

    function createUpcomingForecastSection(data) {

        const container = document.createElement('div');
        container.classList.add('forecast-info');

        const upcoming1 = generateSpan('upcoming', 'symbol', data.name, data.forecast[0]);
        const upcoming2 = generateSpan('upcoming', 'symbol', data.name, data.forecast[1]);
        const upcoming3 = generateSpan('upcoming', 'symbol', data.name, data.forecast[2]);

        container.appendChild(upcoming1);
        container.appendChild(upcoming2);
        container.appendChild(upcoming3);
        return container;
    }

    function generateSpan(classContainer, clasSpan, name, data) {

        const container = document.createElement('div');
        container.classList.add(classContainer);

        const spanName = document.createElement('span');
        spanName.classList.add(clasSpan);
        spanName === 'symbol' ? spanName.innerHTML = findSymbol[data.condition] : spanName.textContent = name;

        const degree = document.createElement('span');
        degree.classList.add("forecast-data");
        degree.innerHTML = `${data.low + findSymbol.Degrees}/${data.high + findSymbol.Degrees}`;
        return container;
    }
    function createTodaySection(data) {

        const container = document.createElement('div');
        container.classList.add('forecasts');
        const conditionSpan = document.createElement('span');
        conditionSpan.classList.add('condition');
        conditionSpan.classList.add('symbol');

        conditionSpan.innerHTML = findSymbol[data.forecast.condition];
        container.appendChild(conditionSpan);
        const spanContainer = generateSpan('condition', 'forecast-data', data.name, data.forecast);
        container.appendChild(spanContainer);
        return container;
    }


}

attachEvents();