import { Component } from "@angular/core";
import { LogService } from '../../services/log/log.service';

interface Piece {
    name: string;
    status: boolean;
}

@Component({
    selector: "app-piece",
    templateUrl: "./piece.component.html",
    styleUrls: ["./piece.component.css"]
})

export class PieceComponent {
    pieces: Piece[] = [
        { name: "Salle à manger", status: false },
        { name: "SDB", status: false },
        { name: "Garage", status: false },
        { name: "PAC", status: false },
        { name: "Buanderie", status: false },
        { name: "Piscine", status: false }
    ];

    constructor(private logService: LogService) {}

    toggleStatus(piece: Piece) {
        piece.status = !piece.status;
        this.logService.log(piece.name, piece.status);

    }
}