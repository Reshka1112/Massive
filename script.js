var array=[];
var count = 0;
callPrompt();
function callPrompt (a){
	var a = prompt ("Введите число");
	var number = 0
	if (number=parseInt(a)) {
		callAdd(number)
	} else {
		callPlus(number)
	}
	console.log (a)
}
function callAdd (a) {
	var length = array.length;
	if (count>=5) {
		callPlus(array);
	} else {
		array.push(a);
		count++;
		callPrompt();
	}
	console.log(array)
}
function callPlus(){
	var res = 0;
	var length = array.length;
	for (var i = 0; i < length; i++){
		res+=array[i];
	}
	alert(res);
	console.log (res)
		var b = confirm("Продолжим?");
		if (b== true) {
			count=0;
			array=[];
			callPrompt();
		}
}
alert("Bye")

