import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Review } from './review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private httpClient: HttpClient) { }

  submitReviews(review: Review[]): Observable<any>{
    const baseURL = 'http://localhost:8080/RSuite/Submit';
    if (!review || review.length === 0) {
      return of({ success: false, message: 'No reviews to submit' });
    } else {
      console.log(review);
      return this.httpClient.post<any>(baseURL, review);
    }
  }

  getActiveQuestionReviewList(id : number, typ : string): Observable<Review[]>{
    var baseURL = "http://localhost:8080/QSuite/ActiveQuestions";
    return this.httpClient.get<Review[]>(`${baseURL}/${id}`);
  }

  getInactiveQuestionReviewList(id : number, typ : string): Observable<Review[]>{
    var baseURL = "http://localhost:8080/QSuite/InactiveQuestions";
    return this.httpClient.get<Review[]>(`${baseURL}/${id}`);
  }

}
