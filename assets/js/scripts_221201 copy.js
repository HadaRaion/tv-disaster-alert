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

const typhoonPage = document.body.classList.contains('typhoon');
const earthquakePage = document.body.classList.contains('earthquake');
const forestFiresPage = document.body.classList.contains('forest-fires');

if (typhoonPage) {
	const backgroundVideo = document.querySelector('.video');
	const leftDisasterInfo = document.querySelector('.left-box');
	const rightDisasterInfo = document.querySelector('.right-box');
	const bottomDisasterInfo = document.querySelector('.bottom-box');
	const avatarVideoWrapper = document.querySelector('.avatar');
	const avatarVideo = document.querySelector('.avatar > video');
	const qrInfo = document.querySelector('.qr-box');
	const qrAvatarVideoWrapper = document.querySelector('.qr-avatar');
	const qrAvatarVideo = document.querySelector('.qr-avatar > video');

	function showDisasterInfo() {
		backgroundVideo.classList.add('active');
		leftDisasterInfo.classList.add('active');
		bottomDisasterInfo.classList.add('active');
		avatarVideoWrapper.classList.add('active');
		avatarVideo.play();
	}

	function hideDisasterInfo() {
		backgroundVideo.classList.remove('active');
		leftDisasterInfo.classList.remove('active');
		bottomDisasterInfo.classList.remove('active');
		avatarVideoWrapper.classList.remove('active');
		avatarVideo.pause();
		avatarVideo.currentTime = 0;
	}

	function showQrInfo() {
		qrInfo.classList.add('active');
		qrAvatarVideoWrapper.classList.add('active');
		qrAvatarVideo.play();
	}

	function hideQrInfo() {
		qrInfo.classList.remove('active');
		qrAvatarVideoWrapper.classList.remove('active');
		qrAvatarVideo.pause();
		qrAvatarVideo.currentTime = 0;
	}

	window.addEventListener('keydown', event => {
		switch (event.key) {
			case '2':
				hideQrInfo();
				setTimeout(() => showDisasterInfo(), 500);

				break;

			case '3':
				hideDisasterInfo();
				break;

			case '4':
				hideDisasterInfo();
				setTimeout(() => showQrInfo(), 500);
				break;

			case '5':
				hideQrInfo();
				break;

			case 'q':
				increaseVideoSize(avatarVideoWrapper);
				break;

			case 'w':
				increaseVideoSize2X(avatarVideoWrapper);
				break;

			case 'e':
				defaultVideoSize(avatarVideoWrapper);
				break;

			case 'a':
				increaseVideoSize(qrAvatarVideoWrapper);
				break;

			case 's':
				increaseVideoSize2X(qrAvatarVideoWrapper);
				break;

			case 'd':
				defaultVideoSize(qrAvatarVideoWrapper);
				break;
			default:
				break;
		}
	});
}
if (earthquakePage) {
	const avatarVideoWrapper = document.querySelector('.avatar');

	window.addEventListener('keydown', event => {
		switch (event.key) {
			case '2':
				document.querySelector('.video').classList.add('active');
				document.querySelector('.left-box').classList.add('active');
				document.querySelector('.bottom-box').classList.add('active');
				document.querySelector('.avatar').classList.add('active');
				document.querySelector('.avatar > video').play();

				break;
			case '3':
				document.querySelector('.video').classList.remove('active');
				document.querySelector('.left-box').classList.remove('active');
				document.querySelector('.bottom-box').classList.remove('active');
				document.querySelector('.avatar').classList.remove('active');
				document.querySelector('.avatar > video').pause();
				document.querySelector('.avatar > video').currentTime = 0;
				break;

			case 'q':
				increaseVideoSize(avatarVideoWrapper);
				break;

			case 'w':
				increaseVideoSize2X(avatarVideoWrapper);
				break;

			case 'e':
				defaultVideoSize(avatarVideoWrapper);
				break;

			default:
				break;
		}
	});
}
if (forestFiresPage) {
	const backgroundVideo = document.querySelector('.video');
	const leftDisasterInfo = document.querySelector('.left-box');
	const rightDisasterInfo = document.querySelector('.right-box');
	const bottomDisasterInfo = document.querySelector('.bottom-box');
	const avatarVideoWrapper = document.querySelector('.avatar');
	const avatarVideo = document.querySelector('.avatar > video');
	const qrInfo = document.querySelector('.qr-box');
	const qrAvatarVideoWrapper = document.querySelector('.qr-avatar');
	const qrAvatarVideo = document.querySelector('.qr-avatar > video');

	function showDisasterInfo() {
		rightDisasterInfo.classList.add('active');
		bottomDisasterInfo.classList.add('active');
		avatarVideoWrapper.classList.add('active');
		avatarVideo.play();
	}

	function hideDisasterInfo() {
		rightDisasterInfo.classList.remove('active');
		bottomDisasterInfo.classList.remove('active');
		avatarVideoWrapper.classList.remove('active');
		avatarVideo.pause();
		avatarVideo.currentTime = 0;
	}

	function showQrInfo() {
		qrInfo.classList.add('active');
		qrAvatarVideoWrapper.classList.add('active');
		qrAvatarVideo.play();
	}

	function hideQrInfo() {
		qrInfo.classList.remove('active');
		qrAvatarVideoWrapper.classList.remove('active');
		qrAvatarVideo.pause();
		qrAvatarVideo.currentTime = 0;
	}

	window.addEventListener('keydown', event => {
		switch (event.key) {
			case '2':
				hideQrInfo();
				setTimeout(() => showDisasterInfo(), 500);
				break;

			case '3':
				hideDisasterInfo();
				break;

			case '4':
				hideDisasterInfo();
				setTimeout(() => showQrInfo(), 500);
				break;

			case '5':
				hideQrInfo();
				break;

			case 'a':
				increaseVideoSize(qrAvatarVideoWrapper);
				break;

			case 's':
				increaseVideoSize2X(qrAvatarVideoWrapper);
				break;

			case 'd':
				defaultVideoSize(qrAvatarVideoWrapper);

			default:
				break;
		}
	});
}

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
