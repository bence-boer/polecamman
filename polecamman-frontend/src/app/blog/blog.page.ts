import {Component} from '@angular/core';
import {BlogPost} from "./utils/BlogPost";
import {BlogPostService} from "./data-access/blog-post.service";
import {BehaviorSubject, catchError, mergeMap, Observable, retry, tap} from "rxjs";

@Component({
  selector: 'blog-page',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage {
  private firstLoad: number = 3;
  private loadStep: number = 3;
  private loaded: number = 0;

  posts$: BehaviorSubject<BlogPost[]> = new BehaviorSubject<BlogPost[]>(Array(this.firstLoad).fill(null));
  problem?: 'ERROR' | 'EMPTY';
  allLoaded = false;

  constructor(private blogPostService: BlogPostService) {
    let request = this.blogPostService.getPosts(0, this.firstLoad).pipe(
      retry(3),
      catchError(error => this.handleError(error))
    );

    this.posts$.pipe(
      mergeMap(posts => request.pipe(
        tap(newPosts => {
          posts.splice(0, posts.length, ...newPosts);
          this.loaded += newPosts.length;
          if (newPosts.length < this.firstLoad) this.allLoaded = true;
        }),
        catchError(error => this.handleError(error))
      ))
    ).subscribe();
  }

  getMorePosts(): void {
    if (this.allLoaded) return;
    let request = this.blogPostService.getPosts(this.loaded, this.loadStep).pipe(
      retry(3),
      catchError(error => this.handleError(error))
    );

    this.posts$.pipe(
      // push loadStep nulls to the end of the array
      mergeMap(posts => {
        posts.push(...Array(this.loadStep).fill(null));
        return request.pipe(
          tap(newPosts => {
            posts.splice(posts.length - this.loadStep, this.loadStep, ...newPosts);
            this.loaded += newPosts.length;
            if (newPosts.length < this.loadStep) this.allLoaded = true;
          }),
          catchError(error => this.handleError(error))
        );
      })
    ).subscribe();
  }

  private handleError(error: Error): Observable<BlogPost[]> {
    console.error(error);
    this.problem = 'ERROR';
    return new Observable<BlogPost[]>();
  }
}
