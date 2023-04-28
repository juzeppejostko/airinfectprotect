$(document).ready(function () {
	const registerVideo = (bound, video) => {
		bound = document.querySelector(bound);
		video = document.querySelector(video);
		const scrollVideo = () => {
			if (video.duration) {
				const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
				const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
				const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

				video.currentTime = video.duration * percentScrolled;
			}
			requestAnimationFrame(scrollVideo);
		}
		requestAnimationFrame(scrollVideo);
	}
	var $width = $(window).width();
    if($width <= 720 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)){
		registerVideo("#bound-one", "#bound-one #video_pref_mob");
	} else{
		registerVideo("#bound-one", "#bound-one #video_pref");
	}
});
