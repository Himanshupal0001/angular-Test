import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateServiceService } from '../commonService/state-service.service';
import { FormsModule } from '@angular/forms'
import { ApiService } from '../apiservice.service';
@Component({
  selector: 'app-dialog-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dialog-form.component.html',
  styleUrl: './dialog-form.component.css'
})
export class DialogFormComponent {
  constructor(public stateService: StateServiceService, private apiService: ApiService) { }

  character: any = {
    id: Math.floor(Math.random()),
    name: '',
    birth_year: '',
    gender: '',
    height: '',
    mass: '',
    eye_color: ''
  }
  onSubmit() {
    this.apiService.addCharacter(this.character)
    console.log(this.character)
    this.stateService.showDialog = false;
  }
}
