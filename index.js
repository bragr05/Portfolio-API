import {} from "./src/config/env.js";
import server from "./src/config/http.js";

const bootstrap = () => {
	const PORT = process.env.PORT;
	const HOST = process.env.HOST;

	server.listen(PORT, HOST, () => {
		console.log(`Server listening on http://${HOST}:${PORT}`);
	});
};

bootstrap();
