import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../header/header.component';
import { UserInputComponent } from '../user-input/user-input.component';
import { InvestmentResultComponent } from '../investment-result/investment-result.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserModule } from '../user-input/user/user.module';



@NgModule({
  declarations: [AppComponent,HeaderComponent,InvestmentResultComponent],
  imports: [
    BrowserModule,UserModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
