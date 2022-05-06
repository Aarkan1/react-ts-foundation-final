import { useState, useEffect } from "react";

import { IUser } from "../../interfaces";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchUsersAsync, selectStatus, selectUsers } from "../usersSlice";
import { useNavigate } from "react-router-dom";

const Users = (): JSX.Element => {
	const users = useAppSelector(selectUsers);
	const status = useAppSelector(selectStatus);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const goToUser = (id: number) => {
		console.log(id);
		navigate(`${id}`);
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
