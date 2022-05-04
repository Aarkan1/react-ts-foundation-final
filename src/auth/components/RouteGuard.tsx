import { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useAppContext } from "../AppProvider";

interface RequireAuthProps {
	children: ReactNode;
}

const RouteGuard = ({ children }: RequireAuthProps): JSX.Element => {
	const { user } = useAppContext();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		/*
		 * Redirect them to the /login if not logged in, but save the current
		 * location they were trying to go to when they were redirected. This
		 * allows us to send them along to that page after they login, which
		 * is a nicer user experience than dropping them off on the home page.
		 */

		if (!user) {
			navigate("/login");
		}
	});

	return <>{children}</>;
};

export default RouteGuard;
