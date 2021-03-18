/**
 * Update the articles
 * @param {HTMLCollection} articlesOnScreen - The current articles
 * @param {Object} articlesList - Content to replace with
 * @param {Object[]} articlesList - Content to replace with
 * @param {string} articlesList.title - Video's title
 * @param {string} articlesList.link - Video's original link
 * @param {string} articlesList.date - Video's upload date
 * @param {string} articlesList.desc - A small description of the video
 * @param {string[]} articlesList.tags - A list of tags
 */
const updateContent = (articlesOnScreen, articlesList) => {
	for (let i = 0; i < articlesOnScreen.length; i++) {
		const [ img, complement ] = articlesOnScreen[i].children;
		const [ title, date, desc, tags ] = complement.children;

		img.src = articlesList[currentIndex].videos[i].image;
		title.textContent = articlesList[currentIndex].videos[i].title;
		date.textContent = articlesList[currentIndex].videos[i].date;
	}
};
