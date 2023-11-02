import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SigamButtonComponent } from './sigam-button/sigam-button.component';
import { SigamPlusUIComponent } from './sigam-plus-ui.component';



@NgModule({
  declarations: [
    SigamPlusUIComponent,
    SigamButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SigamPlusUIComponent,
    SigamButtonComponent
  ]
})
export class SigamPlusUIModule { }
