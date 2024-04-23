import { Component } from '@angular/core';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
})
export class TimerComponent {
    date = new Date();

    ajoutMinute(){
        this.date.setMinutes(this.date.getMinutes()+30, 0, 0);
    }
}
