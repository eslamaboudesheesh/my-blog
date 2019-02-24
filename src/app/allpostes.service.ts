import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AllpostesService {
  constructor(private http: HttpClient) { }

  showRecipe() {
   return  this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos')
     .pipe(map(
       ( res  => {
          return res;
       })
       ));
   }
}
