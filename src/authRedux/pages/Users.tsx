import { useState, useEffect } from "react";

import User from "../components/User";
import { IUser } from "../../interfaces";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchUsersAsync, selectStatus, selectUsers } from "../usersSlice";

const Users = (): JSX.Element => {
	const users = useAppSelector(selectUsers);
	const status = useAppSelector(selectStatus);
	const dispatch = useAppDispatch();
	const [user, setUser] = useState<IUser | null>(null);

	const handleOnClick: React.MouseEventHandler<HTMLSpanElement> = (e) => {
		const target = e.target as HTMLSpanElement;
		const id = target.id;
		const clickedUser = users?.find((u) => u.id === +id);

		if (clickedUser) {
			setUser(clickedUser);
		}
	};

	useEffect(() => {
		if (!users) {
			dispatch(fetchUsersAsync());
		}
	}, [dispatch, users]);

	return (
		<>
			<h1>This is the Users page!</h1>
			{status === "loading" && <p>Loading users...</p>}
			{status === "error" && <p>Something went wrong with the request...</p>}
			{users && (
				<>
					<ul>
						{users.map(({ id, name }) => (
							<li key={id}>
								<span
									onClick={handleOnClick}
									id={id.toString()}
									className="user"
								>
									{name}
								</span>
							</li>
						))}
					</ul>
					{user ? <User user={user} /> : ""}
				</>
			)}
		</>
	);
};

export default Users;
