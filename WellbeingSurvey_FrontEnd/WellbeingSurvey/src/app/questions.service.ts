import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Questions } from './questions';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private httpClient: HttpClient) { }
  
  getQuestionsList(): Observable<Questions[]>{
    var baseURL = "http://localhost:8080/RSuite/activeQuestions";
    return this.httpClient.get<Questions[]>(`${baseURL}`);
  }

  getQuestionsById(id : number): Observable<Questions>{
    var baseURL = "http://localhost:8080/QSuite/Question";
    return this.httpClient.get<Questions>(`${baseURL}/${id}`);
  }

  getActiveQuestionsList(): Observable<Questions[]>{
    var baseURL = "http://localhost:8080/QSuite/ActiveQuestions";
    return this.httpClient.get<Questions[]>(`${baseURL}`);
  }

  getInactiveQuestionsList(): Observable<Questions[]>{
    var baseURL = "http://localhost:8080/QSuite/InactiveQuestions";
    return this.httpClient.get<Questions[]>(`${baseURL}`);
  }

  getPanelData(): Observable<Map<string, number>>{
    var baseURL = "http://localhost:8080/QSuite/qData";
    return this.httpClient.get<Map<string, number>>(`${baseURL}`);
  }

  getQuestionNumberRating(): Observable<Map<number, number>>{
    var baseURL = "http://localhost:8080/QSuite/rData";
    return this.httpClient.get<Map<number, number>>(`${baseURL}`);
  }

  updateQuestion(id: number, question: Questions): Observable<Object>{
    var baseURL = "http://localhost:8080/QSuite/Questions";
    return this.httpClient.put(`${baseURL}/${id}`, question);
  }

  deleteQuestion(id: number | undefined): Observable<Object>{
    var baseURL = "http://localhost:8080/QSuite/Delete";
    return this.httpClient.delete(`${baseURL}/${id}`);
  }

  updateQuestionActiveStatus(id: number | undefined): Observable<Object>{
    var baseURL = "http://localhost:8080/QSuite/ActiveStatus";
    return this.httpClient.put(`${baseURL}/${id}`, null);
  }

  updateQuestionInactiveStatus(id: number | undefined): Observable<Object>{
    var baseURL = "http://localhost:8080/QSuite/InactiveStatus";
    return this.httpClient.put(`${baseURL}/${id}`, null);
  }

  addQuestion(question: Questions): Observable<any>{
    console.log(question);
    var baseURL = "http://localhost:8080/QSuite/Submit";
    return this.httpClient.post<any>(baseURL, question);
  }
  

}
