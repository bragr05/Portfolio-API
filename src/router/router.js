import { Router } from "express";
import Techs from "../models/techs.js";
import Project from "../models/project.js";
import Experience from "../models/experience.js";

const MainRouter = Router();

MainRouter.get("/techs", async (req, res) => {
	const techs = await Techs.find({
		isTechStack: true,
	});
	res.json(techs);
});

MainRouter.get("/projects", async (req, res) => {
	const projects = await Project.find().populate("techs");
	res.json(projects);
});

MainRouter.get("/experience", async (req, res) => {
	const experience = await Experience.find().populate("techs", "techIcon");
	res.json(experience);
});

export default MainRouter;
