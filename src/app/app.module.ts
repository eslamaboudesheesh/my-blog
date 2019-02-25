import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { AboutComponent } from './about/about.component';
import { AllpostesService } from './allpostes.service';
import { BlogService } from './blog-item/blog.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogItemComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AllpostesService, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
