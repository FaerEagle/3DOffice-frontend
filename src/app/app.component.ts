import {Component, HostListener} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  logIn() {
    let window = document.getElementById('popup-container') as HTMLElement;
    let headerButton = document.getElementById('quit-btn') as HTMLElement;
    window.style.display = 'none';
    headerButton.style.visibility = 'visible';
  }

  logOut() {
    let window = document.getElementById('popup-container') as HTMLElement;
    let headerButton = document.getElementById('quit-btn') as HTMLElement;
    window.style.display = 'flex';
    headerButton.style.visibility = 'hidden';
  }

  forgotPass() {
    let logInPopup = document.getElementById('log-in-popup') as HTMLElement;
    let forgotPassPopup = document.getElementById('recovery-popup') as HTMLElement;
    logInPopup.style.display = 'none';
    forgotPassPopup.style.display = 'inline';
  }

  backToLogIn() {
    let logInPopup = document.getElementById('log-in-popup') as HTMLElement;
    let forgotPassPopup = document.getElementById('recovery-popup') as HTMLElement;
    logInPopup.style.display = 'inline';
    forgotPassPopup.style.display = 'none';
  }

  sendOnEmail() {
    let backBtn = document.getElementById('back-btn') as HTMLElement;
    let recoveryTitle = document.getElementById('recovery-title') as HTMLElement;
    let emailInput = document.getElementById('recover-email-input') as HTMLElement;
    let sendOnEmailBtn = document.getElementById('send-on-email-btn') as HTMLElement;
    backBtn.style.display = 'none';
    recoveryTitle.innerText = 'На указанный адрес электронной почты была отправлена ссылка для сброса пароля';
    recoveryTitle.style.maxWidth = '700px';
    recoveryTitle.style.padding = '80px 50px'
    emailInput.style.display = 'none';
    sendOnEmailBtn.style.display = 'none';
  }

  closeDepartmentInfo() {
    $('.department-info-popup').removeClass('active');
    $('.department-info-container').css('background-color', 'rgba(0, 0, 0, 0)');
    setTimeout(() => {
      $('.department-info-container').removeClass('active');
    },1000);
  }

  closePersonInfo() {
    $('.employee-info-popup').removeClass('active');
    $('.department-info-container').css('background-color', 'rgba(0, 0, 0, 0)');
    setTimeout(() => {
      $('.department-info-container').removeClass('active');
    },1000);
  }

  openLegend() {
    $('#legend').toggleClass('active');
    $('#btn-icon').toggleClass('active');
  }

  openDepartmentInfo() {
    $('.department-info-popup').addClass('active');
    $('.department-info-container').css('background-color', 'rgba(0, 0, 0, 0.6)');
    $('.department-info-container').addClass('active');
  }

  openPersonInfo() {
    $('.employee-info-popup').addClass('active');
    $('.department-info-container').css('background-color', 'rgba(0, 0, 0, 0.6)');
    $('.department-info-container').addClass('active');
  }
}
