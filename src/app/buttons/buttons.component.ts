import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent {
  @Input() numbersList: string[] = [];
  display: string = '0';

  addNumberToDisplay(number: string) {
    if (this.display === '0') {
      this.display = number;
    } else {
      this.display += number;
    }
  }
}
