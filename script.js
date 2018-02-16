//Function to randomize the images
var theImages = new Array();
theImages[0] = '/images/Swanson/1.jpg';
theImages[1] = '/images/Swanson/2.jpg';
theImages[2] = '/images/Swanson/3.jpg';
theImages[3] = '/images/Swanson/4.jpg';
theImages[4] = '/images/Swanson/5.jpg';
theImages[5] = '/images/Swanson/6.jpg';
theImages[6] = '/images/Swanson/7.jpg';
theImages[7] = '/images/Swanson/8.jpg';
theImages[8] = '/images/Swanson/9.jpg';
theImages[9] = '/images/Swanson/10.jpg';
theImages[10] = '/images/Swanson/11.jpg';
theImages[11] = '/images/Swanson/12.jpg';
theImages[12] = '/images/Swanson/13.jpg';
theImages[13] = '/images/Swanson/14.jpg';

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}


$(document).ready(function(){
	$("#Introduction").hide();
	$("#About").hide();
	$("#SwansoBot").hide();
    $("#Introduction").fadeIn(2500);
	$("#About").delay(2500).fadeIn(2500);
	$("#SwansoBot").delay(5000).fadeIn(2500);
	$("#get-quote").click(function() {
		$.ajax({
			url : 'http://ron-swanson-quotes.herokuapp.com/v2/quotes',
			dataType : "json",
			success : function(json) {
				console.log(json);
				var results = "";
				results += '<p>"' + json + '"</p>';
				$("#quote").html(results);
			}
		});
		var randomNumber = getRandomInt(theImages.length);
		console.log(theImages[randomNumber]);
		var results = "";
		results += '<img src="' + theImages[randomNumber] + '">';
		console.log(results);
		$("#image").html(results);
	})
});
