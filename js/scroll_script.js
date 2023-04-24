$(document).ready(function () {
	var scroll = 0;
	var num_img = 0;
	var timer = false;
	var timerStart_right, timerEnd_right;
	$(window).scroll(function (e) {
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
			scroll = $(window).scrollTop();
			$("#scroll_" + num_img).css("opacity", "0");
			if (num_img === 44) {
				num_img = 0;
			} else {
				num_img += 1;
				$("#scroll_" + num_img).css("opacity", "1");
			}
		} else{
			if ($(window).scrollTop() >= scroll + 28) {
				scroll = $(window).scrollTop();
				$("#scroll_" + num_img).css("opacity", "0");
				if (num_img === 44) {
					num_img = 0;
				} else {
					num_img += 1;
					$("#scroll_" + num_img).css("opacity", "1");
				}
			} else if ($(window).scrollTop() <= scroll - 28) {
				scroll = $(window).scrollTop();
				$("#scroll_" + num_img).css("opacity", "0");
				if (num_img == 44) {
					num_img = 0;
				} else {
					num_img += 1;
					$("#scroll_" + num_img).css("opacity", "1");
				}
			}
		}
		// console.log(num_img)
		timer = true;
		timerStart_right = new Date().valueOf();
	});
	// setTimeout(() => {
	// 	console.log(timerEnd_right - timerStart_right);
	// }, "500");
	setInterval(() => {
		if (timer) {
			timerEnd_right = new Date().valueOf();
			if (timerEnd_right - timerStart_right > 100) {
				// console.log(timerEnd_right - timerStart_right)
				$("#scroll_" + num_img).css("opacity", "0");
				if (num_img == 44) {
					num_img = 0;
				} else {
					num_img += 1;
					$("#scroll_" + num_img).css("opacity", "1");
				}
				// console.log(num_img)
				setTimeout(() => {
					$("#scroll_" + num_img).css("opacity", "0");
					if (num_img == 44) {
						num_img = 0;
					} else {
						num_img += 1;
						$("#scroll_" + num_img).css("opacity", "1");
					}
					// console.log(num_img)
				}, 20);
				setTimeout(() => {
					$("#scroll_" + num_img).css("opacity", "0");
					if (num_img == 44) {
						num_img = 0;
					} else {
						num_img += 1;
						$("#scroll_" + num_img).css("opacity", "1");
					}
					// console.log(num_img)
				}, 50);
				setTimeout(() => {
					$("#scroll_" + num_img).css("opacity", "0");
					if (num_img == 44) {
						num_img = 0;
					} else {
						num_img += 1;
						$("#scroll_" + num_img).css("opacity", "1");
					}
					// console.log(num_img)
				}, 90);
				setTimeout(() => {
					$("#scroll_" + num_img).css("opacity", "0");
					if (num_img == 44) {
						num_img = 0;
					} else {
						num_img += 1;
						$("#scroll_" + num_img).css("opacity", "1");
					}
					// console.log(num_img)
				}, 140);
				setTimeout(() => {
					$("#scroll_" + num_img).css("opacity", "0");
					if (num_img == 44) {
						num_img = 0;
					} else {
						num_img += 1;
						$("#scroll_" + num_img).css("opacity", "1");
					}
					// console.log(num_img)
				}, 200);
				setTimeout(() => {
					$("#scroll_" + num_img).css("z-index", "-1");
					let num_zem = num_img
					setTimeout(() => {
						$("#scroll_" + num_zem).css({"opacity": 0,"z-index": "0"});
						if (num_zem == 44){
							$("#scroll_0").css("transition", "none");
						} else{
							$("#scroll_" + (num_zem + 1)).css("transition", "none");
							console.log("#scroll_" + (num_zem + 1))
						}
					}, 400)
					if (num_img == 44) {
						num_img = 0;
					} else {
						num_img += 1;
						$("#scroll_" + num_img).css({"transition": "all ease 0.4s","opacity": "1"});
					}
					console.log(num_img)
				}, 270);
				timer = false;
			}
		}
	}, 45);
});
