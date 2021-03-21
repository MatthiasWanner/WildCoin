const showModal = (...content) => {
	const modal = document.getElementsByClassName('modal')[0];
	let modalText = modal.textContent;

	for (const text of content) {
		modalText = modalText.replace('{placeholder}', text);
	}

	modal.textContent = modalText;
	modal.classList.remove('hidden');
};
