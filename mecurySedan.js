
const VehicleModule = require('./vehicle').vehicle

call Car extends vehicleModule{
    contrustor(make, model, color, milaege) {
        super(make, model, year, color, milaege);
        this.maxPassangers = 5;
        this.passanger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    checkService(){
        if(this.mileage > 30000){
            this.scheduleService = true
            return this.scheduleService;
        }
    }

    Start(){
        if (this.fuel > 0){
            console.log('engine has started.');
            return this.start = true
        } else {
            console.log('no fuel');
            return this.started = false;
        }
    }
     loadPassanger(num){
         if(this.pasanger < this.maxPassangers{
             if((num + this.passanger) <= this.maxPssanger){
                 this.passanger = num;
                 return this.passanger;
             } else {
                 console.log(this.model + " " + this.make + "not have enough space to take all passanger.");
             }
         } else {
             console.log(thi.model + " " + this.make + "is full");
         }
     }
}


let myCar = new Car('mecury', 'rad_sedan', '2002', 'white', '50000');
myCar.start()
myCar.loadPassanger()
myCar.stop()
myCar.checkservice()

console.log(myCar)

