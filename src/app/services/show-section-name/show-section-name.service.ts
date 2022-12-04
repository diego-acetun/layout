import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowSectionNameService {
  private messageSemaforoSubject: BehaviorSubject<any>;
  public messageSemaforo: Observable<any>;

  private messageReportsSubject: BehaviorSubject<any>;
  public messageReports: Observable<any>;

  private messageadministrativeReportsSubject: BehaviorSubject<any>;
  public messageadministrativeReports: Observable<any>;

  private messageAdministrativeManagementSubject: BehaviorSubject<any>;
  public messageAdministrativeManagement: Observable<any>;

  constructor() {
    this.messageSemaforoSubject = new BehaviorSubject<any>({
      show: false,
    });
    this.messageSemaforo = this.messageSemaforoSubject.asObservable();

    this.messageReportsSubject = new BehaviorSubject<any>({
      show: false,
    });
    this.messageReports = this.messageReportsSubject.asObservable();

    this.messageadministrativeReportsSubject = new BehaviorSubject<any>({
      show: false,
    });
    this.messageadministrativeReports =
      this.messageadministrativeReportsSubject.asObservable();

    this.messageAdministrativeManagementSubject = new BehaviorSubject<any>({
      show: false,
    });
    this.messageAdministrativeManagement =
      this.messageAdministrativeManagementSubject.asObservable();
  }

  setMessageSemaforo() {
    this.messageSemaforoSubject.next({
      show: !this.messageSemaforoSubject.value.show,
    });
  }

  get messageSemaforoValue(): any {
    return this.messageSemaforoSubject.value;
  }

  setMessageReports() {
    this.messageReportsSubject.next({
      show: !this.messageReportsSubject.value.show,
    });
  }

  get messageReportsValue(): any {
    return this.messageReportsSubject.value;
  }

  setMessageAdministrativeReports() {
    this.messageadministrativeReportsSubject.next({
      show: !this.messageadministrativeReportsSubject.value.show,
    });
  }

  get messageAdministrativeReportsValue(): any {
    return this.messageadministrativeReportsSubject.value;
  }

  setMessageManagementReports() {
    this.messageAdministrativeManagementSubject.next({
      show: !this.messageAdministrativeManagementSubject.value.show,
    });
  }

  get messageManagementReportsValue(): any {
    return this.messageAdministrativeManagementSubject.value;
  }
}
