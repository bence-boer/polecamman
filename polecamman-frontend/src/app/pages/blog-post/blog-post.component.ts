import {Component} from '@angular/core';
import {BlogPost} from "../../data-types/BlogPost";
import {ActivatedRoute, Router} from "@angular/router";
import {BlogPostService} from "../../services/blog-post.service";
import {environment} from "../../../environments/environment";
import {MediaElement} from "../../data-types/MediaElement";
import {catchError, map, Observable, retry, switchMap} from "rxjs";

@Component({
  selector: 'blog-post-page',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent {
  blogPost$: Observable<BlogPost>;
  mediaElements$: Observable<MediaElement[]>;
  serverURL = environment.serverURL;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private blogPostService: BlogPostService) {
    this.blogPost$ = this.route.params.pipe(
      switchMap(params => this.blogPostService.getPostBySlug(params['slug']).pipe(
        retry(3),
        catchError(error => this.handleError(error))
      ))
    );
    this.mediaElements$ = this.blogPost$.pipe(
      map(blogPost => BlogPostComponent.extractMedia(blogPost))
    );
  }

  private handleError(error: Error): Observable<BlogPost> {
    this.navigateTo404Page(error);
    return new Observable<BlogPost>();
  }

  private navigateTo404Page(error?: Error) {
    this.router.navigate(['/404'], {
      skipLocationChange: true,
      state: {
        source: 'blog-post',
        error: error
      }
    });
  }

  private static extractMedia(blogPost: BlogPost): MediaElement[] {
    return blogPost.attributes.media.data.map((mediaElement) => mediaElement.attributes);
  }
}
