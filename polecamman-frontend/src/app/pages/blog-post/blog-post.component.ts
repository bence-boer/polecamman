import {Component, OnInit} from '@angular/core';
import {BlogPost} from "../../data-types/BlogPost";
import {ActivatedRoute} from "@angular/router";
import {BlogPostService} from "../../services/blog-post.service";
import {environment} from "../../../environments/environment";
import {MediaElement} from "../../data-types/MediaElement";
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'blog-post-page',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  blogPost !: BlogPost;
  mediaElements !: MediaElement[];
  serverURL = environment.serverURL;

  constructor(private route: ActivatedRoute, private blogPostService: BlogPostService, private languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe((language) => {
      let slug = this.route.snapshot.paramMap.get('slug');
      this.blogPostService.getPostBySlug(slug!, language).subscribe((blogPost) => {
        this.blogPost = blogPost;
        this.mediaElements = blogPost.attributes.media.data.map((media) => media.attributes);
        this.blogPost.attributes.publishedAt = this.blogPost.attributes.publishedAt.substring(0, 10);
      });
    });
  }
}
