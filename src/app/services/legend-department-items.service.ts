import { Injectable } from '@angular/core';
import $ from "jquery";

@Injectable({
  providedIn: 'root'
})
export class LegendDepartmentItemsService {

  constructor() { }

  openDepartmentInfo() {
    let background = $('.department-info-container');
    $('.department-info-popup').addClass('active');
    background.css('background-color', 'rgba(0, 0, 0, 0.6)');
    background.addClass('active');
  }

  closeDepartmentInfo() {
    $('.department-info-popup').removeClass('active');
    $('.department-info-container').css('background-color', 'rgba(0, 0, 0, 0)');
    setTimeout(() => {
      $('.department-info-container').removeClass('active');
    },1000);
  }
}
