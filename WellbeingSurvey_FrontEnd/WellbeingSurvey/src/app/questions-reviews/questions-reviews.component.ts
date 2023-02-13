import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Questions } from '../questions';
import { QuestionsService } from '../questions.service';
import { Review } from '../review';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-questions-reviews',
  templateUrl: './questions-reviews.component.html',
  styleUrls: ['./questions-reviews.component.css']
})
export class QuestionsReviewsComponent {
  question : Questions;
  review: Review[];
  id: number;
  typ : string;
  rateObj = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0,
    nine: 0,
    ten: 0,
  };

  avgrRate : number;
  temp : number;
  maxrate : string;
  highestOpt : string;

  optionMap = new Map<any, any>;
  optionArray: string[]  | undefined ;
  tmpOpt : any;
  highestOptNum : number;

  constructor(private reviewService : ReviewService, private questionsService: QuestionsService, 
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.typ = this.route.snapshot.params['typ'];

    this.questionsService.getQuestionsById(this.id).subscribe(data => {
      this.question = data;
      this.optionArray = this.question.option?.split(',');
      if (this.optionArray !== undefined) {
        for (let i = 0; i < this.optionArray.length; i++) {
          if (!this.optionMap.has(this.optionArray[i])) {
            this.optionMap.set(this.optionArray[i], 0);
          }
        }
      }
    }, error => console.log(error));

    if(this.typ === 'A'){
      this.getActiveQuestionReview();
    }
    else{
      this.getInactiveQuestionReview();
    }
  
    
    
  }

  
  ratingAnalysis(rvObj: Review){
      if(rvObj.reviewRating == 1){
        this.rateObj.one++;
      }
      else if(rvObj.reviewRating == 2){
        this.rateObj.two++;
      }
      else if(rvObj.reviewRating == 3){
        this.rateObj.three++;
      }
      else if(rvObj.reviewRating == 4){
        this.rateObj.four++;
      }
      else if(rvObj.reviewRating == 5){
        this.rateObj.five++;
      }
      else if(rvObj.reviewRating == 6){
        this.rateObj.six++;
      }
      else if(rvObj.reviewRating == 7){
        this.rateObj.seven++;
      }
      else if(rvObj.reviewRating == 8){
        this.rateObj.eight++;
      }
      else if(rvObj.reviewRating == 9){
        this.rateObj.nine++;
      }
      else if(rvObj.reviewRating == 10){
        this.rateObj.ten++;
      }

  }

  findMaxRate(){
    
    let maxValue = 0;
    let maxKey = '';

    for (const [key, value] of Object.entries(this.rateObj)) {
      if (value >= maxValue) {
        maxValue = value;
        maxKey = key;
      }
    }
    this.maxrate = maxKey;
  }

  optionAnalysis(review : Review){
    if(this.optionArray !== undefined){
      if(review.reviewOption === 0){
        this.optionMap.set(this.optionArray[0], this.optionMap.get(this.optionArray[0]) + 1);
      } else if(review.reviewOption === 1){
        this.optionMap.set(this.optionArray[1], this.optionMap.get(this.optionArray[1]) + 1);
      }
      else if(review.reviewOption === 2){
        this.optionMap.set(this.optionArray[2], this.optionMap.get(this.optionArray[2]) + 1);
      }
      else if(review.reviewOption === 3){
        this.optionMap.set(this.optionArray[3], this.optionMap.get(this.optionArray[3]) + 1);
      }
    }
    
  }


  private getActiveQuestionReview(){
    this.reviewService.getActiveQuestionReviewList(this.id, this.typ).subscribe(data => {
      this.review = data;
      this.temp = 0;
      for(let i=0; i<this.review.length; i++){
        this.ratingAnalysis(this.review[i]);
        this.temp = this.temp + this.review[i].reviewRating;
        this.optionAnalysis(this.review[i]);
      }
      this.avgrRate = Math.round(this.temp / this.review.length);
      this.findMaxRate();
      const sorted = [...this.optionMap.entries()].sort((a, b) => b[1] - a[1]);
      this.tmpOpt = sorted[0];
      this.highestOpt = this.tmpOpt[0];
      this.highestOptNum = this.tmpOpt[1];
    });
  }

  private getInactiveQuestionReview(){
    this.reviewService.getInactiveQuestionReviewList(this.id, this.typ).subscribe(data => {
      this.review = data;
      this.temp = 0;
      for(let i=0; i<this.review.length; i++){
        this.ratingAnalysis(this.review[i]);
        this.temp =  this.temp + this.review[i].reviewRating;
        this.optionAnalysis(this.review[i]);
      }
      this.avgrRate = Math.round(this.temp / this.review.length);
      this.findMaxRate();
      const sorted = [...this.optionMap.entries()].sort((a, b) => b[1] - a[1]);
      this.tmpOpt = sorted[0];
      this.highestOpt = this.tmpOpt[0];
      this.highestOptNum = this.tmpOpt[1];
    });
  }

}




