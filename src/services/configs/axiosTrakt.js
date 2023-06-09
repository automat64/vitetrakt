import axios from "axios";

export const trakt = axios.create({
  baseURL: "https://api.trakt.tv",
  timeout: 15000,
  headers: {
    "Content-type": "application/json",
    "trakt-api-key": env.TRAKT_API_KEY,
    "trakt-api-version": 2,
    // Authorization: "Bearer " + this.traktAccessToken,
  },
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
// "api" axios instance
trakt.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});
