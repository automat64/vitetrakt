import { useEffect, useState } from "react";
import { TraktAPI } from "./services/traktAPI";
import { gsap } from "gsap/dist/gsap";
import { Flip } from "gsap/dist/Flip";
import classNames from "classnames";
import Show from "./components/Show";
import generateSkeletonArray from "./helpers/ShowSkeleton";
import "./App.css";

function App() {
	const [myList, setMyList] = useState(generateSkeletonArray(10));
	const [activeTab, setActiveTab] = useState("popular_tab");
	gsap.registerPlugin(Flip);
	useEffect(() => {
		// console.log(skeletonArray);
		TraktAPI.traktList("trending")
			.then((showList) => {
				const arr = showList.map((show) => (
					<Show key={show.show.ids.trakt} show={show.show}></Show>
				));
				setMyList(arr);
			})
			.finally(() => {});
	}, []);

	return (
		<>
			<div className="tabs">
				<a
					className={classNames("tab", "trending_tab", "bordered", {
						"tab-active": activeTab == "trending_tab",
					})}
				>
					TRENDING
				</a>
				<a
					className={classNames("tab", "popular_tab", "bordered", {
						"tab-active": activeTab == "popular_tab",
					})}
				>
					POPULAR
				</a>
			</div>
			<ul className="gap-8 columns-3">{myList}</ul>
		</>
	);
}

export default App;
