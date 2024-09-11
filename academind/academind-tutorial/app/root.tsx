import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<Meta />
				<Links />
			</head>
			<body>
				<header>
					<MainNavigation />
				</header>
				{children}
				<ScrollRestoration />
				<Scripts /> 
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

import appStylesHref from "./styles/main.css?url";
import { LinksFunction } from "@remix-run/node";
import MainNavigation from "./components/MainNavigation";

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: appStylesHref },
];
