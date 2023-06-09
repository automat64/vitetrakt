import { fanart } from "./configs/axiosFanart";

export const FanartAPI = {
	async query(tvbId) {
		const response = await fanart({
			url:
				"tv/" +
				tvbId +
				"?api_key=8dfde7938e6c1f08cdf5098d35db6be5&client_key=a90da1673943ed58d466f207e12668cd",
			data: {},
		});

		return response;
	},
};
