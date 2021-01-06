var arrayInteger = new Array();
    for ( let loop = 0 ; loop < 10 ; loop++ ){
	    arrayInteger[loop] = Math.floor(Math.random() * 20) -10;
    }
        console.log("Array :"+arrayInteger);
        var isSumZero = 0;
        for( let loop1 = 0 ; loop1 < 8 ; loop1++ ){
	        for(let loop2 = loop1 + 1 ; loop2 < 9 ; loop2++ ){
		        for(let loop3 = loop2 + 1 ; loop3 < 10 ; loop3++ ){
			        if( arrayInteger[loop1] + arrayInteger[loop2] + arrayInteger[loop3] == 0){
				    console.log( arrayInteger[loop1] + " +" + arrayInteger[loop2] + " +" + arrayInteger[loop3] + " = 0");
				    isSumZero = 1;
			    }
		    }   
	    }
    }
    if( isSumZero == 0)
	console.log("No three integer sum is zero");
    