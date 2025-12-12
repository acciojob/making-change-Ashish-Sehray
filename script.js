const makeChange = (c) => {
  // your name here
	let obj={};
	if(c >= 25){
		obj.q = Math.floor(c/25);
		c= c%25;
	}else{
		obj.q=0;
	}
	if(c<25 && c>=10){
		obj.d = Math.floor(c/10);
		c= c%10;
	}else{
		obj.d=0;
	}
	if(c<10 && c>=5){
		obj.n = Math.floor(c/5);
		c= c%5;
	}else{
		obj.n=0;
	}
	if(c<5 && c>=1){
		obj.p = Math.floor(c/1);
		
	}else{
		obj.p=0;
	}
	return obj;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
