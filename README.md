# WellBeingSurvey
<br />

As an **employee**, you will have the ability to:

1. Access the home page.
2. Submit your survey.


As an **employer**, you will have the ability to:

1. Access the survey administration panel
2. View active and inactive questions
3. See a total analysis of questions data
4. Add questions of three types: 

    i. **Optional** (where the user will be able to see a question with 2, 3, or 4 options depending on what the employer has selected).
    
    ii. **Text input** (where the user will have a text area to provide a review reply) 
    
    iii. **Rating** (where the user will have the option to rate the question from 1 to 10)
    
5. Have a table of active/inactive questions where you can edit, delete, change the status, and view reviews of questions.
6. In the review UI, you will be able to view all replies to a specific question with detailed analysis.

<br /><br />

***************** **Links** **************

**Video Sample :** [click here](https://vimeo.com/798377147/9395d529f0)


**Image Sample :** [click here](https://drive.google.com/drive/folders/1EgH8TxQu-7hf2FaSajll6JaX6MDStxWp?usp=share_link)


**SQL File (for sample data setup) :** [click here](https://drive.google.com/drive/folders/134yZukIl5_Wh5oGW_QWbdSC1tAGbtlr1?usp=share_link)

<br />

************ **Version** **************

**Java** - 17

**Spring Boot Version** - 3.0.2

**Angular CLI** - 15.1.5

**Node:** 18.14.0

**Package Manager:** npm 9.3.1

**OS:** win32 x64


**Database** - MySQL 

**Database Name** - wellBeingSurvey


<br />

 ************** **Tools Used** *****************

**Spring Tool Suite** - version : 4.17.2.RELEASE

**Visual Studio Code**

<br />

 ************** **Important URL's**  *****************

**For Employee :**

1. http://localhost:4200/home
2. http://localhost:4200/survey


**For Employer :**

1. http://localhost:4200/questionsPanel
2. http://localhost:4200/add

<br />

 ************** **API Used**  **************

<br />

**Employee API :**

1.  http://localhost:8080/RSuite/activeQuestions

    Return list of SurveyQuestion which are active

2.  http://localhost:8080/RSuite/Submit

    Take List of review object as input
    
    Return list of boolean value true means successfully saved else false means not saved

<br />

**Employer API :**



1.  http://localhost:8080/QSuite/Question/{id}  

    To get question by id

2.  http://localhost:8080/QSuite/ActiveQuestions

    To get list of active question
 

3.  http://localhost:8080/QSuite/InactiveQuestions

    To get list of inactive question

4.  http://localhost:8080/QSuite/Submit
  
    Take question object a input.
    
    Return list of boolean value true means successfully question saved else false means question not saved

5.  http://localhost:8080/QSuite/ActiveQuestions/{id}

    To get list of reviews of a active question.

6.  http://localhost:8080/QSuite/InactiveQuestions/{id}

    To get list of reviews of a active question.
    
7.  http://localhost:8080/QSuite/Questions/{id}

    To update question description

8.  http://localhost:8080/QSuite/ActiveStatus/{id}
    
    To update question status as active

9.  http://localhost:8080/QSuite/InactiveStatus/{id}
    
    To update question status as inactive

10. http://localhost:8080/QSuite/Delete/{id}

    To delete question

11. http://localhost:8080/QSuite/qData

    To get dashboard question data (like number of active  / inactive / optional /text / rating  question)

12. http://localhost:8080/QSuite/rData

    To get total review per question data

