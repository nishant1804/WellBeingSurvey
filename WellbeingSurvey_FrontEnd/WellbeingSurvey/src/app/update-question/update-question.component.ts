import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Questions } from '../questions';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
  question: Questions;
  id: number;

  constructor(private questionsService: QuestionsService, private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
  
      this.questionsService.getQuestionsById(this.id).subscribe(data => {
        this.question = data;
      }, error => console.log(error));
    }

    onSubmit(){
      this.questionsService.updateQuestion(this.id, this.question).subscribe( data =>{
        this.goToQuestionPanel();
      }, error => console.log(error));
    }
  
    goToQuestionPanel(){
      this.router.navigate(['/questionsPanel']);
    }
}
