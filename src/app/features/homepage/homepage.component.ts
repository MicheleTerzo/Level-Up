import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {


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
  }

  scrollRight(): void {
    const slider = document.getElementById('slider');
    slider.scrollLeft += 1000;
  }

  scrollLeft(): void {
    const slider = document.getElementById('slider');
    slider.scrollLeft -= 1000;
  }
}
