// This is an axios instance config for the fanart service
import axios from "axios";

export const fanart = axios.create({
	method: "get",
	baseURL: "/api",
	timeout: 15000,
});

// defining a custom error handler for all APIs
const errorHandler = (error) => {
	const statusCode = error.response?.status;

	// logging only errors that are not 401
	if (statusCode && statusCode !== 401) {
		console.error(error);
	}

	return Promise.reject(error);
};

// registering the custom error handler to the
// "fanart" axios instance
fanart.interceptors.response.use(undefined, (error) => {
	return errorHandler(error);
});
