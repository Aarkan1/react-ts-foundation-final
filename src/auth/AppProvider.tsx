import { createContext, ReactNode, useContext, useState } from "react";

interface IAppContext {
	user: string | null;
	loginError: boolean;
	login: (credential: string) => Promise<void>;
	logout: () => void;
}

interface AppProviderProps {
	children: ReactNode;
}

const AppContext = createContext<IAppContext>({} as IAppContext);

export const useAppContext = (): IAppContext => {
	return useContext(AppContext);
};

const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
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

	const values: IAppContext = {
		user,
		loginError,
		login,
		logout,
	};

	return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
