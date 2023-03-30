import { Injectable } from '@angular/core';
import $ from "jquery";

@Injectable({
  providedIn: 'root'
})
export class LegendService {

  constructor() { }

  openLegend() {
    $('#legend').toggleClass('active');
    $('#btn-icon').toggleClass('active');
  }
}
