import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
  }

  greaterChar(curr, other) {
    return curr.charCodeAt(0) > other.charCodeAt(0);
  }

  prevChar(c) {
    return String.fromCharCode(c.charCodeAt(0) - 1);
  }
}
