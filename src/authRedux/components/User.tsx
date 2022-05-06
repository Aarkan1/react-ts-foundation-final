import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { selectUsers } from "../usersSlice";
import { IUser } from "../../interfaces";

interface IParams {
	id: string;
}

const User = (): JSX.Element => {
	const { id } = useParams<keyof IParams>() as IParams;
	const users = useAppSelector(selectUsers);

	let currentUser: IUser | undefined;

	if (users) {
		// The plus sign before the id converts it to a number, it's a shortcut.
		currentUser = users.find((user) => user.id === +id);
	}

	return (
		<>
			<h1>This is the page for a single user!</h1>
			{currentUser ? (
				<h3>
					{currentUser.name} | {currentUser.email}
				</h3>
			) : (
				<p>No User with the given id exists</p>
			)}
		</>
	);
};

export default User;
