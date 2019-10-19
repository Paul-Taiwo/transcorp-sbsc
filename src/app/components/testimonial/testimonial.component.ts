import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  public testimonialConfig: SwiperConfigInterface = {
    slidesPerView: 1,
    autoplay: true,
    spaceBetween: 200,
    breakpoints: {
      760: {
        slidesPerView: 1
      },

      1440: {
        slidesPerView: 1,
        spaceBetween: 450,
      },
    }
  }

  public testimonialCollection:Object[] = [
    {
      guestName: 'Farah Williams',
      testimony: `,
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo urna id neque finibus,
          ac sollicitudin arcu tempus.In hac habitasse platea dictumst`,
      guestImgSrc: '../../../assets/images/guest1.png'
    },
    {
      guestName: 'James Coban',
      testimony: `,
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo urna id neque finibus,
          ac sollicitudin arcu tempus.In hac habitasse platea dictumst`,
      guestImgSrc: '../../../assets/images/2B379CC5-171B-4946-B91D-024EA95E74BF.png'
    },
    {
      guestName: 'Sarah Tosin',
      testimony: `,
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo urna id neque finibus,
          ac sollicitudin arcu tempus.In hac habitasse platea dictumst`,
      guestImgSrc: '../../../assets/images/2B379CC5-171B-4946-B91D-024EA95E74BF.png'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
