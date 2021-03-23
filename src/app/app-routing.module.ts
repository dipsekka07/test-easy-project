import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateExamPaperComponent } from './create-exam-paper/create-exam-paper';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'createExamPaper', component: CreateExamPaperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
