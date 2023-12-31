const API_KEY = "b00144927fe68e105a7f3b490e868faa";
const getFormattedWeather = async (city, units = "matric") => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    const data = await fetch(URL)
        .then((res) => res.json())
        .then((data) => data);

    const {
        weather,
            main: { temp, feels_like, temp_min,
                 temp_max, pressure, humidity },
            wind: { speed },
            sys: { country },
            name,
    } = data;

    const {description} = weather[0];

    return {
        description, temp, feels_like, temp_min, temp_max, pressure, humidity,
        speed, country, name,
    }
};

export { getFormattedWeather };