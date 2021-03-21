const swapTheme = () => {
	const theme = document.documentElement.classList;

	theme.toggle('theme-dark');
	theme.toggle('theme-light');
};
