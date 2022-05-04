import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ILink } from "../interfaces";

import AppProvider from "./AppProvider";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";
import RouteGuard from "./components/RouteGuard";

import "./styles.css";

const links: ILink[] = [
	{ href: "/", name: "Home" },
	{ href: "/users", name: "Users" },
];

const App = (): JSX.Element => {
	return (
		<AppProvider>
			<BrowserRouter>
				<Navigation links={links} />
				<Routes>
					<Route index element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route
						path="users"
						element={
							<RouteGuard>
								<Users />
							</RouteGuard>
						}
					/>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</AppProvider>
	);
};

export default App;
