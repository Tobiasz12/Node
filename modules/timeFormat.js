var timeFormat = function (time) {	
   	hours = Math.floor(time / 3600);
	time %= 3600;
	minutes = Math.floor(time / 60);
	seconds = time % 60;
	console.log('Uptime: ' + hours + " hours " + minutes + ' minutes ' + seconds + ' seconds');
};

exports.print = timeFormat;

	