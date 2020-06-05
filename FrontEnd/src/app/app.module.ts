import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionsComponent } from './components/question/questions.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizzesComponent } from './components/quiz/quizzes.component';
import { PlayComponent } from './components/play/play.component';
import { PlayQuizComponent } from './components/play/playQuiz.component';
import { FinishedComponent } from './components/play/finished.component';
import { RegisterComponent } from './components/account/register.component';
import { LoginComponent } from './components/account/login.component';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './auth.interceptor';


const routes = [
  { path :'', component:HomeComponent},
  { path :'question', component:QuestionComponent},
  { path :'question/:quizId', component:QuestionComponent},
  { path :'register', component:RegisterComponent},
  { path :'login', component:LoginComponent},
  { path :'quiz', component:QuizComponent},
  { path :'play', component:PlayComponent},
  { path :'playQuiz/:quizId', component:PlayQuizComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    HomeComponent,
    NavComponent,
    QuizComponent,
    QuizzesComponent,
    PlayComponent,
    PlayQuizComponent,
    FinishedComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule
  ],
  providers: [ApiService,AuthService, {
    provide : HTTP_INTERCEPTORS, useClass : AuthInterceptor , multi : true
  }],
  bootstrap: [AppComponent],
  entryComponents : [FinishedComponent]
})
export class AppModule { }
