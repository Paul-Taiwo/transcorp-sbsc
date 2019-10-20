import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {
  public rooms: Object[] = [
    { roomType: 'Classic Room', imgSrc:"../../../assets/images/053CA9AC-3595-4FE8-B43E-E823476A5B3A.png"},
    { roomType: 'Grand Deluxe Room', imgSrc:"../../../assets/images/0FAC46BE-9D95-4DCE-AADA-3AF5FDEF4E31.png"},
    { roomType: 'Ultra Suprior Room', imgSrc:"../../../assets/images/5D3D5ABE-FB24-45D0-800E-C354968BF1AD.png"},
    { roomType: 'Classic Room', imgSrc:"../../../assets/images/053CA9AC-3595-4FE8-B43E-E823476A5B3A.png"},
  ]

  public blogPosts: Object[] = [
    { 
      blogCardTitle: 'Five reasons to  stay at the beautiful Transcorp Hotel',
      blogCardImgSrc: "../../../assets/images/053CA9AC-3595-4FE8-B43E-E823476A5B3A.png", 
      blogCardDate: "April 10, 2019" 
    },
    { 
      blogCardTitle: 'Transcorp Hilton Abuja Wins Five Awards', 
      blogCardImgSrc: "../../../assets/images/0FAC46BE-9D95-4DCE-AADA-3AF5FDEF4E31.png", 
      blogCardDate: "June 5, 2019"
     },
    { 
      blogCardTitle: 'Ultra Suprior Room', 
      blogCardImgSrc: "../../../assets/images/5D3D5ABE-FB24-45D0-800E-C354968BF1AD.png", 
      blogCardDate: "May 23, 2019" 
    },
  ]


  constructor() { }

  ngOnInit() {
  }

}
