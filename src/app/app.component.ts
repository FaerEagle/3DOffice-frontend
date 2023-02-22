import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '3DOffice-frontend';

  logIn(target: HTMLElement, car?: any) {

    target.scrollIntoView({behavior: "smooth"});
    if (car) {
      // this.priceForm.patchValue({car: car.name});
    }
  }
}
