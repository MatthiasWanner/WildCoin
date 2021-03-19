const sunSVG = `
<svg fill="black" height="30px" viewBox="0 0 24 24" width="18px" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"/>
</svg>
`;

const moonSVG = `
<svg width="30" xmlns="http://www.w3.org/2000/svg">
    <path d="m12.7,2c-5.37,0.15 -9.7,4.57 -9.7,10c0,5.52 4.48,10 10,10c3.52,0 6.6,-1.82 8.4,-4.56l-0.3,0c-5.52,0 -10,-4.48 -10,-10c0,-2 0.6,-3.87 1.6,-5.44z"/>
</svg>
`;

const swapTheme = () => {
	const root = document.querySelector(':root');
	const theme = root.classList[0];

	if (theme === 'theme-light') {
		root.classList.remove('theme-light');
		root.classList.add('theme-dark');
		// Change icon to a white moon
		document.getElementById('themeSwap').children[0].innerHTML = 'assets/img/moon.svg';
	} else {
		root.classList.remove('theme-dark');
		root.classList.add('theme-light');
		// Swap icon back to black sun
		document.getElementById('themeSwap').children[0].innerHTML = sunSVG;
	}
};
