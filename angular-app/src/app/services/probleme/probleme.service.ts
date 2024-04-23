import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProblemeService {
  private messageProbleme = new Subject<void>();
  sendMessageProbleme$ = this.messageProbleme.asObservable();

  signalerProbleme() {
    this.messageProbleme.next();
  }

  constructor() { }
}
