import { DarkTheme } from '@styled-icons/fluentui-system-regular/DarkTheme';
import { LightMode } from '@styled-icons/material-rounded/LightMode';
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemingContext';
import { AppName, Header as CustomHeader } from './Header';
type Props = {};

const Header = (props: Props) => {
	const { toggleTheme, theme } = useContext(ThemeContext);
	return (
		<CustomHeader>
			<AppName>Todo App</AppName>
			{theme === 'dark' ? (
				<DarkTheme size='45' onClick={toggleTheme} />
			) : (
				<LightMode size='45' onClick={toggleTheme} />
			)}
		</CustomHeader>
	);
};

export default Header;
