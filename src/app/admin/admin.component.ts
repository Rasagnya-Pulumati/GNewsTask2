import { Component } from '@angular/core';
import { News } from '../news';
import { NewsOperationService } from '../news-operation.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  router:Router;
  __newsService:NewsOperationService;
  activeRoute:ActivatedRoute;
  n : News = new News('','','','');

  constructor(newsService:NewsOperationService,router:Router,activeRoute:ActivatedRoute)
  {
    this.__newsService = newsService;
    this.router = router;
    this.activeRoute = activeRoute;

    let searchCategory= this.activeRoute.snapshot.params['category']; 
    console.log(searchCategory);
    this.n = this.__newsService.getNewsByCategories(searchCategory); 
    console.log(this.n);
  }

}
