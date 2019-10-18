import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-discover-card',
  templateUrl: './discover-card.component.html',
  styleUrls: ['./discover-card.component.css']
})
export class DiscoverCardComponent implements OnInit {

  @Input() roomType: string;
  @Input() roomImgSrc: string;

  constructor() { }

  ngOnInit() {
  }

}
