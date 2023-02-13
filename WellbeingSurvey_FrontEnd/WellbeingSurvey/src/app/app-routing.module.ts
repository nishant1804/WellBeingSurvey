import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { HomePageComponent } from './home-page/home-page.component';
import { QuestionsPanelComponent } from './questions-panel/questions-panel.component';
import { QuestionsReviewsComponent } from './questions-reviews/questions-reviews.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';

const routes: Routes = [
  {path: 'survey', component: SurveyFormComponent},
  {path: 'questionsPanel', component: QuestionsPanelComponent},
  {path: 'qReviews/A/:id', component: QuestionsReviewsComponent},
  {path: 'qReviews/I/:id', component: QuestionsReviewsComponent},
  {path: 'update/:id', component: UpdateQuestionComponent},
  {path: 'add', component: AddQuestionsComponent},
  {path: 'home', component: HomePageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
