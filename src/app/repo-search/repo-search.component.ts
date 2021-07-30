import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { GithubsearchService } from '../githubsearch.service';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {

  @Output() goback = new EventEmitter<boolean>()
  hideRepo!: boolean;
  repos: any = []
  totalcount!: number

  reposearch:string = 'JosephKinyua'

  githubsearchService: GithubsearchService;
  constructor(githubsearchService:GithubsearchService) {
    this.githubsearchService = githubsearchService
   }
  //  toback(){
  //   this.hideRepo = true
  //   this.goback.emit(this.hideRepo)
  // }
  searchrepo(){
    this.githubsearchService.getRepos(this.reposearch)
    console.log(this.reposearch)
  }
 
  ngOnInit(): void {
    this.repos = this.githubsearchService.searchreps
    this.totalcount = this.githubsearchService.totalCount
    console.log(this.totalcount)
  }

  // maxvalue(){
  //   let fun = Number.MIN_VALUE;
  //   let arr = this.repos

  //   for (let i=0; i<arr.length;i++){
  //     console.log(arr[i].forks)
  //     if(arr[i].forks>fun){
  //       fun = arr[i].forks
  //     }
  //   }
  //   console.log(fun)
  //   return fun;
  // }

}
