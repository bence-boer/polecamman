import {Component} from '@angular/core';
import {BlogPost} from "../../data-types/BlogPost";
import {BlogPostService} from "../../services/blog-post.service";
import {catchError, Observable, of, retry} from "rxjs";

@Component({
  selector: 'blog-page',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  posts$: Observable<BlogPost[]>;

  constructor(private blogPostService: BlogPostService) {
    this.posts$ = this.blogPostService.getPosts().pipe(
      retry(3),
      catchError(error => BlogComponent.handleError(error))
    );
  }

  private static handleError(error: Error): Observable<BlogPost[]> {
    console.error(error);
    return of([]);
  }
}
