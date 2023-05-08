import { Injectable } from '@angular/core';
import {Observable, Subject, timer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private toastSubject = new Subject<string>();
  showToast(message: string): void {
    this.toastSubject.next(message);
  }
  getToast(): Subject<string> {
    return this.toastSubject;
  }

}
