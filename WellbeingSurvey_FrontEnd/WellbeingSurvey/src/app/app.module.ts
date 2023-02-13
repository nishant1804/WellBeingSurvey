import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { QuestionsPanelComponent } from './questions-panel/questions-panel.component';
import { QuestionsReviewsComponent } from './questions-reviews/questions-reviews.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyFormComponent,
    QuestionsPanelComponent,
    QuestionsReviewsComponent,
    AddQuestionsComponent,
    UpdateQuestionComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
