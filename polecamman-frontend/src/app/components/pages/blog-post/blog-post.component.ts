import {Component, OnInit} from '@angular/core';
import {BlogPost} from "../../../data-types/BlogPost";
import {ActivatedRoute} from "@angular/router";
import {BlogPostService} from "../../../services/blog-post.service";
import {environment} from "../../../../environments/environment";
import {MediaElement} from "../../../data-types/MediaElement";

@Component({
  selector: 'blog-post-page',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  blogPost !: BlogPost;
  mediaElements !: MediaElement[];
  imageIndex = 0;
  currentMedia ?: MediaElement;

  serverURL = environment.serverURL;

  constructor(private route: ActivatedRoute, private blogPostService: BlogPostService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.blogPostService.getPostByID(+id!).subscribe((blogPost) => {
      this.blogPost = blogPost;
      this.mediaElements = blogPost.attributes.media.data.map((media) => media.attributes);
      this.currentMedia = this.blogPost.attributes.media.data[this.imageIndex].attributes;
      this.blogPost.attributes.publishedAt = this.blogPost.attributes.publishedAt.substring(0,10);
    });
  }

  nextMedia(){
    if(this.imageIndex == this.blogPost.attributes.media.data.length-1){
      this.imageIndex = 0;
      this.currentMedia = this.blogPost.attributes.media.data[this.imageIndex].attributes;
      return;
    }
    this.imageIndex++;
    this.currentMedia = this.blogPost.attributes.media.data[this.imageIndex].attributes;
  }

  previousMedia(){
    if(this.imageIndex == 0){
      this.imageIndex = this.blogPost.attributes.media.data.length-1;
      this.currentMedia = this.blogPost.attributes.media.data[this.imageIndex].attributes;
      return;
    }
    this.imageIndex--;
    this.currentMedia = this.blogPost.attributes.media.data[this.imageIndex].attributes;
  }

  isImage(media: MediaElement){
    return media.mime.includes("image");
  }

  isVideo(media: MediaElement){
    return media.mime.includes("video");
  }
}
