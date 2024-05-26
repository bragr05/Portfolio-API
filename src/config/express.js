import express from "express";
const app = express();
import {} from "../config/env.js";

import MainRouter from "../router/MainRouter.js";
import WeatherRouter from "../router/WheaterRouter.js";

app.disable("x-powered-by");

const authenticateToken = (req, res, next) => {
	const authHeader = req.headers["authorization"];
	if (!authHeader) return res.sendStatus(403);

	const token = authHeader.split(" ")[1];
	if (token == null) return res.sendStatus(403);
	if (token !== process.env.ACCESS_TOKEN) return res.sendStatus(401);

	next();
};

app.use(authenticateToken);
app.use(MainRouter);
app.use(WeatherRouter);


export default app;
