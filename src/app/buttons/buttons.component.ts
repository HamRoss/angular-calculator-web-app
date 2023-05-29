import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent {
  @Input() numbersList: string[] = [];
  @Input() operatorsList: string[] = [];
  display: string = '0';
  numberSum: number = 0;
  sum: string | undefined = undefined;

  addNumberToDisplay(number: string) {
    this.numberSum = 0;
    if (this.display === '0') {
      this.display = number;
    } else {
      this.display += number;
    }
  }

  addOperatorToDisplay(operator: string) {
    this.display += ` ${operator} `;
  }

  calculateSum() {
    let sumPartStrings = this.display.split(' ');
    this.performCalculation(sumPartStrings);

    this.display = '0';
  }

  performCalculation(sumPartStrings: string[]) {
    const num1 = sumPartStrings[0];
    const operator = sumPartStrings[1];
    const num2 = sumPartStrings[2];

    if (operator === '+') {
      this.numberSum = +num1 + +num2;
    } else if (operator === '-') {
      this.numberSum = +num1 - +num2;
    } else if (operator === '*') {
      this.numberSum = +num1 * +num2;
    } else if (operator === '/') {
      this.numberSum = +num1 / +num2;
    }
    sumPartStrings.shift();
    sumPartStrings.shift();
    sumPartStrings.shift();
    this.sum = String(this.numberSum);

    if (sumPartStrings.length > 0) {
      if (this.sum !== undefined) {
        sumPartStrings.unshift(this.sum);
        this.performCalculation(sumPartStrings);
      }
    }
  }
}
