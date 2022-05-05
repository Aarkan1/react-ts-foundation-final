import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../authSlice";
import { useAppSelector } from "../hooks";

interface RequireAuthProps {
	children: ReactNode;
}

const RouteGuard = ({ children }: RequireAuthProps): JSX.Element => {
	const user = useAppSelector(selectUser);
	const navigate = useNavigate();

	useEffect(() => {
		/*
		 * Redirect them to the /login if not logged in.
		 */

		if (!user) {
			navigate("/login");
		}
	});

	return <>{children}</>;
};

export default RouteGuard;
