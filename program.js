process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();   
    if (input !== null) {
        var instruction = input.toString().trim();
	    switch(instruction) {
	    	case '/exit':
	    		process.stdout.write('Quitting app!\n');
	            process.exit();
	        break;
	        case 'LANG':
	        	 console.log(process.env.LANG);
			break;
			case 'version':
				console.log(process.versions.node);
			break;
	        default:    
	        	process.stderr.write('Wrong instruction! ');   

	    } 
    }
});