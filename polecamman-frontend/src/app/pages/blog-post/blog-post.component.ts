import {Component, OnInit} from '@angular/core';
import {BlogPost} from "../../data-types/BlogPost";
import {ActivatedRoute, Router} from "@angular/router";
import {BlogPostService} from "../../services/blog-post.service";
import {environment} from "../../../environments/environment";
import {MediaElement} from "../../data-types/MediaElement";
import {Unsubscriber} from "../../utilities/unsubscriber";
import {Observable} from "rxjs";
import {LocaleService} from "../../services/locale.service";

@Component({
  selector: 'blog-post-page',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent extends Unsubscriber implements OnInit {
  language$: Observable<string>;
  blogPost!: BlogPost;
  mediaElements!: MediaElement[];
  serverURL = environment.serverURL;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private languageService: LocaleService,
              private blogPostService: BlogPostService) {
    super();
    this.language$ = this.languageService.currentLocale;
  }

  ngOnInit(): void {
    this.getPost();
  }

  private getPost() {
    this.subscription = this.route.params.subscribe(params => {
      this.subscription = this.blogPostService.getPostBySlug(params['slug']).subscribe({
        next: blogPost => {
          if (!blogPost) {
            this.navigateTo404Page();
          } else {
            this.blogPost = blogPost;
            this.mediaElements = BlogPostComponent.extractMedia(blogPost);
          }
        },
        error: error => this.handleError(error)
      });
    });
  }

  private handleError(error: Error) {
    this.navigateTo404Page(error);
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

  private static extractMedia(blogPost: BlogPost) {
    return blogPost.attributes.media.data.map((mediaElement) => mediaElement.attributes);
  }
}
