import { h } from "preact";

function Footer() {
	return (
		<footer className="p-24 bg-black text-gray-mid">
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
