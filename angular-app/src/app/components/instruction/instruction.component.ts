import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface ApiResponse {
  message: string;
}

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css'],
})
export class InstructionComponent implements OnInit {
  instructionForm: FormGroup;
  pieces = ['Salle à manger', 'SDB', 'Garage', 'PAC', 'Buanderie', 'Piscine'];
  instructions = [];
  showTable = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.instructionForm = this.fb.group({
      piece: '',
      action: '',
      date: '',
    });
  }

  onSubmit() {
    const instruction = this.instructionForm.value;

    // vérifier que tous les champs sont remplis
    if (!instruction.piece || !instruction.action || !instruction.date) {
      alert('Tous les champs doivent être remplis');
      return;
    }

this.http
  .post<ApiResponse>('http://localhost:3000/instruction', instruction)
  .subscribe({
    next: (response) => {
      console.log(response.message);
      this.instructionForm.reset();
    },
    error: (error) => {
      console.error("Erreur lors de l'envoi des données", error);
    },
  });
    this.instructionForm.reset();
  }

  showInstructions() {
    this.http
      .get('http://localhost:3000/instruction')
      .subscribe((instructions: any) => {
        this.instructions = instructions;
        this.showTable = true;
      });
  }
}
