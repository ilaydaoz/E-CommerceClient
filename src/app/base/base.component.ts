import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


export class BaseComponent {
  constructor(private spinner: NgxSpinnerService) { }

  showSpinner(spinnerNameType: SpinnerType) {
    this.spinner.show(spinnerNameType);

    setTimeout(() => this.hideSpinner(spinnerNameType), 1000);
  }

  hideSpinner(spinnerNameType: SpinnerType) {
   this.spinner.hide(spinnerNameType);
  }
}

export enum SpinnerType {
  BallAtom = "S1",
  BallScaleMultiple = "S2",
  BallSpinClockwiseFadeRotating = "S3",
  Pacman="S4"
}
