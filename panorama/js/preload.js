var w = document.documentElement.clientWidth || document.body.clientWidth;
var h = document.documentElement.clientHeight || document.body.clientHeight;

var letter;
var letterSize = 24;
var streams = [];

function setup() {

	background(0);
	pixelDensity(2);
	createCanvas(w, h);
	textSize(letterSize);

	var x = 0;
	var y = 0;
	for (var i = 0; i <= width/letterSize; i++) {

		stream = new Stream();
		stream.init(x, round(random(-400, 0)) );
		streams.push(stream);
		x += letterSize;
	}
	setTimeout(function(){window.location.href="panorama.html"},5000);
}

function draw() {

	fill(0);
	rect(0, 0, w, h);

	streams.forEach(function(stream) { stream.render(); });
}

function Letter(x, y, speed) {
	this.x = x;
	this.y = y;
	this.speed = speed;
	this.value;
	this.switchInterval = round(random(5, 30));
	this.setRandomletter = function() {

		if ( frameCount % this.switchInterval == 0 ) {
			this.value = String.fromCodePoint(int(random(65, 90)).toString()
			);
		}
	}

	this.rain = function() {

		this.y = ( stop == true )
			? this.y += this.speed
			: (( this.y >= (height + letterSize) ) ? -letterSize : this.y += this.speed);
	}
}

function Stream() {
	this.letters = [];
	this.totalletters = round(random(12, 28)); // 8, 24
	this.speed = round(random(4, 10)); // 2, 8

	this.init = function(x, y) {

		for ( var i=0; i<=this.totalletters; i++) {
			letter = new Letter(x, y, this.speed);
			letter.setRandomletter();
			this.letters.push(letter);
			y -= letterSize;
		}
	}

	this.render = function() {
		this.letters.forEach(function(letter, i, all) {

			fill(111);
			text( letter.value, letter.x, letter.y );

			fill(0, 0, 0, (i*floor(255/(all.length-1))) );
			rect( letter.x, letter.y - letterSize, letterSize, letterSize );

			letter.rain();
			letter.setRandomletter();
		});
	}
}