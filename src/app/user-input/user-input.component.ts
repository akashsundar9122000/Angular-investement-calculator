import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserData } from './user-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<UserData>();

  initialInvestement = '0'; //the value coming from the input will be always string even if the input is of type number
  annualInvestment ='0';
  expectedReturn = '5';
  duration = '10';

  submitForm(){
    this.calculate.emit({initialInvestment:+this.initialInvestement, annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn, duration: +this.duration
    }); //we can simply add '+' before the string to convert it to number in angular
  }

}
