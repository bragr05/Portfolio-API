import mongoose from "mongoose";

const connectDB = async () => {
	if (mongoose.connection.readyState === 1) {
		return;
	}
	await mongoose
		.connect(process.env.URL_MONGODB, {
			dbName: "portfolio",
		})
		.then(() => {
			console.log("Connected to MongoDB Atlas");
		});
};
export default connectDB;
