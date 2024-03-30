function Device(power){
  this.isOn = false,
  this.power = power,
  this.turnOn = function(){
    console.log('Устройство включено')
    this.isOn - true;
  },
  this.turnOff = function() {
    console.log("Устройство выключено")
    this.isOn = false;
  }
}

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

Computer.prototype = new Device ();
const computer = new Computer (400, 'Intel', 3);

Lamp.prototype = new Device ();
const lamp = new Lamp (150, 'LED','Желтый');

computer.turnOn()
lamp.changeColor ('синий')

let total = lamp.power + computer.power;
console.log (total)