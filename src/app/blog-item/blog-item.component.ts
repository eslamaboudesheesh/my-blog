import { Component, OnInit, ViewChild } from '@angular/core';
import { BlogService } from './blog.service';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable, throwError } from 'rxjs';
import { concatAll, mergeAll } from 'rxjs/operators';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {
id  = 0;
url = '';
title = '';
body = '';
comments = [];
single_comment = {
  postId : 0,
  id : 0 ,
  name : '',
  body : '',
  email : '',
};


@ViewChild('commentForm') lForm: NgForm;

  constructor(private blogServ: BlogService , private actRouter: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.actRouter.snapshot.params['id'];
    this.single_comment.postId = this.actRouter.snapshot.params['id'];
    this.blogServ.getAllElment(this.id).subscribe( res  => {
      this.url = res[0].url;
      this.title = res[1].title;
      this.body =  res[1].body;
      this.comments = res[2];
      return true;
     },
     error => {
       console.error('Error saving food!');
       return throwError(error);  // Angular 6/RxJS 6
     }
  );
  }

  setComment(commentForm: NgForm) {
    // this.blogServ.sendComment(this.single_comment);
    this.comments.push(this.single_comment);
  }


}
