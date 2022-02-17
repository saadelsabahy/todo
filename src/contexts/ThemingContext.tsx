import React, { useCallback, useState } from 'react';
import { ThemeType } from '../types';

type Props = {};
type contextType = {
	theme: ThemeType;
	toggleTheme: () => void;
};
export const ThemeContext = React.createContext<contextType>({} as contextType);

export const ThemingContext: React.FC = ({ children }) => {
	const [theme, setTheme] = useState<ThemeType>('light');

	const toggleTheme = useCallback(() => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	}, [setTheme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemingContext;
