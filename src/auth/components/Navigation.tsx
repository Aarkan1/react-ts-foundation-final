import { Link } from "react-router-dom";
import { ILink } from "../../interfaces";

import { useAppContext } from "../AppProvider";

interface NavigationProps {
	links: ILink[];
}

const Navigation = ({ links }: NavigationProps): JSX.Element => {
	// TODO: Get what is needed from AppContext to implement logout functionality.
	const { user, logout } = useAppContext();

	const handleOnClick = (): void => {
		logout();
	};

	return (
		<nav>
			{links.map(({ href, name }, i) => (
				<Link className="link" key={i} to={href}>
					{name}
				</Link>
			))}
			{/* TODO 2: Show logout button if user logged in and write the code that 
            allows them to logout. */}
			{user && <button onClick={handleOnClick}>Logout</button>}
		</nav>
	);
};

export default Navigation;
