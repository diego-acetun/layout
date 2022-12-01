import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ToggleMenuService {
  private menuSubject: BehaviorSubject<any>;
  public menu: Observable<any>;
  constructor() {
    this.menuSubject = new BehaviorSubject<any>({ collapse: true });
    this.menu = this.menuSubject.asObservable();
  }

  setMenu() {
    this.menuSubject.next({ collapse: !this.menuSubject.value.collapse });
  }

  get menuValue(): any {
    return this.menuSubject.value;
  }
}
