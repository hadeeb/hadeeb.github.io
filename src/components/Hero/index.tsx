import { h } from "preact";

import { github, linkedin, twitter } from "../../style/icons";

function Hero() {
	return (
		<div className="pb-24 pr-16 sm:w-1/4">
			<img
				className="w-1/2 rounded border-gray-light border-1 sm:w-auto"
				src="https://avatars1.githubusercontent.com/u/16823042?s=460&v=4"
				alt="avatar"
			/>
			<div>
				<h1 className="font-semibold text-black text-26">
					Hadeeb Farhan
				</h1>
				<p className="mb-8">Frontend Developer @ Paytm</p>
				<div className="flex">
					<a
						aria-label="Github"
						target="_blank"
						rel="noreferrer noopener"
						href="https://github.com/hadeeb"
						className="mr-8"
					>
						{github}
						{/* <span>github.com/hadeeb</span> */}
					</a>
					<a
						aria-label="Twitter"
						target="_blank"
						rel="noreferrer noopener"
						href="https://twitter.com/HadeebFarhan"
						className="mr-8"
					>
						{twitter}
					</a>
					<a
						aria-label="LinkedIn"
						target="_blank"
						rel="noreferrer noopener"
						href="https://www.linkedin.com/in/farhan23"
						className="mr-8"
					>
						{linkedin}
					</a>
				</div>
			</div>
		</div>
	);
}

export default Hero;
