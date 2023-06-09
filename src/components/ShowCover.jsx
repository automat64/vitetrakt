import { FanartAPI } from "../services/FanartAPI";
import React, { useEffect, useState } from "react";

export default function ShowCover({ tvdb }) {
	const [myPhoto, setMyPhoto] = useState("");
	useEffect(() => {
		FanartAPI.query(tvdb).then((data) => {
			console.log(data.data);
			setMyPhoto(data.data.tvthumb[0].url);
		});
	}, []);

	return (
		<figure>
			<img src={myPhoto} alt="Shoes" />
		</figure>
	);
}
