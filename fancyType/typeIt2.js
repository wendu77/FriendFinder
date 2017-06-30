// Tried out one of my FAVORITE developers typeIt plugin!

$('.type-it').typeIt({
     speed: 200,
     lifeLike: true,
     autoStart: true
})
.tiSettings({speed: 200})

$('.type-it2').typeIt({
     speed: 95,
     lifeLike: true,
     autoStart: false,
		startDelay: 2000
})
//.tiPause(2000)
.tiType('Just answer a few simple questions...')
.tiSettings({speed: 80})
.tiDelete(40)
.tiType("We'll match you with the greatest friend <strong>EVER</strong>!");
