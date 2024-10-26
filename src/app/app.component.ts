import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { UserData } from './user-input/user-input.model';
import { ResultData } from './result.model';
import { InvestmentResultComponent } from "./investment-result/investment-result.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserInputComponent, InvestmentResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'investement-calculator';
  //resultData ?: ResultData[]; //this is the syntax for array of this object type need to add [] at end

  
}
