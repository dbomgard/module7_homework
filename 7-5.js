class Device {
    constructor (power) {
      this.isOn = false;
      this.power = power;
    }
    
    turnOn () {
      console.log ('Устройство включено')
      this.isOn = true;
    }
    turnOff () {
      console.log ('Устройство выключено')
      this.isOn = false;
    }
}
  
class Computer extends Device {
    constructor(power, processor, coolers) {
      super(power);
      this.processor = processor;
      this.coolers = coolers;
    }
}
  
class Lamp extends Device {
    constructor(power, type, color) {
      super(power);
      this.type = type;
      this.color = color;
    }
    
    changeColor (color) {
      console.log (`Цвет лампы изменен на ${color}`)
    }
}
  
let computer = new Computer (400, "Intel", 3);
let lamp = new Lamp (100, "LED", "Желтый");
  
computer.turnOn ();
lamp.changeColor ('синий');
let total = computer.power + lamp.power;
console.log (total);