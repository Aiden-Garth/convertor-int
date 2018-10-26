function convert(number, base) {
	num = parseInt(number);
	base = parseInt(base);
	
	if( base >= 1 && base <= 32 ) {
		const result = num.toString(base);
		return result;
		
	} else {
		console.error();
		return undefined;
	}
	
	
}

module.exports = convert();
