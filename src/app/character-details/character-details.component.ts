import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent implements OnInit {
  resData: any = {};
  id: string = '0';
  constructor(private apiservice: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param => this.id = param['id'])
    this.apiservice.getPerson(this.id).subscribe(res => {
      this.resData = res;
      console.log('data', this.resData)
    })
  }
}

// export interface Character {
//   birth_year: string,
//   created: string,
//   edited: string,
//   eye_color: string,
//   films: [],
//   gender: string,
//   hair_color: string,
//   height: string,
//   homeworld: string,
//   mass: string,
//   name: string,
//   skin_color: string,
//   species: [],
//   starships: [],
//   url: string,
//   vehicals: []
// }
