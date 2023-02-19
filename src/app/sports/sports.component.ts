import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsOperationService } from '../news-operation.service';
import { News } from '../news';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {
  __newsService: NewsOperationService; // creating object of Service layer
  router: Router;


  allNews: Array<News> = [];
  constructor(newsService: NewsOperationService, router: Router) {
    
    this.__newsService = newsService;
    this.allNews = this.__newsService.getNewsByCategory('Sports');
    this.router = router;
    console.log(this.allNews.length);
  }
  viewNewsDetails(category: string) {

    this.router.navigate(['newsDetail', category]);
  }



}
