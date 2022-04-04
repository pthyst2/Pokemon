import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DomSanitizer } from '@angular/platform-browser';
import { DragScrollComponent } from 'ngx-drag-scroll';
@Component({
  selector: 'app-carousel-video',
  templateUrl: './carousel-video.component.html',
  styleUrls: ['./carousel-video.component.scss'],
})
export class CarouselVideoComponent implements OnInit {
  @ViewChild('slide', { read: DragScrollComponent })
  slide!: DragScrollComponent;
  @Input() videos: any = [];

  constructor(private cookie: CookieService, private domSan: DomSanitizer) {}

  ngOnInit(): void {
    this.setCookie();
    if (this.videos && this.videos.length > 0) {
      this.handleVideoList();
    }
  }

  setCookie() {
    this.cookie.set('SameSite', 'Secure');
  }
  handleVideoList() {
    for (let video of this.videos) {
      // Avoide SameSite issue
      video.source = video.source.replace('youtube', 'youtube-nocookie');
      // To embed
      video.source = this.domSan.bypassSecurityTrustResourceUrl(
        video.source.replace('watch?v=', 'embed/')
      );
    }
  }
  moveLeft() {
    this.slide.moveLeft;
  }
  moveRight() {
    this.slide.moveRight;
  }
  moveTo(index: number) {
    this.slide.moveTo(index);
  }
}
