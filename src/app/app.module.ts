import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatGridListModule} from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateExamPaperComponent } from './create-exam-paper/create-exam-paper';
import { HomeComponent } from './home/home.component';
import { ShowExamPaperComponent } from './show-exam-paper/show-exam-paper.component';
import { MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ExamPaperService } from './providers/exam-paper-service.service';
import { EditQuestionComponent } from './question/editQuestion/question.component';
import { ShowQuestionComponent } from './question/showQuestion/show-question.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateExamPaperComponent,
    HomeComponent,
    EditQuestionComponent,ShowExamPaperComponent, ShowQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [ExamPaperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
