package com.magnit.wellbeingSurvey.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "SurveyReview")

public class SurveyReview {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long reviewId;
	
	@Column(name = "questionId")
	private long questionId;

	@Column(name = "review_Text")
	private String reviewText;
	
	@Column(name = "review_Option")
	private int reviewOption;
	
	@Column(name = "review_Rating")
	private int reviewRating;
	
	public SurveyReview() {
		
	}
	
	public SurveyReview(long questionId, String reviewText, int reviewOption, int reviewRating) {
		super();
		this.questionId = questionId;
		this.reviewText = reviewText;
		this.reviewOption = reviewOption;
		this.reviewRating = reviewRating;
	}

	public long getReviewId() {
		return reviewId;
	}

	public void setReviewId(long reviewId) {
		this.reviewId = reviewId;
	}

	public long getQuestionId() {
		return questionId;
	}

	public void setQuestionId(long questionId) {
		this.questionId = questionId;
	}

	public String getReviewText() {
		return reviewText;
	}

	public void setReviewText(String reviewText) {
		this.reviewText = reviewText;
	}

	public int getReviewOption() {
		return reviewOption;
	}

	public void setReviewOption(int reviewOption) {
		this.reviewOption = reviewOption;
	}

	public int getReviewRating() {
		return reviewRating;
	}

	public void setReviewRating(int reviewRating) {
		this.reviewRating = reviewRating;
	}
	
	
}
