import {Component, Input, OnInit} from '@angular/core';
import {BlogPost} from "../../data-types/BlogPost";

@Component({
  selector: 'polecamman-blog-article-preview',
  templateUrl: './blog-post-preview.component.html',
  styleUrls: ['./blog-post-preview.component.scss'],
})
export class BlogPostPreviewComponent implements OnInit {
  @Input() blogPost !: BlogPost;
  @Input() thumbnail ?: boolean = false;
  even!: boolean;

  constructor() {}

  ngOnInit(): void {
    // @ts-ignore
    this.even = this.blogPost.id%2 == 0;
  }
}
