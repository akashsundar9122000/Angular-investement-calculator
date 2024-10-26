import { Injectable } from '@angular/core';
import { UserData } from './user-input/user-input.model';
import { ResultData } from './result.model';

@Injectable({
  providedIn: 'root'
})
export class InvertmentServiceService {

  constructor() { }
  resultData ?: ResultData[];

  calculateInvestmentResults(data : UserData) {
    const {initialInvestment, annualInvestment, expectedReturn, duration} = data; //JS method to destructure data and give value to each variables.
    const annualData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.resultData = annualData;
  }
}
