var a=[1,2,"a","b",5,6];
var c=a.slice(0);
write(a);
var b=a.splice(2,2,3,4);
write(b);
write(a);
function isNumber(value){
	if(!isNaN(value)&&value!=="")
	{
		write(value+" is a number");
	}
	else
	{
		write(value+" is not a number");
	}
}
write(c);
c.forEach(isNumber);