import React from "react";
import Banner from "./Banner";

function Show(props) {
	return (
		<div className="card bg-base-100 shadow-xl float-left break-inside-avoid-column">
			<Banner tvdb={props.show.ids.tvdb} />
			<div className="card-body">
				<h2 className="card-title">{props.show.title}</h2>
				<p>{props.show.overview}</p>
			</div>
		</div>
	);
}

export default Show;
