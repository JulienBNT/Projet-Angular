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
        { name: "Salle à manger", status: true },
        { name: "SDB", status: true },
        { name: "Garage", status: false },
        { name: "PAC", status: true },
        { name: "Buanderie", status: true },
        { name: "Piscine", status: true }
    ];

    constructor(private logService: LogService) {}

    date: Date = new Date();

    constructor() {
        this.startTimer();
    }

    startTimer() {
        setInterval(() => {
            this.date = new Date(); 
            const hour = this.date.getHours();
            const minutes = this.date.getMinutes();

            // Éteindre la piscine après 23h
            if (hour >= 23) {
                this.turnOffPiece("Piscine");
            }

            // Désactiver la PAC entre 23h et 7h
            if (hour >= 23 || hour < 7) {
                this.turnOffPiece("PAC");
            } else {
                this.turnOnPiece("PAC");
            }

            // Allumer le garage à 7h du matin pendant 2 heures
            if (hour === 7 && minutes === 0) {
                this.turnOnPiece("Garage");
                setTimeout(() => {
                    this.turnOffPiece("Garage");
                }, 2 * 60 * 60 * 1000); // 2 heures
            }
        }, 60000); 
    }

    turnOffPiece(pieceName: string) {
        const pieceIndex = this.pieces.findIndex(piece => piece.name === pieceName);
        if (pieceIndex !== -1) {
            this.pieces[pieceIndex].status = false;
        }
    }

    turnOnPiece(pieceName: string) {
        const pieceIndex = this.pieces.findIndex(piece => piece.name === pieceName);
        if (pieceIndex !== -1) {
            this.pieces[pieceIndex].status = true;
        }
    }

    toggleStatus(piece: Piece) {
        piece.status = !piece.status;
        this.logService.log(piece.name, piece.status);

    }
    
}
