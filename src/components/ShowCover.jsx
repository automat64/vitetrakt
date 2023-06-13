import { FanartAPI } from "../services/FanartAPI";
import { useEffect, useState } from "react";

export default function ShowCover({ tvdb }) {
	const [myPhoto, setMyPhoto] = useState("");

	useEffect(() => {
		FanartAPI.query(tvdb).then(({ data }) => {
			setMyPhoto(data.tvthumb[0].url);
		});
	}, [tvdb]);

	return (
		<>
			{myPhoto === "" ? (
				<div class="h-52 w-100 rounded-xl bg-gray-200 animate-pulse"></div>
			) : (
				<figure>
					{/* <div class="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-200 animate-pulse" ></div> */}
					<img src={myPhoto} alt="Shoes" />
				</figure>
			)}
		</>
	);
}
