import { Component } from '@angular/core';
import { TimerService } from '../../services/timer/timer.service';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
})
export class TimerComponent {
    
    date: Date = new Date();
    displayedDate: Date = new Date();

    constructor(public timerService: TimerService) {
        this.timerService.date = new Date(); 
        this.timerService.displayedDate = new Date();
        this.timerService.startTimer();
    }

    incrementMinutes(value: number) {
        this.timerService.incrementMinutes(value, this.displayedDate);
    }
    
}
