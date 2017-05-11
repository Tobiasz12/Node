var os = require('os');

function getOSinfo(){
	var type = os.type();
	
	if(type === 'Darwin') {
	    type = 'OSX';
	} else if(type === 'Windows_NT') {
	    type = 'Windows';
	}

	var userInfo = os.userInfo();
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var timeFormat = require('./modules/timeFormat');
	timeFormat.print();
	console.log('System:', type);
	console.log('Release:', release);
	console.log('CPU model:', cpu);
	console.log('userInfo: ', userInfo.username);
	console.log('Home dir: ',userInfo.homedir);			
}

exports.print = getOSinfo;
 






