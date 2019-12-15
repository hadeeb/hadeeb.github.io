import { h } from "preact";

import { Card, MoreCard } from "./Card";

const Repos = [
	{
		name: "react-lazy-hydration",
		link: "https://github.com/hadeeb/react-lazy-hydration",
		desc: "Lazy Hydration for Server Rendered React Components"
	},
	{
		name: "@hadeeb/reactive",
		link: "https://github.com/hadeeb/reactive",
		desc: "Reactive global state for React Apps with ES6 Proxies"
	}
];

function OSS() {
	return (
		<div className="sm:pl-8 sm:w-3/4">
			<h3 className="ml-16 mb-8 font-medium">OSS Projects</h3>
			<div className="flex flex-wrap ml-16 mb-16 justify-between">
				{Repos.map(repo => (
					<Card key={repo.name} repo={repo} />
				))}
				<MoreCard />
			</div>
		</div>
	);
}

export { OSS };
