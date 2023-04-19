// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numPessoas: number = 5;
  numComodos: number = 8;
  temMaquina: boolean = true;
  numTvs: number = 3;
  numComputadores: number = 4;
  tarifa: number = 0.62854;
  consumo: number = 0;
  valorConta: number = 0;

  calcular() {
    // Calcular o consumo do chuveiro
    const consumoChuveiro = (10 / 60) * 5500; // 5500 W é a potência média de um chuveiro elétrico
    let totalConsumo = consumoChuveiro;

    // Calcular o consumo dos demais aparelhos
    totalConsumo += (this.temMaquina ? 0.3 : 0) * 30 * this.numPessoas;
    totalConsumo += this.numTvs * 0.1 *
    totalConsumo + this.numTvs * 0.1 + this.numComputadores * 0.15 * 8 * 30;

    // Calcular o consumo dos cômodos
    totalConsumo += this.numComodos * 0.5 * 30;

    // Calcular o valor da conta
    this.consumo = totalConsumo / 1000;
    this.valorConta = this.consumo * this.tarifa;
  }
}