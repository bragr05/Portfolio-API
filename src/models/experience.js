import { Schema, model } from "mongoose";

const experienceSchema = new Schema(
	{
		_id: { type: Schema.Types.ObjectId },
		expName: { type: Schema.Types.String },
		contractType: { type: Schema.Types.String },
		startDate: { type: Schema.Types.Date },
		endDate: { type: Schema.Types.Date },
		description: { type: Schema.Types.String },
		techs: [{ type: Schema.Types.ObjectId, ref: "techs" }],
	},
	{ collection: "experience" }
);

const Experience = model("experience", experienceSchema, "experience");

export default Experience;
