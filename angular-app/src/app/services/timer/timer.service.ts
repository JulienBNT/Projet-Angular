import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  public date = new Date();
  public displayedDate = new Date();

  incrementMinutes(value: number, currentDate: Date) {
      currentDate = new Date(this.date.getTime());
      currentDate.setMinutes(currentDate.getMinutes() + value);
      this.date = currentDate;
      this.displayedDate = currentDate;
  }

  getDate(): Date {
      return this.date;
  }

  getDisplayedDate(): Date {
      return this.displayedDate;
  }

  startTimer() {
      setInterval(() => {
          this.incrementMinutes(1, this.date);
      }, 60000);
  }
}
