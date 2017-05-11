var os = require('os');
var uptime = os.uptime();
var userInfo = os.userInfo();
var release = os.release();
var cpu = os.cpus()[0].model;
var timeFormat = require('./timeFormat');
var type = os.type();

function getOSinfo(){	
	if(type === 'Darwin') {
	    type = 'OSX';
	} else if(type === 'Windows_NT') {
	    type = 'Windows';
	}

	timeFormat.print(uptime);
	console.log('System:', type);
	console.log('Release:', release);
	console.log('CPU model:', cpu);
	console.log('userInfo: ', userInfo.username);
	console.log('Home dir: ',userInfo.homedir);			
}

exports.print = getOSinfo;
 






