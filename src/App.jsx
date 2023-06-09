import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { TraktAPI } from "./services/traktAPI";
import ShowCover from "./components/ShowCover";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const [myList, setMyList] = useState([]);
	const [listItems, setListItems] = useState([]);

	useEffect(() => {
		// setPokemonListLoading(true);

		TraktAPI.traktList("trending")
			.then((showList) => {
				setMyList(showList);
				console.log(showList);
				// setSelectedPokemonName(pokemonList[0]?.name);
				const arr = showList.map((show) => (
					<div
						key={show.show.ids.trakt}
						className="card w-96 bg-base-100 shadow-xl float-left break-inside-avoid-column"
					>
						<ShowCover tvdb={show.show.ids.tvdb} />
						<div className="card-body">
							<h2 className="card-title">{show.show.title}</h2>
							<p>{show.show.overview}</p>
							{/* <div class="card-actions justify-end">
           				<button class="btn btn-primary">Buy Now</button> */}
							{/* </div> */}
						</div>
					</div>
				));
				setMyList(arr);
				console.log(arr);
				console.log(myList);
			})
			.finally(() => {});
	}, []);

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
			<ul className="gap-8 columns-5">{myList}</ul>
		</>
	);
}

export default App;
