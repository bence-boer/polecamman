import {Component, OnInit} from '@angular/core';
import {BlogPost} from "../../data-types/BlogPost";
import {ActivatedRoute} from "@angular/router";
import {BlogPostService} from "../../services/blog-post.service";
import {environment} from "../../../environments/environment";
import {MediaElement} from "../../data-types/MediaElement";

@Component({
  selector: 'blog-post-page',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  blogPost !: BlogPost;
  mediaElements !: MediaElement[];

  slideGallery ?: HTMLElement | null;
  slideWidth = 0;
  currentMedia ?: MediaElement;
  currentMediaIndex = 0;
  hasMultipleMedia = false;

  serverURL = environment.serverURL;

  constructor(private route: ActivatedRoute, private blogPostService: BlogPostService) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.blogPostService.getPostByID(+id!).subscribe((blogPost) => {
      this.blogPost = blogPost;
      this.mediaElements = blogPost.attributes.media.data.map((media) => media.attributes);
      this.currentMedia = this.mediaElements[0];
      this.blogPost.attributes.publishedAt = this.blogPost.attributes.publishedAt.substring(0, 10);

      setTimeout(() => {
        this.slideGallery = document.getElementById("slides");
        this.slideGallery!.addEventListener('scroll', () => this.watchScroll())
        this.setSlideWidth();
        addEventListener("resize", () => this.setSlideWidth());
        this.hasMultipleMedia = this.blogPost.attributes.media.data.length > 1;
      }, 200);
    });
  }

  scrollToMedia(index: number) {
    this.slideGallery?.scroll(index * this.slideWidth, 0)
  }

  nextMedia() {
    if (this.currentMediaIndex == this.blogPost.attributes.media.data.length - 1) {
      this.currentMediaIndex = 0;
      this.currentMedia = this.blogPost.attributes.media.data[this.currentMediaIndex].attributes;
      return;
    }
    this.currentMediaIndex++;
    this.currentMedia = this.blogPost.attributes.media.data[this.currentMediaIndex].attributes;
  }

  previousMedia() {
    if (this.currentMediaIndex == 0) {
      this.currentMediaIndex = this.blogPost.attributes.media.data.length - 1;
      this.currentMedia = this.blogPost.attributes.media.data[this.currentMediaIndex].attributes;
      return;
    }
    this.currentMediaIndex--;
    this.currentMedia = this.blogPost.attributes.media.data[this.currentMediaIndex].attributes;
  }

  watchScroll() {
    const index = Math.floor(this.slideGallery!.scrollLeft / this.slideWidth);
    if (this.currentMediaIndex != index) {
      this.currentMediaIndex = index;
      this.currentMedia = this.mediaElements[index];
    }
  }

  setSlideWidth(){
    this.slideWidth = document.getElementById("gallery-container")!.offsetWidth;
  }

  isImage(media: MediaElement) {
    return media.mime.includes("image");
  }

  isVideo(media: MediaElement) {
    return media.mime.includes("video");
  }
}
