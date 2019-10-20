import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {

  @Input() blogCardImgSrc: string;
  @Input() blogCardTitle: string;
  @Input() blogCardDate: string;

  constructor() { }

  ngOnInit() {
  }

}
