import { Component } from '@angular/core';

import { News } from '../news';
import { Router } from '@angular/router';
import { NewsOperationService } from '../news-operation.service';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent {
  __newsService:NewsOperationService; // creating object of Service layer
  router:Router;


  allNews : Array<News> = [];




  constructor(newsService:NewsOperationService,router:Router)
  {
    this.__newsService = newsService;
    this.allNews = this.__newsService.getNewsByCategory('Politics');
    this.router = router;
    console.log(this.allNews.length);
  }
  viewNewsDetails(category:string)
  {

    this.router.navigate(['newsDetail',category]);
  }


}
