const articles = document.querySelectorAll('.article__access');

document.onkeydown = ({ key }) => {
	if (key > 0 && key <= articles.length) {
		document.querySelectorAll('.article__access a')[key - 1].click();
	}
};
