import { Router } from "express";

const MainRouter = Router();

MainRouter.get("/", (req, res) => {
	res.send("hello world");
});

export default MainRouter;
