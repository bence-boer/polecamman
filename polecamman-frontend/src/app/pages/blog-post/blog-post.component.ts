import {Component, OnInit} from '@angular/core';
import {BlogPost} from "../../data-types/BlogPost";
import {ActivatedRoute, Router} from "@angular/router";
import {BlogPostService} from "../../services/blog-post.service";
import {environment} from "../../../environments/environment";
import {MediaElement} from "../../data-types/MediaElement";
import {Unsubscriber} from "../../utilities/unsubscriber";
import {catchError, Observable, of} from "rxjs";
import {LanguageService} from "../../services/language.service";

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
              private languageService: LanguageService,
              private blogPostService: BlogPostService) {
    super();
    this.language$ = this.languageService.currentLanguage;
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.subscription = this.language$.subscribe((language: string) => {
        this.subscription = this.blogPostService.getPostBySlug(params['slug'], language)
          .pipe(catchError(error => {
            this.router.navigate(['/404'], {
              skipLocationChange: true,
              state: {
                // Whatever data you need on the 404 page
                source: 'blog-post',
                error: error
              }
            });
            return of(null);
          }))
          .subscribe((blogPost) => {
            if (!blogPost) {
              console.log('Blog post not found')
            } else {
              this.blogPost = blogPost;
              this.mediaElements = blogPost.attributes.media.data.map((mediaElement) => mediaElement.attributes);
            }
          });
      });
    });
  }
}
