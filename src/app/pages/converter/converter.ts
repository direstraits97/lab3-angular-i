import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
/**
 * Denna fil konverterar fahrenheit och celsius sinsemellan, samt meter och foot.
 * Av: Josefine Backlund
 */
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
  meter: string = ''; //Attribut med tomma strängar som kommer att manipuleras.

  /* Nedan metoder är till för att användas direkt i HTML:en med de manipulerade värden som beräknats fram. */
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

  /* Dessa metoder fungerar lika i utförande med varierande formler för att uppnå rätt värde.
  En textsträng från input skjutsas in och omvandlas till nummer för att beräknas, och omvandlas
  till sträng igen för att skrivas ut till input igen. */
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
