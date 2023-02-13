import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsReviewsComponent } from './questions-reviews.component';

describe('QuestionsReviewsComponent', () => {
  let component: QuestionsReviewsComponent;
  let fixture: ComponentFixture<QuestionsReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsReviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionsReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
