import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  imports: [FormsModule],
  templateUrl: './converter.html',
  styleUrl: './converter.css',
})
export class Converter {
  celsius: string = '';
  fahrenheit: string = '';

  fToC() {
    this.convertToCelsius(this.fahrenheit);
  }
  CtoF() {
    this.convertToFahrenheit(this.celsius);
  }

  convertToFahrenheit(input: string): void {
    let number: number = Number(input);
    let calc: number = number * 1.8 + 32;
    let result: string = calc.toString();
    this.fahrenheit = result;
  }
  convertToCelsius(input: string): void {
    let number: number = Number(input);
    let calc: number = (number - 32) / 1.8;
    let result: string = calc.toString();
    this.celsius = result;
  }
}
