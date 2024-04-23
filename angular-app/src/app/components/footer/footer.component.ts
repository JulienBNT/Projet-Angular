import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
})
export class FooterComponent {
    signalProblem() {
        console.log('Problem signaled by user');
    }
}