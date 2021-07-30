import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Userdetails } from './userdetails';
import { Repo } from './repo';
import { Searchrepo } from './searchrepo';

@Injectable({
  providedIn: 'root'
})
export class GithubsearchService {
  userdetails: Userdetails;
  repo: Repo;
  searchrepo:Searchrepo;
  repoData: any = []
  singleRepoData: any = []
  searchreps:any = []
  totalCount: number = 0


  constructor(private http: HttpClient) {
    this.userdetails = new Userdetails('', '', '', '', '', '', '', '', '', 0, '', '', new Date(), new Date());
    this.repo = new Repo('', '', new Date(), new Date(), 0, '', '', '', '');
    this.searchrepo = new Searchrepo('', '', '', new Date(), new Date(), '', 0, '');
   }
     // RECEIVING THE DATA
  getUserDetails(user: string) {


    interface ApiResponse {
      login: string,
      avatar_url: string,
      repos_url: string,
      name: string,
      url: string,
      blog: string,
      location: string,
      bio: string,
      twitter_username: string,
      public_repos: number,
      followers: string,
      following: string,
      created_at: Date,
      updated_at: Date,
    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + user).toPromise().then(response => {
        this.userdetails.login = response.login,
        this.userdetails.avatar_url = response.avatar_url,
        this.userdetails.repos_url = response.repos_url,
        this.userdetails.name = response.name
        this.userdetails.url = response.url
        this.userdetails.blog = response.blog
        this.userdetails.location = response.location
        this.userdetails.bio = response.bio
        this.userdetails.twitter_username = response.twitter_username
        this.userdetails.followers = response.followers
        this.userdetails.following = response.following
        this.userdetails.created_at = new Date(response.created_at)
        this.userdetails.update_at = new Date(response.updated_at)
        this.userdetails.public_repos = response.public_repos

        resolve("it's a Success")
      }), (error: any) => {
        reject(error);
      }

      this.repoData.splice(0, this.repoData.length) // deleting an array

      this.http.get<any>('https://api.github.com/users/' + user + '/repos').toPromise().then(response => {
        for (var i = 0; i < response.length; i++) {
          this.singleRepoData = new Repo(response[i].name, response[i].html_url, response[i].updated_at, new Date(response[i].created_at), response[i].forks, response[i].language, response[i].clone_url, response[i].homepage, response[i].description)
          this.repoData.push(this.singleRepoData)

        }
        resolve('Success')
      }), (error: any) => {
        reject(error)
      }
    })
    return promise;
  }

  getRepos(query: string) {
    interface ApiResponse {
      total_count: number,
    }
    this.repoData.splice(0, this.repoData.length) // deleting an array
    let promise = new Promise((resolve, reject) => {
      this.http.get<any>('https://api.github.com/search/repositories?q=' + query).toPromise().then(response => {
        this.totalCount = response.total_count

        for (var i = 0; i < response.items.length; i++) {
          console.log(response.items[i].full_name)
          this.singleRepoData = new Searchrepo(response.items[i].full_name, response.items[i].html_url, response.items[i].description, new Date(response.items[i].updated_at), new Date(response.items[i].created_at), response.items[i].language, response.items[i].forks_count,  response.items[i].name )
          this.searchreps.push(this.singleRepoData)
        }
        resolve('Success')
      }), (error: any) => {
        reject(error)
      }

      this.http.get<ApiResponse>('https://api.github.com/search/repositories?q=' + query).toPromise().then(response => {
        this.totalCount = response.total_count
        console.log(this.totalCount)
        resolve('Success')
      }), (error: any) => {
        reject(error)
      }
    })
    return promise;
  }
}
