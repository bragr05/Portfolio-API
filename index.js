import {} from "./src/config/env.js";
import server from "./src/config/http.js";
import mongoose from "mongoose";

const bootstrap = async () => {
	await mongoose
		.connect(process.env.URL_MONGODB, {
			dbName: "portfolio",
		})
		.then(() => {
			console.log("Connected to MongoDB Atlas");
		});

	const PORT = process.env.PORT;
	const HOST = process.env.HOST;

	server.listen(PORT, HOST, () => {
		console.log(`Server listening on http://${HOST}:${PORT}`);
	});
};

bootstrap();
