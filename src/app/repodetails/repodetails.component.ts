import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { GithubsearchService } from '../githubsearch.service';

@Component({
  selector: 'app-repodetails',
  templateUrl: './repodetails.component.html',
  styleUrls: ['./repodetails.component.css']
})
export class RepodetailsComponent implements OnInit {
  repos: any = [];
  usrde:any;
  searchrepos:any = [];

  // @Output() goback = new EventEmitter<boolean>()
  // hideRepo!: boolean;
  githubsearchService: GithubsearchService;

  constructor(githubsearchService:GithubsearchService) {
    this.githubsearchService = githubsearchService
  }

  ngOnInit(): void {
    this.repos = this.githubsearchService.repoData
    this.usrde = this.githubsearchService.userdetails
  }

  // toback(){
  //   this.hideRepo = true
  //   this.goback.emit(this.hideRepo)
  // }
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
