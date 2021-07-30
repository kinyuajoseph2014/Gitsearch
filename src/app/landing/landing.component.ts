import { Component, OnInit } from '@angular/core';
import { LadingService } from '../lading.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  repos: any = []
  userdetail:any;
  searchrepos:any = []

  githubsearchService: LadingService;
  constructor(githubsearchService:LadingService) {
    this.githubsearchService = githubsearchService
   }

  ngOnInit(): void {
    this.githubsearchService.getUserDetails('JosephKinyua')
    this.repos = this.githubsearchService.repoData
    this.userdetail = this.githubsearchService.userdetails
  }
  maxvalue(){
    let fun = Number.MIN_VALUE;
    let arr = this.repos

    for (let i=0; i<arr.length;i++){
      if(arr[i].forks>fun){
        fun = arr[i].forks
      }
    }
    return fun;
  }
}
