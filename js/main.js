var bigBall = document.querySelector('.cursor-big');
var smallBall = document.querySelector('.cursor-small');
var hoverables = document.querySelectorAll('.hoverable');
var photoHover = document.getElementById('hoverable-photo');
var hoverPhotoText = document.getElementById('hoverable-photo-text');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (var i = 0; i < hoverables.length; i++) {
	hoverables[i].addEventListener('mouseenter', onMouseHover);
	hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
	hoverPhotoText.addEventListener('mouseenter', onMouseImageHover);
	hoverPhotoText.addEventListener('mouseleave', onMouseImageHoverOut);
}

// Move the cursor
function onMouseMove(e) {
	TweenMax.to(bigBall, 0.4, {
		x: e.pageX - 15,
		y: e.pageY - 15
	});
	TweenMax.to(smallBall, 0.1, {
		x: e.pageX - 5,
		y: e.pageY - 7
	});
	TweenMax.to(photoHover, 0.1, {
		x: e.pageX - 500,
		y: e.pageY - 200
	});
}

// Hover an element
function onMouseHover() {
	TweenMax.to(bigBall, 0.3, {
		scale: 4
	});
}
function onMouseHoverOut() {
	TweenMax.to(bigBall, 0.3, {
		scale: 1
	});
}
// Hover an Bohdan Solovey text
function onMouseImageHover() {
	TweenMax.to(photoHover, 0.3, {
		scale: 1.5,
		opacity: 1
	});
}
function onMouseImageHoverOut() {
	TweenMax.to(photoHover, 0.3, {
		scale: 1,
		opacity: 0
	});
}
