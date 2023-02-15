import {Component, Input, OnInit} from '@angular/core';
import {BlogPost} from "../../data-types/BlogPost";
import {environment} from "../../../environments/environment";
import {MediaElement} from "../../data-types/MediaElement";

@Component({
  selector: 'blog-post-preview',
  templateUrl: './blog-post-preview.component.html',
  styleUrls: ['./blog-post-preview.component.scss'], // TODO: responsive height
})
export class BlogPostPreviewComponent implements OnInit {
  @Input() blogPost !: BlogPost;
  thumbnail?: MediaElement;
  @Input() even !: boolean;
  serverURL = environment.serverURL;

  multipleMedia = false;
  containsImage = false;
  containsVideo = false;

  ngOnInit(): void {
    if(!this.blogPost.attributes.media.data.length) return;
    this.thumbnail = this.blogPost.attributes.media.data[0].attributes;
    this.multipleMedia = this.blogPost.attributes.media.data.length > 1;
    this.containsImage = this.blogPost.attributes.media.data.some(media => media.attributes.mime.includes('image'));
    this.containsVideo = this.blogPost.attributes.media.data.some(media => media.attributes.mime.includes('video'));
  }
}
