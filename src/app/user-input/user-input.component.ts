import { Component, output, signal } from '@angular/core';
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
 calculate = output<UserData>();

  initialInvestement = signal('0'); //the value coming from the input will be always string even if the input is of type number
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  submitForm(){
    this.calculate.emit({initialInvestment:+this.initialInvestement(), annualInvestment: +this.annualInvestment(),expectedReturn: +this.expectedReturn(), duration: +this.duration()
    }); //we can simply add '+' before the string to convert it to number in angular
    this.initialInvestement.set('0'); //resetting the form values
    this.annualInvestment.set('0');
    this.expectedReturn.set('5');
    this.duration.set('10');
  }

}
