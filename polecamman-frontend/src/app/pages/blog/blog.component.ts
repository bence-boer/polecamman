import {Component} from '@angular/core';
import {BlogPost} from "../../data-types/BlogPost";
import {BlogPostService} from "../../services/blog-post.service";
import {LocaleService} from "../../services/locale.service";
import {Observable} from "rxjs";

@Component({
  selector: 'blog-page',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  posts$: Observable<BlogPost[]>;
  language$: Observable<string>;

  constructor(private languageService: LocaleService,
              private blogPostService: BlogPostService) {
    this.language$ = this.languageService.currentLocale;
    this.posts$ = this.blogPostService.getPosts();
  }
}
