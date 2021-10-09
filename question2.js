class circle
{
 constructor()
 {
    this.radius=1.0;
    this.color="red";
 }
Circle(radius)
 {
     this.radius=radius;
     return this.radius;
 }
 circle(radius,color)
 {
     this.radius=radius;
     this.color=color;
     return this.radius + this.color;
 }

 getRadius()
 {
     return this.radius;
 }
 getColor(){
     return this.color;
 }
 setRadius(radius){
     this.radius=radius;
     console.log(this.radius);
 }
 setColor(color)
 {
     this.color=color;
     console.log(this.color);
 }
 getArea(){
     this.area=3.14*this.radius*this.radius;
     return this.area;
 }
 getCircumference(){
     this.circum=2*3.14*this.radius;
     return this.circum;
 }
 toString(){
   console.log( this.radius.toString());
    console.log(this.color.toString());
 }
}

const a= new circle();
console.log(a);
const b= new circle();
console.log("radius is" +" "+ b.Circle(12));
const c= new circle();
console.log("radius and color is" +" "+ c.circle(14,"yellow"));
const d= new circle();
console.log(d.getRadius());
const e= new circle();
console.log(e.getColor());
const f= new circle();
f.setRadius(4);
const g=new circle();
g.setColor("orange");
const h=new circle();
console.log(h.getArea());
const i=new circle();
console.log(i.getCircumference());
const j=new circle();
j.toString();
