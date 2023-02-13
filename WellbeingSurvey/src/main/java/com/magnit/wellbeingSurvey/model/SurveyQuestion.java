package com.magnit.wellbeingSurvey.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "SurveyQuestion")

public class SurveyQuestion {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long questionId;

	@Column(name = "question_Dscp")
	private String questionDscp;
	
	@Column(name = "q_Type")
	private String qType;
	
	@Column(name = "option_Size")
	private int optionSize;
	
	@Column(name = "options")
	private String options;
	
	@Column(name = "status")
	private boolean status;
	
	public SurveyQuestion() {
		
	}
	
	public SurveyQuestion(String questionDscp, String qType, int optionSize, String options, boolean status) {
		super();
		this.questionDscp = questionDscp;
		this.qType = qType;
		this.optionSize = optionSize;
		this.options = options;
		this.status = status;
	}

	public long getQuestionId() {
		return questionId;
	}

	public void setQuestionId(long questionId) {
		this.questionId = questionId;
	}

	public String getQuestionDscp() {
		return questionDscp;
	}

	public void setQuestionDscp(String questionDscp) {
		this.questionDscp = questionDscp;
	}

	public String getqType() {
		return qType;
	}

	public void setqType(String qType) {
		this.qType = qType;
	}

	public int getOptionSize() {
		return optionSize;
	}

	public void setOptionSize(int optionSize) {
		this.optionSize = optionSize;
	}

	public String getOption() {
		return options;
	}

	public void setOption(String options) {
		this.options = options;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}
	
	
}
