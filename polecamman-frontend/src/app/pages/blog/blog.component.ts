import {Component} from '@angular/core';
import {BlogPost} from "../../data-types/BlogPost";
import {BlogPostService} from "../../services/blog-post.service";
import {LanguageService} from "../../services/language.service";
import {Observable, switchMap} from "rxjs";

@Component({
  selector: 'blog-page',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  posts$: Observable<BlogPost[]>;
  language$: Observable<string>;

  constructor(private blogPostService: BlogPostService, private languageService: LanguageService) {
    this.language$ = this.languageService.currentLanguage;
    this.posts$ = this.language$.pipe(switchMap(language => this.blogPostService.getPosts(language)));
  }
}
