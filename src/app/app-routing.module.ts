import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateExamPaperComponent } from './create-exam-paper/create-exam-paper';
import { HomeComponent } from './home/home.component';
import { ShowExamPaperComponent } from './show-exam-paper/show-exam-paper.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'createExamPaper', component: CreateExamPaperComponent },
  { path: 'showExamPaper', component: ShowExamPaperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
