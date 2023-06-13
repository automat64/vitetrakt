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
		<figure>
			<img src={myPhoto} alt="Shoes" />
		</figure>
	);
}
