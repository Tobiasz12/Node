var timeFormat = function (uptime) {	
   	hours = Math.floor(uptime / 3600);
	uptime %= 3600;
	minutes = Math.floor(uptime / 60);
	seconds = uptime % 60;
	console.log('Uptime: ' + hours + " hours " + minutes + ' minutes ' + seconds + ' seconds');
};

exports.print = timeFormat;

	