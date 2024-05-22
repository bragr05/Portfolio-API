import {} from "../config/env.js";
import { Router } from "express";

async function GetWeatherData(res) {
	const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY;
	const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=9.86444&lon=-83.91944&appid=${OPEN_WEATHER_API_KEY}&units=metric`;

	try {
		const response = await fetch(WEATHER_URL);
		if (!response.ok) {
			throw new Error("An error occurred while obtaining weather data");
		}
		const weatherData = await response.json();

		let temp = weatherData.main.temp;
		temp = Math.trunc(temp);

		const icon = weatherData.weather[0].icon;
		const description = weatherData.weather[0].description;
		const location = weatherData.name + ", CR";

		res.json({
			temp: temp,
			icon: "https://openweathermap.org/img/wn/" + icon + "@2x.png",
			description: description,
			location: location,
		});
	} catch (error) {
		res.sendStatus(503).send({ error: error });
	}
}

const WeatherRouter = Router();

WeatherRouter.get("/weather", async (req, res) => {
	await GetWeatherData(res);
});

export default WeatherRouter;
