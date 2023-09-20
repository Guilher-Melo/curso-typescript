export class Carro {
  private readonly motor = new Motor();
  ligar(): void {
    this.motor.ligar();
  }
  desligar(): void {
    this.motor.desligar();
  }
  acelerar(): void {
    this.motor.acelerar();
  }
  parar(): void {
    this.motor.parar();
  }
}

export class Motor {
  ligar(): void {
    console.log('O motor está ligado...');
  }
  desligar(): void {
    console.log('O motor está desligado...');
  }
  acelerar(): void {
    console.log('O motor está acelerando...');
  }
  parar(): void {
    console.log('O motor está parado...');
  }
}

const carro = new Carro();
carro.ligar();
