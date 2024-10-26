import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvertmentServiceService } from '../invertment-service.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  initialInvestement = '0'; //the value coming from the input will be always string even if the input is of type number
  annualInvestment ='0';
  expectedReturn = '5';
  duration = '10';
  constructor(private investmentService: InvertmentServiceService){}

  submitForm(){
    this.investmentService.calculateInvestmentResults({initialInvestment:+this.initialInvestement, annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn, duration: +this.duration
    }); //we can simply add '+' before the string to convert it to number in angular
    this.initialInvestement = '0';
    this.annualInvestment = '0';
    this.expectedReturn = '5';
    this.duration = '10';
  }

}
