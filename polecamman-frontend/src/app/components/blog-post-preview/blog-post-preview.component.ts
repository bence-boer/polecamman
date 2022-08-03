import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {BlogPost} from "../../data-types/BlogPost";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'polecamman-blog-post-preview',
  templateUrl: './blog-post-preview.component.html',
  styleUrls: ['./blog-post-preview.component.scss'],
})
export class BlogPostPreviewComponent implements OnInit {
  @Input() blogPost !: BlogPost;
  @Input() thumbnail ?: boolean = false;
  even!: boolean;
  @ViewChild('text', {static: true}) text !: ElementRef<HTMLElement>;
  serverURL = environment.serverURL;

  constructor() {}

  ngOnInit(): void {
    this.even = this.blogPost.id%2 == 0;

    this.text.nativeElement.innerHTML = this.blogPost.attributes.content;
  }
}
