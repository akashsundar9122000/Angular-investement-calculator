import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvertmentServiceService } from '../invertment-service.service';

@Component({
  selector: 'app-investment-result',
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  private investmentService = inject(InvertmentServiceService); //another method to inject service
  get result(){
    return this.investmentService.resultData;
  }
}
