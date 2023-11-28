import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, ApiResult } from '../apiservice.service';
import { Router } from '@angular/router';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';
import { StateServiceService } from '../commonService/state-service.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, DialogFormComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  resData: any[] = [];
  character$ = this.apiService.character$;
  constructor(private apiService: ApiService, private router: Router, public stateService: StateServiceService) { };
  ngOnInit() {
    this.apiService.getData().subscribe((res: ApiResult) => {
      this.apiService.updateSubject(res.results);
      //this.resData = res.results;
      //console.log(this.resData)
      console.log(this.character$)
    },
      (error) => {
        console.error(error)
      }
    )
  }
  onNameClick(id: string) {
    //console.log('function clickd')
    const match = id.match(/\/(\d+)\/$/);
    const charId = match ? match[1] : null;
    this.router.navigate(['/character', charId]);
  }
}
