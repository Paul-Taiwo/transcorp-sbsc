import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AvailRoomComponent } from './components/avail-room/avail-room.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { DiscoverCardComponent } from './components/discover-card/discover-card.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBannerComponent,
    NavBarComponent,
    AvailRoomComponent,
    AboutUsComponent,
    DiscoverComponent,
    TestimonialComponent,
    DiscoverCardComponent,
    BlogCardComponent,
    FooterComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
