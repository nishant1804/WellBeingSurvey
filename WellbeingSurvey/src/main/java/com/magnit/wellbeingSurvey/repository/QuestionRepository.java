package com.magnit.wellbeingSurvey.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.magnit.wellbeingSurvey.model.SurveyQuestion;

@Repository
public interface QuestionRepository extends JpaRepository<SurveyQuestion, Long>{
	public List<SurveyQuestion> findByStatusTrue();
	public List<SurveyQuestion> findByStatusFalse();
	public SurveyQuestion findByQuestionId(long id);
	public List<SurveyQuestion> findByqType(String obj);
}
