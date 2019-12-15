import { Fragment, h } from "preact";

import { electron, react } from "../../style/icons";

const timeLine = [
	{
		company: "Paytm",
		link: "https://paytm.com",
		position: "Software Engineer",
		work: [""],
		time: "2018 Oct -",
		tools: [electron, react]
	},
	// {
	// 	company: "Paytm Smart Retail",
	// 	link: "https://pos.paytm.com",
	// 	position: "Software Engineer",
	// 	work: [""],
	// 	time: "2018 Oct - 2019 Sep",
	// 	tools: [electron, react]
	// },
	{
		company: "WeavedIn",
		link: "https://www.linkedin.com/company/weavedin",
		position: "Software Engineer",
		work: [""],
		time: "2018 Jun - 2018 Oct",
		tools: [electron, react]
	}
];

function TimeLine() {
	return (
		<Fragment>
			<h3 className="ml-16 mb-8 font-medium">Professional Experience</h3>
			<div className="text-gray-dark">
				{timeLine.map(data => (
					<TimeLineItem key={data.company} data={data} />
				))}
			</div>
		</Fragment>
	);
}

function TimeLineItem({ data }: { data: typeof timeLine[0] }) {
	return (
		<div className="relative ml-16 p-24 border-b-1 border-l-1 border-solid border-gray-light border-0">
			<div className="w-24 h-24 rounded-full bg-gray-mid absolute floated">
				<svg className="m-4" viewBox="0 0 16 16" aria-hidden="true">
					<path
						fillRule="evenodd"
						d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
					></path>
				</svg>
			</div>
			<div className="font-medium">
				{data.position} @{" "}
				<a
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-dark"
					href={data.link}
				>
					{data.company}
				</a>
			</div>
			<div className="text-14">{data.time}</div>
			<div className="flex mt-8">
				{data.tools.map((x, i) => (
					<div key={i} className="flex mr-4">
						{x}
					</div>
				))}
			</div>
		</div>
	);
}

export default TimeLine;
