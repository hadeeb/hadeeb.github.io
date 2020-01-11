import { h } from "preact";
type IRepo = {
	name: string;
	desc: string;
	link: string;
};

function Card({ repo }: { repo: IRepo }) {
	return (
		<div className="flex-1 p-16 mb-8 border-solid rounded sm:w-1/2 sm:mb-0 sm:mr-8 border-1 border-gray-light">
			<div className="flex items-center font-semibold text-blue">
				{icon}
				<a
					href={repo.link}
					target="_blank"
					rel="noopener noreferrer"
					className="flex"
				>
					{repo.name}
				</a>
			</div>
			<p className="my-8 text-14 text-gray-dark">{repo.desc}</p>
		</div>
	);
}

const icon = (
	<svg
		className="mt-4 mr-4"
		viewBox="0 0 12 16"
		version="1.1"
		width="12"
		height="16"
		aria-hidden="true"
	>
		<path
			fillRule="evenodd"
			d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
		></path>
	</svg>
);

function MoreCard() {
	return (
		<a
			className="flex items-center justify-center px-24 py-16 font-bold text-black border-solid rounded border-1 border-gray-light"
			href="https://github.com/hadeeb?tab=repositories"
			target="_blank"
			rel="noopener noreferrer"
		>
			See More
		</a>
	);
}

export { Card, MoreCard };
