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

// Pages
const typhoonPage = document.body.classList.contains('typhoon');
const earthquakePage = document.body.classList.contains('earthquake');
const forestFiresPage = document.body.classList.contains('forest-fires');

// Elements
const backgroundVideo = document.querySelector('.video');
const leftDisasterInfo = document.querySelector('.left-box');
const rightDisasterInfo = document.querySelector('.right-box');
const bottomDisasterInfo = document.querySelector('.bottom-box');
const avatarVideoWrapper = document.querySelector('.avatar');
const avatarVideo = document.querySelector('.avatar > video');
const qrInfo = document.querySelector('.qr-box');
const qrAvatarVideoWrapper = document.querySelector('.qr-avatar');
const qrAvatarVideo = document.querySelector('.qr-avatar > video');

if (typhoonPage) {
	window.addEventListener('keydown', event => {
		switch (event.key) {
			case '2':
				hideInfo(qrAvatarVideo, qrInfo, qrAvatarVideoWrapper);
				setTimeout(
					() =>
						showInfo(
							avatarVideo,
							backgroundVideo,
							leftDisasterInfo,
							bottomDisasterInfo,
							avatarVideoWrapper
						),
					500
				);

				break;

			case '3':
				hideInfo(
					avatarVideo,
					backgroundVideo,
					leftDisasterInfo,
					bottomDisasterInfo,
					avatarVideoWrapper
				);
				break;

			case '4':
				hideInfo(
					avatarVideo,
					backgroundVideo,
					leftDisasterInfo,
					bottomDisasterInfo,
					avatarVideoWrapper
				);
				setTimeout(() => showInfo(qrAvatarVideo, qrInfo, qrAvatarVideoWrapper), 500);
				break;

			case '5':
				hideInfo(qrAvatarVideo, qrInfo, qrAvatarVideoWrapper);
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
	window.addEventListener('keydown', event => {
		switch (event.key) {
			case '2':
				showInfo(
					avatarVideo,
					backgroundVideo,
					leftDisasterInfo,
					bottomDisasterInfo,
					avatarVideoWrapper
				);
				break;
			case '3':
				hideInfo(
					avatarVideo,
					backgroundVideo,
					leftDisasterInfo,
					bottomDisasterInfo,
					avatarVideoWrapper
				);
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
	function showQrInfo() {
		qrInfo.classList.add('active');
		qrAvatarVideoWrapper.classList.add('active');
		qrAvatarVideo.play();
	}

	window.addEventListener('keydown', event => {
		switch (event.key) {
			case '2':
				hideInfo(qrAvatarVideo, qrInfo, qrAvatarVideoWrapper);
				setTimeout(
					() => showInfo(avatarVideo, rightDisasterInfo, bottomDisasterInfo, avatarVideoWrapper),
					500
				);
				break;

			case '3':
				hideInfo(avatarVideo, rightDisasterInfo, bottomDisasterInfo, avatarVideoWrapper);
				break;

			case '4':
				hideInfo(avatarVideo, rightDisasterInfo, bottomDisasterInfo, avatarVideoWrapper);
				setTimeout(() => showInfo(qrAvatarVideo, qrInfo, qrAvatarVideoWrapper), 500);
				break;

			case '5':
				hideInfo(qrAvatarVideo, qrInfo, qrAvatarVideoWrapper);
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

function showInfo(videoToPlay, ...elements) {
	elements.forEach(el => {
		el.classList.add('active');
	});
	videoToPlay.play();
}

function hideInfo(videoToStop, ...elements) {
	elements.forEach(el => {
		el.classList.remove('active');
	});
	videoToStop.pause();
	videoToStop.currentTime = 0;
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
