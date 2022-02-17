import { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Footer from './components/footer';
import Header from './components/header';
import { RootContainer } from './components/rootContainer';
import { ThemeContext } from './contexts/ThemingContext';
import Colors from './utils/theme';

function App() {
	const { theme } = useContext(ThemeContext);
	console.log({ theme });

	return (
		<ThemeProvider theme={theme === 'light' ? Colors.light : Colors.dark}>
			<RootContainer>
				<Header />
				<Footer />
			</RootContainer>
		</ThemeProvider>
	);
}

export default App;
