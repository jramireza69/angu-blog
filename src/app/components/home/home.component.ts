import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public page_title: String;

  constructor() { 
    this.page_title = 'Home inicio';
  }

  ngOnInit(): void {
  }

}
