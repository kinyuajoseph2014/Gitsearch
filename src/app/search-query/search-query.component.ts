import { Searchrepo } from './../searchrepo';
import { Component, OnInit } from '@angular/core';
import { GithubsearchService } from '../githubsearch.service';

@Component({
  selector: 'app-search-query',
  templateUrl: './search-query.component.html',
  styleUrls: ['./search-query.component.css']
})
export class SearchQueryComponent implements OnInit {
  githubsearchService: GithubsearchService;

  search:string = '';
  public shwinput = true;
  public showrepo = false;
  constructor(githubsearchService:GithubsearchService) {
    this.githubsearchService = githubsearchService
  }

  ngOnInit(): void {
  }
  submitQuery(){
    this.githubsearchService.getUserDetails(this.search)
    this.shwinput = false;
    this.showrepo = true;
  }

  showrepodata(event:any){
    this.shwinput = event;
    this.showrepo = false;
  }
}
