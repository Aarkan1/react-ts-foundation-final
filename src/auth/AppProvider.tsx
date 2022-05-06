import { createContext, ReactNode, useContext, useState } from "react";
import { IUser } from "../interfaces";

interface IAppContext {
	user: string | null;
	users: IUser[] | null;
	loginError: boolean;
	login: (credential: string) => Promise<void>;
	logout: () => void;
	fetchUsersAsync: () => Promise<void>;
}

interface AppProviderProps {
	children: ReactNode;
}

const AppContext = createContext<IAppContext>({} as IAppContext);

export const useAppContext = (): IAppContext => {
	return useContext(AppContext);
};

const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
	const [users, setUsers] = useState<IUser[] | null>(null);
	const [user, setUser] = useState<string | null>(null);
	const [loginError, setLoginError] = useState<boolean>(false);

	const login = async (credential: string): Promise<void> => {
		if (credential === "admin") {
			setUser(credential);
			setLoginError(false);
		} else {
			setLoginError(true);
		}
	};

	const logout = (): void => {
		setUser(null);
	};

	const fetchUsersAsync = async () => {
		const result = await fetch("https://jsonplaceholder.cypress.io/users");
		const users: any = await result.json();

		// We modify the users since we are only interested in id, name and email
		const modifiedUsers: IUser[] = users.map((user: any) => {
			return { id: user.id, name: user.name, email: user.email };
		});

		setUsers(modifiedUsers);
	};

	const values: IAppContext = {
		user,
		users,
		loginError,
		login,
		logout,
		fetchUsersAsync,
	};

	return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
