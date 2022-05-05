import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { selectUser, selectLoginError, login } from "../authSlice";
import { useAppSelector, useAppDispatch } from "../hooks";

const Login = (): JSX.Element => {
	const user = useAppSelector(selectUser);
	const loginError = useAppSelector(selectLoginError);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const target = e.target as HTMLFormElement;
		dispatch(login(target.login.value));
	};

	useEffect(() => {
		if (user) {
			navigate("/users");
		}
	}, [navigate, user]);

	return (
		<>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<input id="login" />
			</form>
			{loginError && <p>Wrong credentials...</p>}
		</>
	);
};

export default Login;
