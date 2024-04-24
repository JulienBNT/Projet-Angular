import { Injectable } from '@angular/core';

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

  log(piece: string, status: boolean) {
    this.logs.push({ piece, status, time: new Date() });
  }
}