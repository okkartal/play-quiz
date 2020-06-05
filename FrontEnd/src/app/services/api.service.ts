import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Subject } from 'rxjs';  

@Injectable()
export class ApiService {
   
    private serviceUrl = 'https://localhost:44304/api';

    private selectedQuestion = new Subject<any>();
    questionSelected = this.selectedQuestion.asObservable();

    private selectedQuiz = new Subject<any>();
    quizSelected = this.selectedQuiz.asObservable();

    constructor(private http : HttpClient){}

    private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

    getQuestions(quizId){
       return this.http.get(`${this.serviceUrl}/questions/${quizId}`);
    }

    getQuizzes(){
        return this.http.get(`${this.serviceUrl}/quizzes`);
     }

     getAllQuizzes(){
        return this.http.get(`${this.serviceUrl}/quizzes/all`);
     }
    
    postQuestion(question){
        console.log(JSON.stringify(question));
        this.http.post(`${this.serviceUrl}/questions`,JSON.stringify(question),this.options).subscribe(res => {
        })
    }

    postQuiz(quiz){
        this.http.post(`${this.serviceUrl}/quizzes`,JSON.stringify(quiz),this.options).subscribe(res => {
        })
    }

    putQuestion(question){
        console.log(JSON.stringify(question));
        this.http.put(`${this.serviceUrl}/questions/${question.id}`,JSON.stringify(question),this.options).subscribe(res => {
        })
    }

    putQuiz(quiz){
        this.http.put(`${this.serviceUrl}/quizzes/${quiz.id}`,JSON.stringify(quiz),this.options).subscribe(res => {
        })
    }

    selectQuestion(question){
        this.selectedQuestion.next(question);
    }

    selectQuiz(quiz){
        this.selectedQuiz.next(quiz);
    }
}