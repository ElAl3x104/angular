import { Component, HostBinding } from '@angular/core';
import { Article } from '../../models/article.models';
import  { Title } from '@angular/platform-browser';     

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  @HostBinding('attr.class') cssClass = 'card';
  article: Article;
  
  constructor(title: string, link: string, votes?: number) {
    this.article = new Article(title, link, votes);
  }
  voteUp():Boolean {
    this.article.votes += 1;
    return false;
  }
  voteDown():Boolean {
    this.article.votes -= 1;
    return false;
  }
  ngOnInit() { }
}
