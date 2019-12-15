import { h } from "preact";

import { github, twitter } from "../../style/icons";

function Hero() {
	return (
		<div className="pr-16 pb-24 sm:w-1/4">
			<img
				className="rounded border-gray-light border-1"
				src="https://avatars1.githubusercontent.com/u/16823042?s=460&v=4"
				alt="avatar"
			/>
			<div>
				<h1 className="text-26 text-black font-semibold">
					Hadeeb Farhan
				</h1>
				<p className="mb-8">
					Frontend Developer @{" "}
					{/* <a
						target="_blank"
						rel="noreferrer noopener"
						href="https://paytm.com/hotels"
					> */}
					Paytm
					{/* </a> */}
				</p>
				<div className="flex">
					<a
						target="_blank"
						rel="noreferrer noopener"
						href="https://github.com/hadeeb"
						className="mr-8"
					>
						{github}
						{/* <span>github.com/hadeeb</span> */}
					</a>
					<a
						target="_blank"
						rel="noreferrer noopener"
						href="https://twitter.com/HadeebFarhan"
						className="mr-8"
					>
						{twitter}
					</a>
				</div>
			</div>
		</div>
	);
}

export default Hero;
