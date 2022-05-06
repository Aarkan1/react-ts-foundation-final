import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { ILink } from "../interfaces";
import { store } from "./store";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Users from "./pages/Users";
import User from "./components/User";
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
		<Provider store={store}>
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
					<Route
						path="users/:id"
						element={
							<RouteGuard>
								<User />
							</RouteGuard>
						}
					/>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
