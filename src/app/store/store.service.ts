import { Injectable } from '@angular/core';


export class StoreService {
  state = 96;
  setState (s) {
    this.state = s;
  }
  getState () {
    return this.state;
  }
}
