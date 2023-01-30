import {Component} from '@angular/core';
import {BlogPost} from "../../data-types/BlogPost";
import {BlogPostService} from "../../services/blog-post.service";
import {LanguageService} from "../../services/language.service";
import {Observable} from "rxjs";

@Component({
  selector: 'blog-page',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  posts$: Observable<BlogPost[]>;
  language$: Observable<string>;

  constructor(private blogPostService: BlogPostService, private languageService: LanguageService) {
    this.posts$ = this.blogPostService.getPosts();
    this.language$ = this.languageService.currentLanguage;
  }
}
