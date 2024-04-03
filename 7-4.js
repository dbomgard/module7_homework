function Computer (power, processor, coolers) {
  Device.call(this, power),
  this.processor = processor,
  this.coolers = coolers
}

function Lamp (power, type, color) {
  Device.call(this, power),
  this.type = type,
  this.changeColor = function(color){
    console.log (`Цвет лампы изменен на ${color}`)
  }
}

function calculate(devices) {
   let total = 0; 
   devices.forEach(device => {
       if (device.isOn == true) {
         total += device.power
       };
   })
  return total;   
}

Computer.prototype = new Device ();
const computer = new Computer (400, 'Intel', 3);

Lamp.prototype = new Device ();
const lamp = new Lamp (150, 'LED','Желтый');

computer.turnOn()
lamp.changeColor ('синий')

console.log (calculate([computer, lamp]));
