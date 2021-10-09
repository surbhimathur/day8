class uber{
 constructor(base_fare,time,distance)
 {
     this.base_fare = base_fare;
     this.time = time;
     this.distance = distance;
 }
 getprice()
 {
     this.cost_per_min=4;
     this.cost_per_mile=10;
     this.price= this.base_fare +(this.cost_per_min*this.time)+(this.cost_per_mile*this.distance);
     return this.price;
 }
}

const uberx= new uber(50,30,2);
console.log(uberx.getprice());