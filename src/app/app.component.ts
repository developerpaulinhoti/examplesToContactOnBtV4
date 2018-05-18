import { Component } from '@angular/core';
import $ from 'jquery';
declare var $:any;
declare var jQuery:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  queries:['./app.component.js']
  
  
})
export class AppComponent {
  title = 'app';
  
  ngAfterViewInit(): void{

 }
}


