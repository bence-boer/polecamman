import {Component, Input} from '@angular/core';
import {BlogPost} from "../../data-types/BlogPost";
import {environment} from "../../../environments/environment";
import {MediaElement, MediaFormat} from "../../data-types/MediaElement";

@Component({
  selector: 'blog-post-preview',
  templateUrl: './blog-post-preview.component.html',
  styleUrls: ['./blog-post-preview.component.scss'], // TODO: responsive height
})
export class BlogPostPreviewComponent{
  @Input() blogPost !: BlogPost | null;
  media_0?: MediaElement;
  @Input() even !: boolean;
  serverURL = environment.serverURL;
  thumbnail!: MediaFormat;

  multipleMedia = false;
  containsImage = false;
  containsVideo = false;

  ngOnChanges(){
    if(!this.blogPost) return;
    if (!this.blogPost.attributes.media.data?.length) return;
    this.media_0 = this.blogPost.attributes.media.data[0].attributes;
    this.thumbnail = this.media_0.formats?.large;
    this.multipleMedia = this.blogPost.attributes.media.data.length > 1;
    this.containsImage = this.blogPost.attributes.media.data.some(media => media.attributes.mime.includes('image'));
    this.containsVideo = this.blogPost.attributes.media.data.some(media => media.attributes.mime.includes('video'));
  }
}
