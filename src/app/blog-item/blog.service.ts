import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay, concatAll } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  //  httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json'
  //   })
  // };



    getAllElment( id: number): any {

      return forkJoin (
        this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos/'+ id )
      .pipe(map(
        ( res  => {
           return res;
        })
        )),


        this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts/'+ id)
      .pipe(map(
        ( res  => {
           return res;
        })
        )),

        this.http.get<any[]>('https://jsonplaceholder.typicode.com/comments?postId='+ id)
        .pipe(map(
          ( res  => {
             return res;
          })
          ))
      );

    }



    // sendComment(addComment: any) {
    //    this.http.post(" jj" , addComment , this.httpOptions);
    // }




}



