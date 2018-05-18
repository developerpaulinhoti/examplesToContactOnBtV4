import { Component } from '@angular/core';
import $ from 'jquery';
declare var $:any;
declare var jQuery:any;


@Component({
  selector: 'app-root',
  templateUrl: './arrumaai.component.html',
  styleUrls: ['./arrumaai.component.css'],
  queries:['./arrumaai.component.js']
  
  
})
export class arrumaai {
  title = 'app';
  
  ngAfterViewInit(): void{

 }
}

