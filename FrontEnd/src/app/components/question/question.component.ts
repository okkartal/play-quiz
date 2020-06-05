import { Component } from '@angular/core'; 
import { ApiService } from './../../services/api.service';   
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:'question',
    templateUrl: './question.component.html'
})

export class QuestionComponent{
 
    question:any={};
    quizId;

    constructor(public api : ApiService,private route: ActivatedRoute) {} 

    ngOnInit(){
      this.quizId = this.route.snapshot.paramMap.get("quizId");
      this.api.questionSelected.subscribe(question => this.question = question);
    }

    post(question){
      question.quizId = parseFloat(this.quizId);
      this.api.postQuestion(question);
    }
}