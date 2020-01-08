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
		link: "https://hadeeb.github.io/reactive",
		desc: "Reactive global state for React Apps with ES6 Proxies"
	}
];

function OSS() {
	return (
		<div className="sm:pl-8 sm:w-3/4">
			<h3 className="mb-8 font-medium sm:ml-16">OSS Projects</h3>
			<div className="flex flex-col flex-wrap justify-between mb-16 sm:flex-row sm:ml-16">
				{Repos.map(repo => (
					<Card key={repo.name} repo={repo} />
				))}
				<MoreCard />
			</div>
		</div>
	);
}

export { OSS };
