import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
})

export class TimerComponent {
  date = new Date();
  displayedDate = new Date();

  incrementMinutes() {
    const newDate = new Date(this.date.getTime());
    newDate.setMinutes(newDate.getMinutes() + 30);
    this.date = newDate;
    this.displayedDate = newDate;
  }
}

