import { h } from "preact";

function Header() {
	return (
		<header className="flex justify-end p-16 bg-black">
			<a
				className="text-white"
				href="mailto:hadeebfarhan1@gmail.com"
				target="_top"
			>
				Contact
			</a>
		</header>
	);
}

export { Header };
