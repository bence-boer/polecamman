import {Component, OnInit} from '@angular/core';
import {BlogPost} from "../../data-types/BlogPost";
import {ActivatedRoute} from "@angular/router";
import {BlogPostService} from "../../services/blog-post.service";
import {environment} from "../../../environments/environment";
import {MediaElement} from "../../data-types/MediaElement";
import {Unsubscriber} from "../../utilities/unsubscriber";

@Component({
  selector: 'blog-post-page',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent extends Unsubscriber implements OnInit{
  blogPost!: BlogPost;
  mediaElements!: MediaElement[];
  serverURL = environment.serverURL;

  constructor(private route: ActivatedRoute, private blogPostService: BlogPostService) {
    super();
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.subscription = this.blogPostService.getPostBySlug(params['slug']).subscribe((blogPost) => {
        this.blogPost = blogPost;
        this.mediaElements = blogPost.attributes.media.data.map((mediaElement) => mediaElement.attributes);
      });
    });
  }
}
