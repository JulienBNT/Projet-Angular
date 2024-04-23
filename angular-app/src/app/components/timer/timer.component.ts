import { Component } from '@angular/core';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
})

export class TimerComponent {
    date = new Date();
    displayedDate = new Date();

    incrementMinutes(value: number) {
        const newDate = new Date(this.date.getTime());
        newDate.setMinutes(newDate.getMinutes() + value);
        this.date = newDate;
        this.displayedDate = newDate;
    }

    constructor() {
        this.startTimer();
    }

    startTimer() {
        setInterval(() => {
            this.incrementMinutes(1);
        }, 60000);
    }
}

