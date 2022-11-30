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

function increaseVideoSize(videoWrapper) {
	videoWrapper.classList.add('zoom1');
	videoWrapper.classList.remove('zoom2');
}

function increaseVideoSize2X(videoWrapper) {
	videoWrapper.classList.add('zoom2');
	videoWrapper.classList.remove('zoom1');
}

function defaultVideoSize(videoWrapper) {
	videoWrapper.classList.remove('zoom1');
	videoWrapper.classList.remove('zoom2');
}
