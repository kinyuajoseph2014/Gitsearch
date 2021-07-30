export class Userdetails {
  constructor(
    public login:string,
    public avatar_url:string,
    public repos_url:string,
    public name:string,
    public url:string,
    public blog:string,
    public location:string,
    public bio:string,
    public twitter_username:string,
    public public_repos:number,
    public followers:string,
    public following:string,
    public created_at: Date,
    public update_at: Date,
  ){}
}
