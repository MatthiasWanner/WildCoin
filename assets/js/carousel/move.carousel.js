/**
 * Move the carousel to the specified direction
 * @param {'left' | 'right'} direction - Direction to follow
 * @param {HTMLCollection} articlesOnScreen - The current articles
 * @param {Object[]} articlesList - Content to replace with
 * @param {number} currentIndex - The current index of articles
 */
const moveLeftOrRight = (
	direction,
	articlesOnScreen,
	articlesList,
	currentIndex
) => {
	// Avoid going too fast
	if (isinCooldown()) {
		return;
	}

	if (direction === 'left') {
		updateIndex(currentIndex === 0 ? articlesList.length - 1 : currentIndex - 1);
	} else if (direction === 'right') {
		updateIndex(currentIndex === articlesList.length - 1 ? 0 : currentIndex + 1);
	}

	// Fade in and out
	for (let i = 0; i < articlesOnScreen.length; i++) {
		// Start animation
		articlesOnScreen[i].classList.add('fade__out__in');

		updateContent(
			articlesOnScreen,
			articlesList
		);

		// Remove animation's class so we can restart those steps
		articlesOnScreen[i]
			.getAnimations()[0]
			.finished
			.then(() => articlesOnScreen[i].classList.remove('fade__out__in'));
	}
};

/**
 * Helper to automatically pass arguments to {moveLeftOrRight}
 * @param {'left' | 'right'} direction - Direction to follow
 */
const moveDirection = direction => {
	moveLeftOrRight(
		direction,
		document.getElementsByClassName('article__video'),
		articlesList,
		currentIndex
	);
};

/**
 * Move to a specified index
 * @param {HTMLCollection} articlesOnScreen - The current articles
 * @param {number} index - The index to move to
 */
const moveToIndex = (articlesOnScreen, index) => {
	if (isinCooldown()) {
		return;
	}

	// Fade in and out
	for (let i = 0; i < articlesOnScreen.length; i++) {
		// Start animation
		articlesOnScreen[i].classList.add('fade__out__in');

		updateContent(
			articlesOnScreen,
			articlesList
		);

		// Remove animation's class so we can restart those steps
		articlesOnScreen[i]
			.getAnimations()[0]
			.finished
			.then(() => articlesOnScreen[i].classList.remove('fade__out__in'));
	}
	if (index > articlesList.length) {
		updateIndex(0);

		updateContent(
			document.getElementsByClassName('article__video'),
			articlesList
		);
	} else {
		updateIndex(index - 1);
		updateContent(
			document.getElementsByClassName('article__video'),
			articlesList
		);
	}
};
