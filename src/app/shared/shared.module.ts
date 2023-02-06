import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    FilterPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,

  ]
})
export class SharedModule { }
