import { h } from "preact";
const github = (
	<svg
		className="w-24"
		role="img"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>GitHub icon</title>
		<path
			fill="#000000"
			d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
		/>
	</svg>
);
const twitter = (
	<svg
		className="w-24"
		role="img"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>Twitter icon</title>
		<path
			fill="rgba(29,161,242,1.00)"
			d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
		/>
	</svg>
);
const linkedin = (
	<svg
		className="w-24"
		role="img"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>LinkedIn icon</title>
		<path
			fill="#0077b5"
			d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
		/>
	</svg>
);
const electron = (
	<svg
		className="w-24"
		xmlns="http://www.w3.org/2000/svg"
		role="img"
		viewBox="0 0 24 24"
	>
		<title>Electron icon</title>
		<path
			fill="#74b1be"
			d="M2.648 11.678c-1.038-1.81-1.249-3.504-.511-4.781.988-1.712 3.468-2.31 6.604-1.739a.322.322 0 1 1-.115.633c-2.9-.528-5.111.005-5.932 1.428-.605 1.047-.423 2.509.512 4.14a.322.322 0 1 1-.558.32zm14.92-6.069c1.835.024 3.156.596 3.751 1.626.82 1.419.18 3.595-1.718 5.837a.322.322 0 1 0 .49.416c2.054-2.426 2.771-4.866 1.785-6.575-.726-1.257-2.26-1.92-4.299-1.947a.322.322 0 1 0-.008.643zm-1.854 15.239a.322.322 0 0 0-.442.11c-.934 1.553-2.08 2.399-3.26 2.399-1.642 0-3.208-1.647-4.2-4.418a.322.322 0 1 0-.606.217C8.279 22.154 10.036 24 12.01 24c1.44 0 2.773-.982 3.813-2.71a.322.322 0 0 0-.11-.442zm7.356-2.594a1.54 1.54 0 0 1-2.436 1.25c-2.455 1.445-7.146.71-11.56-1.84-1.88-1.085-3.527-2.392-4.795-3.785a.322.322 0 1 1 .476-.433c1.222 1.343 2.817 2.609 4.64 3.661 4.167 2.406 8.553 3.12 10.797 1.906a1.54 1.54 0 1 1 2.878-.759zm-19.062 0a1.54 1.54 0 1 1-2.285-1.345c-.233-2.877 2.79-6.734 7.36-9.372 1.898-1.096 3.874-1.874 5.731-2.271a.322.322 0 0 1 .135.628c-1.79.384-3.703 1.137-5.545 2.2-4.304 2.485-7.148 6.067-7.048 8.627.038-.003.075-.006.113-.006.85 0 1.54.69 1.54 1.54zM10.472 1.54a1.54 1.54 0 0 1 3.078 0c0 .023-.002.045-.003.067 2.549 1.317 4.32 5.81 4.32 11.003 0 2.135-.298 4.184-.854 5.96a.322.322 0 1 1-.614-.192c.536-1.712.825-3.697.825-5.768 0-4.89-1.626-9.095-3.847-10.363a1.538 1.538 0 0 1-2.905-.707zm1.304 9.981a1.114 1.114 0 1 0 .47 2.178 1.114 1.114 0 0 0-.47-2.178z"
		/>
	</svg>
);
const react = (
	<svg
		className="w-24"
		role="img"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>React icon</title>
		<path
			fill="#61dafb"
			d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z"
		/>
	</svg>
);
const simpleIcons = (
	<svg
		className="w-24"
		role="img"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>Simple Icons icon</title>
		<path
			fill="#ffffff"
			d="M12 12v-1.5c-2.484 0-4.5-2.016-4.5-4.5S9.516 1.5 12 1.5s4.5 2.016 4.5 4.5H18c0-3.312-2.688-6-6-6S6 2.688 6 6s2.688 6 6 6zM15.037 12.826c2.858 1.678 3.816 5.355 2.138 8.214h1.68c.423-.954.642-1.987.643-3.03.003-4.144-3.352-7.505-7.494-7.51V12c1.066 0 2.113.286 3.033.826zM12.003 10.5H12h.003M6.828 21.04C6.3 20.148 6 19.11 6 18v-.03H4.5V18c-.002 1.047.218 2.084.645 3.04h1.683zM15 22.5v-6h1.5V15h-9v1.5H9v6H4.5V24h15v-1.5H15zm-1.5 0h-3v-6h3v6zM9.078 5.922C9.035 7.58 10.343 8.957 12 9c1.597-.04 2.88-1.326 2.922-2.922C14.965 4.42 13.656 3.043 12 3c-1.597.04-2.88 1.326-2.922 2.922zm4.422.08c0 .828-.672 1.5-1.5 1.5-.83 0-1.5-.673-1.5-1.502 0-.83.67-1.5 1.5-1.5.828 0 1.5.672 1.5 1.5z"
		/>
	</svg>
);
export { github, twitter, linkedin, electron, react, simpleIcons };
