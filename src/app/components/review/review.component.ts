import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../review.service';
import { Review } from './review.module';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit {
  reviews: Review[] = [];
  newReview: Review = { comment: '', rating: 0 };

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews() {
    this.reviewService.getReviews().subscribe((reviews) => {
      this.reviews = reviews;
    });
  }

  submitReview() {
    this.reviewService.submitReview(this.newReview).subscribe(() => {
      this.loadReviews();
      // Optionally, reset the form after submission
      this.newReview = { comment: '', rating: 0 };
    });
  }
} 
