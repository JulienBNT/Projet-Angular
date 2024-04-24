import { Component, OnInit } from "@angular/core";
import { ProblemeService } from "../../services/probleme/probleme.service";

@Component({
  selector: "app-signal",
  templateUrl: "./signal.component.html",
})
export class SignalComponent implements OnInit {
    showModal: boolean = false;
    constructor(private problemeService: ProblemeService) {}
    ngOnInit() {
        this.problemeService.sendMessageProbleme$.subscribe(() => {
            this.showModal = true;
        });
    }
}