import { Injectable } from '@angular/core';
import { TimerService } from '../timer/timer.service';

interface Log {
  piece: string;
  status: boolean;
  time: Date;
}

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logs: Log[] = [];

  constructor(private timerService: TimerService) {
  }

  log(piece: string, status: boolean) {
    this.logs.push({ piece, status, time: this.timerService.date });
  }
}