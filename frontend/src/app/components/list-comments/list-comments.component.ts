import { Component, OnInit } from '@angular/core';
import {Comment} from "../../interfaces/Comment";

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent implements OnInit {
  commentsList: Comment[] = [
    {
      title: 'Angular',
      creator: 'Fernando',
      creationDate: new Date(),
      text: 'text'
    },
    {
      title: 'React',
      creator: 'Sebastian',
      creationDate: new Date(),
      text: 'text2'
    },
    {
      title: 'Vue',
      creator: 'Kimi',
      creationDate: new Date(),
      text: 'text3'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
