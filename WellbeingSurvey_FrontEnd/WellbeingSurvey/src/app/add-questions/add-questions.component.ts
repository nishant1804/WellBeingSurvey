import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Questions } from '../questions';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit{

  question: Questions = new Questions();
  qTyp : string;

  constructor(private questionsService: QuestionsService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    
    this.question.option = this.question.optionFirst + "," + this.question.optionSec 
    if(this.question.optionThird !== undefined){
      this.question.option = this.question.option + ","+ this.question.optionThird;
    }
    if(this.question.optionFour !== undefined){
      this.question.option = this.question.option + "," + this.question.optionFour;
    }
     console.log("Hi " + this.question);
    this.questionsService.addQuestion(this.question).subscribe( data =>{
      this.router.navigate(['/questionsPanel']);
    }, error => console.log(error));
  }
}
