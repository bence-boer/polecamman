import {Component} from '@angular/core';
import {BlogPost} from "./utils/BlogPost";
import {BlogPostService} from "./data-access/blog-post.service";
import {catchError, mergeMap, Observable, of, retry, startWith, tap} from "rxjs";

@Component({
  selector: 'blog-page',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage {
  posts$: Observable<BlogPost[]>;
  problem?: 'ERROR' | 'EMPTY';

  private startWith: number = 3;
  private loadStep: number = 3;

  constructor(private blogPostService: BlogPostService) {
    this.posts$ = this.blogPostService.getPosts().pipe(
      startWith(Array(this.startWith).fill(null)),
      retry(3),
      catchError(error => {
        this.problem = 'ERROR';
        console.error(error);
        return of([] as BlogPost[]);
      }),
      tap(posts => {
        if (posts.length == 0) this.problem = 'EMPTY';
      })
    );
  }

  getMorePosts(): void {
    this.posts$ = this.posts$.pipe(
      mergeMap(posts => {
        return this.blogPostService.getPosts(posts.length, this.loadStep).pipe(
          startWith(posts.concat(Array(this.loadStep).fill(null))),
          catchError(error => {
            // TODO: handleError()
            this.problem = 'ERROR';
            console.error(error);
            return of(posts);
          })
        );
      }),
      catchError(error => this.handleError(error))
    );
  }

  private handleError(error: Error): Observable<BlogPost[]> {
    console.error(error);
    this.problem = 'ERROR';
    return new Observable<BlogPost[]>();
  }
}
