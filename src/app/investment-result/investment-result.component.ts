import { Component, input } from '@angular/core';
import { ResultData } from '../result.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
result = input<ResultData[]>(); //this is the syntax for array of this object type need to add [] at end
}
