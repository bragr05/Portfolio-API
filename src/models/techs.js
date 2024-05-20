import { Schema, model } from "mongoose";

const techsSchema = new Schema(
	{
		_id: { type: Schema.Types.ObjectId },
		techName: { type: Schema.Types.String },
		techIcon: { type: Schema.Types.String },
		isTechStack: { type: Schema.Types.Boolean },
	},
	{ collection: "techs" }
);

const Techs = model("techs", techsSchema, "techs");

export default Techs;
