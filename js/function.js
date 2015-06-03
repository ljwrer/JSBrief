function Point(x,y){
	this.x=x;
	this.y=y;
}
Point.prototype.move=function(x,y){
	this.x+=x;
	this.y+=y;
}

p=new Point(5,5);
p.move();
write(p.x+" "+p.y);
var q={
	x:1,
	y:2,
	r:3,
}
write(q.x+" "+q.y+" "+q.r);
p.move.apply(q,[3,2]);
write(q.x+" "+q.y+" "+q.r);
var movefast=p.move.bind(q,5,5);
movefast();
write(q.x+" "+q.y+" "+q.r);
movefast();
setTimeout(write(q.x+" "+q.y+" "+q.r),20000);
function Circle(x,y,r){
	Point.apply(this,[x,y]);
	this.r=r;
}
Circle.prototype=Object.create(Point.prototype);
var r=new Circle(1,2,3);
write(r.x+" "+r.y+" "+r.r);
r.move(2,2);
write(r.x+" "+r.y+" "+r.r);
Circle.prototype.area=function(){
	write(Math.PI*this.r*this.r);
}
r.area();
Circle.prototype.constructor=Circle;

