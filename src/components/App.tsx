import { Fragment, h } from "preact";

import { Footer } from "./Footer";
import { Header } from "./Header";
import Hero from "./Hero";
import { OSS } from "./OSS";

function App() {
	return (
		<div className="flex flex-col cover-screen">
			<Header />
			<div className="flex-1 flex flex-col sm:flex-row p-16 text-black">
				<Hero />
				<OSS />
			</div>
			<div className="text-gray-dark justify-center flex border-dashed p-24 m-16 border-gray-light rounded">
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
