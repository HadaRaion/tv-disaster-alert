window.addEventListener('keydown', event => {
	switch (event.key) {
		case '0':
			location.href = './index.html';
			break;
		case '1':
			document.querySelector('.video > video').play();
			break;
		default:
			break;
	}
});
