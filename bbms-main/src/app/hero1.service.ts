import { Injectable } from '@angular/core';
import { data1 } from 'src/assets/data1';

@Injectable({
  providedIn: 'root'
})
export class Hero1Service {

  constructor() { }
  giveData() {
    return data1
  }
}

