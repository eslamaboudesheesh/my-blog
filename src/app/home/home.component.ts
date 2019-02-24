import { Component, OnInit } from '@angular/core';
import {AllpostesService} from '../allpostes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 blogs: any = [] ;

  constructor(private getEl: AllpostesService ) { }

  ngOnInit() {
    this.getEl.showRecipe().subscribe(
      res => {
        for (let index = 0; index < 10 ; index++) {
          this.blogs.push(res[index]) ;
        }
      }
       );
  }



}
