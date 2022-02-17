export interface IColors {
	background: string;
	secondary: string;
	surface: string;
	text1: string;
	text2: string;
	accent: string;
}
export interface ITheme {
	light: IColors;
	dark: IColors;
}
const theme: ITheme = {
	light: {
		background: '#eee',
		surface: '#fff',
		secondary: '#2196f3',
		text1: 'black',
		text2: 'royalblue',
		accent: 'purple',
	},
	dark: {
		background: '#151515',
		surface: '#000',
		secondary: '#2196f3',
		text1: 'white',
		text2: 'grey',
		accent: 'darkred',
	},
};

export default theme;
