function Begin(){

  let images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
	let currentImage = 0;
	let slideshowInterval;
	let carouselImg = document.querySelector('.carousel>img');
	
	carouselImg.src = `./img/${images[currentImage]}`; 
	
	document.querySelector('.carousel').addEventListener('click', function (evt){
			if (evt.target.className == 'control prev') {
					moveSlide(-1);
			} else if (evt.target.className == 'control next'){
					moveSlide(+1);
			}   
	});
	
	function moveSlide(dir) {
		currentImage += dir;
		if (currentImage < 0) {
			currentImage = images.length - 1;
		} else if (currentImage === images.length) {
			currentImage = 0;
		}
		carouselImg.src = `./img/${images[currentImage]}`;
	}
	
	slideshowInterval = setInterval(function () {
			moveSlide(+1);
	}, 1500);
	
	//Add your code here as per specs.

	let ImageArea = document.querySelector('.carousel>img');
	
	ImageArea.addEventListener('mouseover', pauseSlideShow)

	function pauseSlideShow(){
		clearInterval(slideshowInterval);
	}

	ImageArea.addEventListener('mouseout', startSlideShow)

	function startSlideShow(){
		slideshowInterval = setInterval(function () {
			moveSlide(+1);
	}, 1000);
	}
	
	
}

export default Begin;