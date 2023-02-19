import { Component } from '@angular/core';
import { News } from '../news';
import { NewsOperationService } from '../news-operation.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent {
  router:Router;
  __newsService:NewsOperationService;
  allNews : Array<News> = [];

  constructor(newsService:NewsOperationService,router:Router)
  {
    this.__newsService = newsService;
    this.allNews = this.__newsService.getNewsByCategory('Business');
    this.router = router;
    console.log(this.allNews.length);
  }

  viewNewsDetails(category:string)
  {

    this.router.navigate(['newsDetail',category]);
  }


}
