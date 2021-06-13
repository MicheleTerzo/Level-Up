import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  screenHeight: number;
  screenWidth: number;
  slider: HTMLElement;

  constructor() {
  }

  ngOnInit(): void {
    const inViewport = (entries, observer) => {
      entries.forEach(entry => {
        entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
      });
    };

    const Obs = new IntersectionObserver(inViewport);
    const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

    // Attach observer to every [data-inviewport] element:
    const ELs_inViewport = document.querySelectorAll('[cards]');
    ELs_inViewport.forEach(EL => {
      Obs.observe(EL);
    });
    this.slider = document.getElementById('slider');
    this.screenHeight = screen.height;
    this.screenWidth = screen.width;
    console.log('WIDTH', this.screenWidth, 'HEIGHT', this.screenHeight);
  }

  scrollRight(): void {
    if (this.screenWidth <= 576) {
      this.slider.scrollLeft += 577;
    } else if (this.screenWidth <= 768) {
      this.slider.scrollLeft += 769;
    } else if (this.screenWidth <= 992) {
      this.slider.scrollLeft += 993;
    } else if (this.screenWidth <= 1200) {
      this.slider.scrollLeft += 1201;
    } else {
      this.slider.scrollLeft += 1300;
    }
  }

  scrollLeft(): void {
    if (this.screenWidth <= 576) {
      this.slider.scrollLeft -= 577;
    } else if (this.screenWidth <= 768) {
      this.slider.scrollLeft -= 769;
    } else if (this.screenWidth <= 992) {
      this.slider.scrollLeft -= 993;
    } else if (this.screenWidth <= 1200) {
      this.slider.scrollLeft -= 1201;
    } else {
      this.slider.scrollLeft -= 1401;
    }
  }
}
