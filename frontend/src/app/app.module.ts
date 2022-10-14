import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddEditCommentComponent } from './components/add-edit-comment/add-edit-comment.component';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';
import { ViewCommentsComponent } from './components/view-comments/view-comments.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddEditCommentComponent,
    ListCommentsComponent,
    ViewCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
