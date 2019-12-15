import { h } from "preact";

function Header() {
	return (
		<header className="bg-black p-16 flex justify-end">
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
