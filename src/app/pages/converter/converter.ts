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
  feet: string = '';
  meter: string = '';

  fToC() {
    this.convertToCelsius(this.fahrenheit);
  }
  CtoF() {
    this.convertToFahrenheit(this.celsius);
  }

  mToF() {
    this.convertToFeet(this.meter);
  }
  fToM() {
    this.convertToMeter(this.feet);
  }

  private convertToFahrenheit(input: string): void {
    let number: number = Number(input);
    let calc: number = number * 1.8 + 32;
    let result: string = calc.toString();
    this.fahrenheit = result;
  }
  private convertToCelsius(input: string): void {
    let number: number = Number(input);
    let calc: number = (number - 32) / 1.8;
    let result: string = calc.toString();
    this.celsius = result;
  }
  private convertToFeet(input: string): void {
    let number: number = Number(input);
    let calc: number = number * 3.28084;
    let result: string = calc.toString();
    this.feet = result;
  }
  private convertToMeter(input: string): void {
    let number: number = Number(input);
    let calc: number = number * 0.3048;
    let result: string = calc.toString();
    this.meter = result;
  }
}
