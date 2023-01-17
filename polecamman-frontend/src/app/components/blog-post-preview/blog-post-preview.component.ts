import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {BlogPost} from "../../data-types/BlogPost";
import {environment} from "../../../environments/environment";
import {MediaElement} from "../../data-types/MediaElement";

@Component({
  selector: 'blog-post-preview',
  templateUrl: './blog-post-preview.component.html',
  styleUrls: ['./blog-post-preview.component.scss'],
})
export class BlogPostPreviewComponent implements OnInit {
  @Input() blogPost !: BlogPost;
  thumbnail !: MediaElement;
  @Input() even !: boolean;
  @ViewChild('text', {static: true}) text !: ElementRef<HTMLElement>;
  serverURL = environment.serverURL;

  constructor() {}

  ngOnInit(): void {
    this.text.nativeElement.innerHTML = this.blogPost.attributes.content;
    this.thumbnail = this.blogPost.attributes.media.data[0].attributes;
  }
}
