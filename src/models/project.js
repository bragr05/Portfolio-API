import { Schema, model } from "mongoose";

const projectSchema = new Schema(
	{
		project: {
			_id: { type: Schema.Types.ObjectId },
			title: { type: Schema.Types.String },
			description: { type: Schema.Types.String },
			projectImage: { type: Schema.Types.String },
			techs: [
				{
					techName: { type: Schema.Types.ObjectId },
				},
			],
			repoURL: { type: Schema.Types.String },
			isLive: {
				live: { type: Schema.Types.Boolean },
				liveURL: { type: Schema.Types.String },
			},
		},
	},
	{ collection: "project" }
);

const Project = model("project", projectSchema, "project");

export default Project;
