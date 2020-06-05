import { Component } from '@angular/core'; 
import { ApiService } from '../../services/api.service';   

@Component({
    selector:'play',
    templateUrl: './play.component.html'
})

export class PlayComponent{
 
    quizzes; 

    constructor(public api : ApiService) {} 

    ngOnInit(){
     this.api.getAllQuizzes().subscribe(res => {
         this.quizzes = res
     });
    }

}