document.onkeydown = key => {
	switch (key.key) {
		case 'ArrowLeft':
			moveDirection('left');
			break;
		case 'ArrowRight':
			moveDirection('right');
			break;

		default:
			break;
	}
};
