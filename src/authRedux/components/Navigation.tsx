import { Link } from "react-router-dom";
import { ILink } from "../../interfaces";
import { selectUser, logout } from "../authSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

interface NavigationProps {
	links: ILink[];
}

const Navigation = ({ links }: NavigationProps): JSX.Element => {
	const user = useAppSelector(selectUser);
	const dispatch = useAppDispatch();

	const handleOnClick = (): void => {
		dispatch(logout());
	};

	return (
		<nav>
			{links.map(({ href, name }, i) => (
				<Link className="link" key={i} to={href}>
					{name}
				</Link>
			))}
			{user && <button onClick={handleOnClick}>Logout</button>}
		</nav>
	);
};

export default Navigation;
