import { h } from "preact";

import { Footer } from "./Footer";
import { Header } from "./Header";
import Hero from "./Hero";
import { OSS } from "./OSS";

function App() {
	return (
		<div className="flex flex-col cover-screen">
			<Header />
			<div className="flex flex-col flex-1 p-16 text-black sm:flex-row">
				<Hero />
				<OSS />
			</div>
			<div className="flex justify-center p-24 m-16 border-dashed rounded text-gray-dark border-gray-light">
				TODO:
				<a
					className="text-gray-dark"
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.swyx.io/writing/learn-in-public/"
				>
					Write more
				</a>
			</div>
			<Footer />
		</div>
	);
}

export default App;
