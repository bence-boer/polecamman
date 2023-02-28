import {Component, OnDestroy} from '@angular/core';
import {BlogPost} from "./utils/BlogPost";
import {BlogPostService} from "./data-access/blog-post.service";
import {
  BehaviorSubject,
  catchError,
  concatMap,
  distinctUntilChanged,
  Observable,
  retry,
  scan,
  startWith,
  tap
} from "rxjs";

@Component({
  selector: 'blog-page',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
  changeDetection: Chan
})
export class BlogPage implements OnDestroy {
  private loadStep: number = 3;
  private loaded: number = 0;

  private start$ = new BehaviorSubject<number>(0);
  posts$: Observable<BlogPost[]>;
  problem?: 'ERROR' | 'EMPTY';
  allLoaded = false;

  constructor(private blogPostService: BlogPostService) {
    this.posts$ = this.start$.pipe(
      distinctUntilChanged(),
      concatMap((start) =>
        this.blogPostService.getPosts(start, this.loadStep).pipe(
          startWith(Array(this.loadStep).fill(null)),
          retry(3),
          catchError(error => this.handleError(error))
        )),
      tap(posts => {
        this.allLoaded = posts.length < this.loadStep;
      }),
      scan((acc, posts) => {
          const merged = acc.concat(posts) as BlogPost[];
          if (merged[merged.length - 1] === null && !this.allLoaded) {
            return merged;
          }
          return merged.filter(post => post !== null);
        }
      ),
      tap(posts => {
        this.loaded = posts.length;
      }),
      catchError(error => this.handleError(error))
    );
  }

  getMorePosts(): void {
    if (this.allLoaded) return;
    this.start$.next(this.loaded);
  }

  private handleError(error: Error): Observable<BlogPost[]> {
    console.error(error);
    this.problem = 'ERROR';
    return new Observable<BlogPost[]>();
  }

  ngOnDestroy(): void {
    this.start$.complete();
  }

  blogPostId(index: number, post: BlogPost): number {
    console.log(post.id);
    return post.id;
  }
}
