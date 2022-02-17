import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemingProvider from './contexts/ThemingContext';
import './index.css';
ReactDOM.render(
	<React.StrictMode>
		<ThemingProvider>
			<App />
		</ThemingProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
