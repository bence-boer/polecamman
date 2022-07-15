import {Component, Input, OnInit} from '@angular/core';
import {BlogPost} from "../../data-types/BlogPost";

@Component({
  selector: 'app-blog-post-open',
  templateUrl: './blog-post-open.component.html',
  styleUrls: ['./blog-post-open.component.scss']
})
export class BlogPostOpenComponent implements OnInit {
  @Input() blogPost !: BlogPost;
  constructor() { }

  ngOnInit(): void {
  }

}
