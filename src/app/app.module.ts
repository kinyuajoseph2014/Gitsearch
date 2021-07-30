import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import { GithubsearchService } from './githubsearch.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { RepoSearchComponent } from './repo-search/repo-search.component';
import { RepodetailsComponent } from './repodetails/repodetails.component';
import { SearchQueryComponent } from './search-query/search-query.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RepoSearchComponent,
    RepodetailsComponent,
    SearchQueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [GithubsearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
