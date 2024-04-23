import { Component } from '@angular/core';
import { ProblemeService } from '../../services/probleme/probleme.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
})
export class FooterComponent {
    constructor(private problemeService: ProblemeService) {
    }
    signalProblem() {
        this.problemeService.signalerProbleme();
    }
}