import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, ApiResult } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  resData: any[] = [];
  constructor(private apiService: ApiService, private router: Router) { };

  ngOnInit() {
    this.apiService.getData().subscribe((res: ApiResult) => {
      this.resData = res.results;
      console.log(this.resData)
    },
      (error) => {
        console.error(error)
      }
    )
    //this.onClick(2);
  }

  // onClick(id: number) {
  //   this.apiService.getPerson(id).subscribe(res => { console.log('res', res) }, (err) => console.log(err));
  // }

  onNameClick(id: number) {
    console.log('function cluckd')
    this.router.navigate(['/character', id])
  }
}
