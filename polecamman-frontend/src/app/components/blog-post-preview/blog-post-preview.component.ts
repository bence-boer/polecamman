import {Component, Input, OnInit} from '@angular/core';
import {BlogPost} from "../../BlogPost";

@Component({
  selector: 'polecamman-blog-article-preview',
  templateUrl: './blog-post-preview.component.html',
  styleUrls: ['./blog-post-preview.component.scss'],
})
export class BlogPostPreviewComponent implements OnInit {
  @Input() article !: BlogPost;
  @Input() thumbnail ?: boolean = false;
  even!: boolean;

  constructor() {}

  ngOnInit(): void {
    // @ts-ignore
    this.even = this.article.id%2 == 0;
  }
}
