import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule, FormsModule
  ],
  declarations: [],
  exports:[FormsModule, DropdownModule]
})
export class UiModule { }