import { Injectable } from '@angular/core';
import { News } from './news';
@Injectable({
  providedIn: 'root'
})
export class NewsOperationService {
  constructor() { 

    let bnews : News = new News("Markets week ahead","Business","After Bihar CM says waiting for Congress signal to work towards Opposition unity, Jairam Ramesh says, “We don’t need a certificate from anyone that we need to take the lead because any Opposition unity will be unsuccessful without the Congress …","businessnews.jpg");
    let pnews : News = new News("Congress: ‘We know our role very well … ","Politics","George Soros remarks: Political slugfest erupts; Congress slams govt, BJP calls it an attack on democracy","politicalnews.jpg");
    let cnews : News = new News("Bengaluru Teen Suffers Eye Damage After Acid Attack By Stalker","Crime","A 17-year-old girl in Karnataka suffered serious burn injuries after acid was thrown at her by a man for refusing his advances. The 22-year-old man, who works as a mechanic, has been arrested.","crimenews.jpg");
    let wnews : News = new News("At least 15 killed as Israeli missile strikes building in Damascus","World","The targeted strike hit the densely-populated Kafr Sousa, home to senior officials, security agencies and intelligence headquarters.","worldnews.jpg");
    let tnews : News = new News("WhatsApp rolls out picture-in-picture video call feature for these users","Technology","Meta owned WhatsApp is known for its innovative features in India. The instant messaging platform is now rolling out picture-in picture mode for video calls on iOS, as per a report.","technologynews.jpg");
    let snews : News = new News("Gavaskar's emotional message during commentary of India vs Australia 2nd Test","Sports"," Rishabh Pant's batting was not the only reason for the fans and experts to remember him. His chirpy nature behind the stumps was missed by Sunil Gavaskar","sportsnews.jpg");
  
    this.allNews.push(bnews)
    this.allNews.push(pnews)
    this.allNews.push(cnews)
    this.allNews.push(wnews)
    this.allNews.push(tnews)
    this.allNews.push(snews)
  
  
    }
    allNews : News[] = [];
  
    getNewsArr():News[]
    {
      return this.allNews;
    }
  
    getNewsByCategory(filterCategory:string):News[]
    {
  
     let outputArr:News[] = [];
  
      this.allNews.forEach(n=>{
        if(n.category == filterCategory)
        {
          outputArr.push(n);
        }
      });
  
      return outputArr;
    }
  
    getNewsByCategories(searchCategory:string):News
    {
      let outputNews:News = new News('','','','');
      for(let i=0;i<this.allNews.length;i++)
      {
        let thisNews:News = this.allNews[i];
          if(thisNews.category == searchCategory)
          {
            outputNews = thisNews;
            break;
          }
      }
  
      return outputNews;
    }
}
