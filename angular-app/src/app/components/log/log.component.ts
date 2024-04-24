import { Component } from '@angular/core';
import { LogService } from '../../services/log/log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
})
export class LogComponent {
  constructor(public logService: LogService) {}
}