import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from './components/review/review.module';


@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private apiUrl ='http://localhost:8080';

  constructor(private http: HttpClient) {}

  submitReview(review: Review): Observable<Review> {
    return this.http.post<Review>(`${this.apiUrl}/review`, review);
  }

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}/review`);
  }
}
