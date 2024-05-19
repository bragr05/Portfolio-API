import express from "express";
const app = express();

import MainRouter from "../router/router.routes.js";

app.use(MainRouter);

export default app;
