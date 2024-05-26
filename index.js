import {} from "./src/config/env.js";
import app from "./src/config/express.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
