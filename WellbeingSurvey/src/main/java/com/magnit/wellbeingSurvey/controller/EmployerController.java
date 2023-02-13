package com.magnit.wellbeingSurvey.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.magnit.wellbeingSurvey.model.SurveyQuestion;
import com.magnit.wellbeingSurvey.model.SurveyReview;
import com.magnit.wellbeingSurvey.repository.QuestionRepository;
import com.magnit.wellbeingSurvey.repository.ReviewRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/QSuite/")
public class EmployerController {
	@Autowired
	private QuestionRepository questionRepository;
	
	@Autowired
	private ReviewRepository reviewRepository;
	
	// get By Question Id
	@GetMapping("/Question/{id}")
	public SurveyQuestion getQuestionById(@PathVariable Long id){
		
		
		SurveyQuestion obj = new SurveyQuestion();
		try {
			obj = questionRepository.findByQuestionId(id);
			
		}catch (Exception e) {
			obj = null;
			System.out.println(e);
		}
		return obj;
	}
	
	
	// get all Active Questions
	@GetMapping("/ActiveQuestions")
	public List<SurveyQuestion> getAllActiveQuestions(){
		List<SurveyQuestion> obj = new ArrayList<SurveyQuestion>();
		try {
			obj = questionRepository.findByStatusTrue();
		}catch (Exception e) {
			obj = null;
			System.out.println(e);
		}
		
		return obj;
	}
	
	// get all Inactive Questions
	@GetMapping("/InactiveQuestions")
	public List<SurveyQuestion> getAllInactiveQuestions(){
		List<SurveyQuestion> obj = new ArrayList<SurveyQuestion>();
		try {
			obj = questionRepository.findByStatusFalse();
		}catch (Exception e) {
			obj = null;
			System.out.println(e);
		}
		
		return obj;
	}
	
	//Add Survey Question
	@PostMapping("/Submit")
	public boolean submitNewQuestion(@RequestBody SurveyQuestion surveyQuestion){
		
		boolean obj = false;
		try {
			surveyQuestion.setStatus(true);
			questionRepository.save(surveyQuestion);
			obj = true;
		}catch (Exception e) {
			obj = false;
			System.out.println(e);
		}
		
		return obj;
	}

	
	// Get Active Survey Questions Review
	@GetMapping("/ActiveQuestions/{id}")
	public ResponseEntity<List<SurveyReview>> getActiveQuestionsReviews(@PathVariable Long id) {
		
		List<SurveyReview> review = new ArrayList<SurveyReview>();
		try {
			review = reviewRepository.findAllByQuestionId(id);
		}catch (Exception e) {
			review = null;
			System.out.println(e);
		}
		
		return ResponseEntity.ok(review);
	}
		
	// Get Inactive Survey Questions Review
	@GetMapping("/InactiveQuestions/{id}")
	public ResponseEntity<List<SurveyReview>> getInactiveQuestionsReviews(@PathVariable Long id) {
		
		List<SurveyReview> review = new ArrayList<SurveyReview>();
		try {
			review = reviewRepository.findAllByQuestionId(id);
		}catch (Exception e) {
			review = null;
			System.out.println(e);
		}
		
		return ResponseEntity.ok(review);
	}
	
	// update Survey Questions 
	@PutMapping("/Questions/{id}")
	public ResponseEntity<SurveyQuestion> updateSurveyQuestion(@PathVariable Long id, @RequestBody SurveyQuestion obj){
		SurveyQuestion updatedQuestion = new SurveyQuestion();
		try {
			SurveyQuestion question = questionRepository.findByQuestionId(id);
			question.setQuestionDscp(obj.getQuestionDscp());
			updatedQuestion = questionRepository.save(question);
			
		}catch (Exception e) {
			updatedQuestion = null;
			System.out.println(e);
		}
		return ResponseEntity.ok(updatedQuestion);
	}
	
	// Availability of Survey Questions 
	@PutMapping("/ActiveStatus/{id}")
	public ResponseEntity<SurveyQuestion> updateInactiveAvailabilitySurveyQuestion(@PathVariable Long id){
		
		SurveyQuestion updatedQuestion  = new SurveyQuestion();
		
		try {
			SurveyQuestion question = questionRepository.findByQuestionId(id);
			question.setStatus(false);
			
			 updatedQuestion = questionRepository.save(question);
			 
		}catch (Exception e) {
			updatedQuestion= null;
			System.out.println(e);
		}
		return ResponseEntity.ok(updatedQuestion);
	}
	
	// Availability of Survey Questions 
	@PutMapping("/InactiveStatus/{id}")
	public ResponseEntity<SurveyQuestion> updateActiveAvailabilitySurveyQuestion(@PathVariable Long id){
		
		SurveyQuestion updatedQuestion = new SurveyQuestion();
		
		try {
			SurveyQuestion question = questionRepository.findByQuestionId(id);
			question.setStatus(true);
			
			updatedQuestion = questionRepository.save(question);
			
		}catch (Exception e) {
			updatedQuestion = null;
			System.out.println(e);
		}
		
		return ResponseEntity.ok(updatedQuestion);
	}
	
	// Delete Question 
	@DeleteMapping("/Delete/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteSurveyQuestion(@PathVariable Long id){

		Map<String, Boolean> response = new HashMap<>();
		try {
			SurveyQuestion question = questionRepository.findByQuestionId(id);
			questionRepository.delete(question);
			
			response.put("deleted", Boolean.TRUE);
			
		}catch (Exception e) {
			response.put("Not Deleted", Boolean.FALSE);
			System.out.println(e);
		}
		return ResponseEntity.ok(response);
		
	}
	
	// Question Data set 
	@GetMapping("/qData")
	public ResponseEntity<Map<String, Integer>> getQuestionsData(){

		Map<String, Integer> response = new HashMap<>();
		try {
			List<SurveyQuestion> optionalQuestion = questionRepository.findByqType("OPTIONAL");
			List<SurveyQuestion> textQuestion = questionRepository.findByqType("TEXT");
			List<SurveyQuestion> ratingQuestion = questionRepository.findByqType("RATING");
			
			response.put("optionalQuestion", optionalQuestion.size());
			response.put("textQuestion", textQuestion.size());
			response.put("ratingQuestion", ratingQuestion.size());
			
		}catch (Exception e) {
			response.put("Error", 0);
			System.out.println(e);
		}
		return ResponseEntity.ok(response);
		
	}
	
	// Rating per Question
	@GetMapping("/rData")
	public ResponseEntity<Map<Integer, Integer>> getQuestionNumberRating(){

		Map<Integer, Integer> response = new HashMap<>();
		try {
			List<SurveyQuestion> allQuestions = new ArrayList<SurveyQuestion>();
			allQuestions = questionRepository.findAll();
			for(int i = 0; i<allQuestions.size(); i++) {
				List<SurveyReview> review = new ArrayList<SurveyReview>();
				review = reviewRepository.findAllByQuestionId(allQuestions.get(i).getQuestionId());
				response.put( (int) allQuestions.get(i).getQuestionId() , review.size());
			}
			
		}catch (Exception e) {
			response.put(0, 0);
			System.out.println(e);
		}
		return ResponseEntity.ok(response);
		
	}
}







