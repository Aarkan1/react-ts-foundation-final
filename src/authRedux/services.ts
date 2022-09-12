import { IUser } from "../interfaces";

export async function fetchUsers() {
	const result = await fetch("https://jsonplaceholder.cypress.io/users");
	const rawUsers = await result.json();

	// We modify the users since we are only interested in id, name and email
	const modifiedUsers: IUser[] = rawUsers.map((user: any) => {
		return { id: user.id, name: user.name, email: user.email };
	});

	return modifiedUsers;
}
