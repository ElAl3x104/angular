import { Component, HostBinding, Input } from '@angular/core';
import { Article } from '../../models/article.models';


@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  @HostBinding('attr.class') cssClass = 'card mt-4';
  @Input()article: Article;
  
  constructor() {
    this.article = new Article("title", "link");
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
