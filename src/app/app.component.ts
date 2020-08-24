import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Elements } from './elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PeriodicTable';
  done: boolean;
  elements: Elements[] = [];
  i: any;
  htmlElement: any;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.done = true;
    this.http.connect().subscribe(
      value => {
        value.forEach(values => {
          this.elements.push(values);
        });
        console.log(this.elements);
      }
      );
  }

  getItem(a: number, b: number) {
    if (a === 1 && b === 2) {
      this.i = this.elements.filter(e => e.atomicNumber >= a && e.atomicNumber <= b);
      this.i[17] = this.i[1];
      this.i.fill(null, 1, 16);
      return this.i;
    } else if ((a === 3 || a === 11) && (b === 10 || b === 18)) {
        this.i = this.elements.filter(e => e.atomicNumber >= a && e.atomicNumber <= b);
        this.i[12] = this.i[2];
        this.i[13] = this.i[3];
        this.i[14] = this.i[4];
        this.i[15] = this.i[5];
        this.i[16] = this.i[6];
        this.i[17] = this.i[7];
        this.i.fill(null, 2, 11);
        return this.i;
    } else {
        return this.elements.filter(e => e.atomicNumber >= a && e.atomicNumber <= b);
    }
  }

  ApplyColor(a: number) {
    if (a === 1) {
      this.htmlElement = document.getElementById[a];
      this.htmlElement.style.background = this.elements[a].cpkHexColor;
    }
  }
}
