import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppContext } from "../AppProvider";

const Login = (): JSX.Element => {
	const navigate = useNavigate();

	// TODO: Get what is needed from AppContext to implement login functionality.
	const { user, login, loginError } = useAppContext();

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const target = e.target as HTMLFormElement;

		// TODO: Login user with provided credential (e.target.login.value).
		login(target.login.value);
	};

	useEffect(() => {
		/*
		 * TODO: Check if user already is logged in in this useEffect. If so,
		 * redirect to "/users" using navigate.
		 */

		if (user) {
			navigate("/users");
		}
	}, [navigate, user]);

	return (
		<>
			<h1>This is the login page!</h1>
			<p>
				Correct credentials is <strong>admin</strong>
			</p>
			<form onSubmit={handleSubmit}>
				<input id="login" />
			</form>
			{/* TODO: If login error occurred, display suitable error message. */}
			{loginError && <p>Wrong credentials...</p>}
		</>
	);
};

export default Login;
