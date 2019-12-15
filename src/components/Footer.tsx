import { h } from "preact";

import { simpleIcons } from "../style/icons";

function Footer() {
	return (
		<footer className="bg-black p-24 text-gray-dark">
			<div>
				Hosted on{" "}
				<a
					className="text-gray-mid"
					target="_blank"
					rel="noopener noreferrer"
					href="https://netlify.com"
				>
					Netlify
				</a>
			</div>
			<div>
				Icons from{" "}
				<a
					className="text-gray-mid"
					target="_blank"
					rel="noopener noreferrer"
					href="https://simpleicons.org"
				>
					Simple Icons
				</a>
			</div>
			<div>
				<a
					className="text-gray-mid"
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/hadeeb/hadeeb.github.io"
				>
					View Source
				</a>
			</div>
		</footer>
	);
}

export { Footer };
