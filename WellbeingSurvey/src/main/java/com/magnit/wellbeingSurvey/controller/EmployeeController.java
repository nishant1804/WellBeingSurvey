package com.magnit.wellbeingSurvey.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.magnit.wellbeingSurvey.model.SurveyQuestion;
import com.magnit.wellbeingSurvey.model.SurveyReview;
import com.magnit.wellbeingSurvey.repository.QuestionRepository;
import com.magnit.wellbeingSurvey.repository.ReviewRepository;




@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/RSuite/")
public class EmployeeController {
	
	
	@Autowired
	private QuestionRepository questionRepository;
	
	@Autowired
	private ReviewRepository reviewRepository;
	
	// Get all Active Questions
	@GetMapping("/activeQuestions")
	public List<SurveyQuestion>  getAllActiveQuestions(){
		List<SurveyQuestion> obj = new ArrayList<SurveyQuestion>();
		try {
			obj = questionRepository.findByStatusTrue();
		}catch (Exception e){
			obj = null;
			System.out.println(e);
		}
		return obj;
	}

	// Submit Survey Review
	@PostMapping("/Submit")
	public boolean submitEmployeeReview(@RequestBody List<SurveyReview> review) {
		
		boolean obj = false;
		
		try {
			reviewRepository.saveAll(review);
			obj = true;
		}catch (Exception e){
			obj = false;
			System.out.println(e);
		}
		return obj;
		
	}
	
	
	
}
