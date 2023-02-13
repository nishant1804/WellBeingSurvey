import { Component, OnInit } from '@angular/core';
import { Questions } from '../questions';
import { Review } from '../review';
import { QuestionsService } from '../questions.service';
import { ReviewService } from '../review.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions-panel',
  templateUrl: './questions-panel.component.html',
  styleUrls: ['./questions-panel.component.css']
})

export class QuestionsPanelComponent {
  activeQuestions: Questions[];
  InactiveQuestions: Questions[];
  review: Review[];
  flagTemp : string;
  totalOptional : number | undefined;
  totalText: number | undefined;
  totalRating : number | undefined;
  totalReviews : number | undefined;
  panelData =  new Map<string, number>;
  questionsRate =  new Map<number, number>;
  

  constructor(private questionsService: QuestionsService, private reviewService : ReviewService, 
    private router: Router) { }



  ngOnInit(): void {
    this.flagTemp = "A";
    this.getActiveQuestions();
    this.getInactiveQuestions();
    this.getPanelData();
    this.getQuestionNumberRating();
  }
  
  private getQuestionNumberRating(){
    this.questionsService.getQuestionNumberRating().subscribe(data => {
      this.questionsRate = this.questionsRate = new Map(Object.entries(data).map(([key, value]) => [Number(key), value]));
      this.totalReviews = Array.from(this.questionsRate.values()).reduce((acc, value) => acc + value, 0);
    });
  }

  private getActiveQuestions(){
    this.questionsService.getActiveQuestionsList().subscribe(data => {
      this.activeQuestions = data;
    });
  }

  private getInactiveQuestions(){
    this.questionsService.getInactiveQuestionsList().subscribe(data => {
      this.InactiveQuestions = data;
    });
  }

  private getPanelData(){
    this.questionsService.getPanelData().subscribe(data => {
      this.panelData = new Map(Object.entries(data));
      this.totalText = this.panelData.get("textQuestion");
      this.totalOptional = this.panelData.get("optionalQuestion");
      this.totalRating = this.panelData.get("ratingQuestion");
      
    });
  }

  tabActive(){
    this.flagTemp = "A";
  }

  tabInactive(){
    this.flagTemp = "I";
  }

  reviewDetails(id: number | undefined, typ : string ){
    this.router.navigate(['qReviews', typ, id ]);
  }

  deleteQuestion(id: number| undefined){
    var result = confirm("Want to delete question?");
    if (result) {
      this.questionsService.deleteQuestion(id).subscribe( data => {
        this.getActiveQuestions();
        this.getInactiveQuestions();
      })
    }
  }

  updateQuestion(id: number | undefined){
    this.router.navigate(['update', id]);
  }

  addQuestion(){
    this.router.navigate(['add']);
  }

  updateActiveStatus(id: number | undefined){
    this.questionsService.updateQuestionActiveStatus(id).subscribe( data => {
      this.getActiveQuestions();
      this.getInactiveQuestions();
    })
  }

  updateInactiveStatus(id: number | undefined){
    this.questionsService.updateQuestionInactiveStatus(id).subscribe( data => {
      this.getActiveQuestions();
      this.getInactiveQuestions();
    })
  }

}
