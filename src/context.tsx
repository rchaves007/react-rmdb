import React, { createContext, ReactNode, useState } from 'react';

type ContextState = {
	sessionId: string;
	username: string;
	isLoggedIn: boolean;
};

export type ContextType = {
	state: ContextState;
	setState: React.Dispatch<React.SetStateAction<ContextState>>;
};

export const Context = createContext<ContextType>({} as ContextType);

type PropsType = {
	children: ReactNode;
};

const UserProvider: React.FC<PropsType> = ({ children }) => {
	const [state, setState] = useState({} as ContextState);

	return <Context.Provider value={{ state, setState }}>{children}</Context.Provider>;
};

export default UserProvider;
