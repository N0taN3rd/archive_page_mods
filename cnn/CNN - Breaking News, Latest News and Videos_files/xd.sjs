	{
		var now = new Date();
		var shortterm = new Date(now.getTime() + 26*60*60*1000);
		var longterm = new Date(now.getTime() + 365*24*60*60*1000);
		document.cookie = 'ug=5763647c06daeb0a3c89e617bb0775b4; expires='+longterm.toGMTString()+'; path=/';
		document.cookie = 'ugs=1; expires='+shortterm.toGMTString()+'; path=/';
	}

