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

const backgroundVideo = document.querySelector('.video');
const leftDisasterInfo = document.querySelector('.left-box');
const rightDisasterInfo = document.querySelector('.right-box');
const bottomDisasterInfo = document.querySelector('.bottom-box');
const avatarVideoWrapper = document.querySelector('.avatar');
const avatarVideo = document.querySelector('.avatar > video');
const qrInfo = document.querySelector('.qr-box');
const qrAvatarVideoWrapper = document.querySelector('.qr-avatar');
const qrAvatarVideo = document.querySelector('.qr-avatar > video');
