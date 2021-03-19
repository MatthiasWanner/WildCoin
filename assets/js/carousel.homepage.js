/**
 * Force a cooldown on carousel swaps
 * @returns {boolean}
 */
const isinCooldown = () => {
	if (lastSwap === void 0) {
		lastSwap = new Date().getTime();
	} else if (new Date().getTime() - lastSwap < cooldown) {
		return true;
	} else {
		lastSwap = new Date().getTime();
	}

	return false;
};

for (const button of document.querySelectorAll('.carousel__number > .carousel__button')) {
	button.onclick = element => {
		moveToIndex(
			document.getElementsByClassName('article__video'),
			parseInt(element.target.textContent));
	};
}
