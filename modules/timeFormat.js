var os = require('os');
var timeFormat = function (uptime) {
	var uptime = os.uptime();
   	hours = Math.floor(uptime / 3600);
	uptime %= 3600;
	minutes = Math.floor(uptime / 60);
	seconds = uptime % 60;
	console.log('Uptime: ' + hours + " hours " + minutes + ' minutes ' + seconds);
};

exports.print = timeFormat;

	