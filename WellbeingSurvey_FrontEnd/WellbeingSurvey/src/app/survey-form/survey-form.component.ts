import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Questions } from '../questions';
import { Review } from '../review';
import { QuestionsService } from '../questions.service';
import { ReviewService } from '../review.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {
  questions: Questions[] | undefined;
  review: Review[] = [new Review()];
  singleReview = new Review() ;
  quesLength : number | undefined;
  question : Questions = new Questions();
  curr : number;
  nextEnabled :string;

  constructor(private questionsService: QuestionsService, private reviewService : ReviewService,
    private router: Router, private changeDetector: ChangeDetectorRef) {

    }

  ngOnInit(): void {
    this.getQuestions();
    this.curr = 0;
  }


  getQuestions(){
    this.questionsService.getQuestionsList().subscribe(data => {
      this.questions = data;
      this.quesLength = data.length;
      

      if(this.questions !== undefined){
        this.nextEnabled = 'yes';
        this.question = this.questions[this.curr];
        if(this.question.questionId !== undefined){
          this.singleReview.questionId = this.question.questionId;
        }
        
      }
    });   
    
  }
  
  isValid: boolean = false;

  validateForm() {
    
    if (this.singleReview.reviewText !== undefined && this.singleReview.reviewText.trim().length > 0
    || this.singleReview.reviewOption !== undefined
    || this.singleReview.reviewRating !== undefined) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }




  saveNext(){
    this.curr = this.curr + 1;
    if(this.curr + 1== this.questions?.length){
      this.nextEnabled = 'no';
    }
    if(this.questions !== undefined){
      this.question = new Questions();
      this.question = this.questions[this.curr];
    }
    this.review.push(this.singleReview);
    console.log(this.review);
    this.singleReview = new Review();
    if(this.question.questionId !== undefined){
      this.singleReview.questionId = this.question.questionId;
    }
    this.isValid = false;
  }

  saveReview(){
    this.review.push(this.singleReview);
    this.review.splice(0, 1);
    console.log(this.review);
    this.reviewService.submitReviews(this.review).subscribe( data =>{
      if (data.success == false) {
        alert('Error submitting reviews. Please try again later.');
        this.router.navigate(['/survey']);
      } else {
        alert('Reviews submitted successfully!');
        this.review = [];
        this.router.navigate(['/home']);
      }
    },
    error => {
      alert('Error submitting reviews. Please try again later.');
    });
  }

  onSubmit(){
    this.saveReview();
  }

  

}
