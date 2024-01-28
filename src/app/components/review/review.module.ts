import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ReviewModule { }

// review.model.ts

export interface Review {
  comment: string;
  rating: number;
}

