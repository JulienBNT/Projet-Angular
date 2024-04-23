import { Component } from "@angular/core";

interface Piece {
    name: string;
    status: boolean;
}

@Component({
    selector: "app-piece",
    templateUrl: "./piece.component.html",
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
    piece: Piece = {
        name: "",
        status: false
    };
    addPiece(){
        this.pieces.push(this.piece);
        this.piece = { name: "", status: false };
    }
}