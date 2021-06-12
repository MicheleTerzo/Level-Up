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
