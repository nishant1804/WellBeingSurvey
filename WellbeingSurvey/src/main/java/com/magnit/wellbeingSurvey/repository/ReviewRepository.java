package com.magnit.wellbeingSurvey.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.magnit.wellbeingSurvey.model.SurveyReview;

@Repository
public interface ReviewRepository extends JpaRepository<SurveyReview, Long>{
	public List<SurveyReview> findAllByQuestionId(long id);
}
