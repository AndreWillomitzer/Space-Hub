import { Component, OnInit } from '@angular/core';
import { ArticleDataService } from '../article-data.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: any;
  constructor(private articleDataService:ArticleDataService) { }

  ngOnInit(): void {
    this.articleDataService.getArticles().subscribe(data=>{
      this.articles = data;
      console.log("this.articles value", this.articles);
    })
  }

}
