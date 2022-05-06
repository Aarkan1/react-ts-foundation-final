import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../AppProvider";

const Users = (): JSX.Element => {
	const { fetchUsersAsync, users } = useAppContext();
	const navigate = useNavigate();

	const goToUser = (id: number) => {
		/*
		 * Remember that the path in react-router-dom v6 is always relative
		 * to its parant path if it exists. This users page is already
		 * linked to the path /users, so if you want to access the path
		 * /users/:id the only thing you need to add in this component
		 * is the /:id part. We don't even need the forward slash part...
		 * React-reouter solves that for us. In this case it's the id that
		 * we get from the user we clicked on.
		 */
		navigate(`${id}`);
	};

	useEffect(() => {
		if (!users) {
			fetchUsersAsync();
		}
	}, [fetchUsersAsync, users]);

	return (
		<>
			<h1>This is the users page!</h1>
			{!users && <p>Loading users...</p>}
			{users && (
				<>
					<ul>
						{users.map(({ id, name }) => (
							<li key={id}>
								<span
									onClick={() => goToUser(id)}
									id={id.toString()}
									className="user"
								>
									{name}
								</span>
							</li>
						))}
					</ul>
				</>
			)}
		</>
	);
};

export default Users;
