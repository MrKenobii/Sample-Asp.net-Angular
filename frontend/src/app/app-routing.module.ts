import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCommentsComponent} from "./components/list-comments/list-comments.component";
import {AddEditCommentComponent} from "./components/add-edit-comment/add-edit-comment.component";
import {ViewCommentsComponent} from "./components/view-comments/view-comments.component";

const routes: Routes = [
  {
    path: '', component: ListCommentsComponent
  },
  {
    path: 'add', component: AddEditCommentComponent
  },
  {
    path: 'edit/:id', component: AddEditCommentComponent
  },
  {
    path: 'view/:id', component: ViewCommentsComponent
  },
  {
    path: '**', redirectTo: '/', pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
