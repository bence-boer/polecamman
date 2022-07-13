import { Component, OnInit } from '@angular/core';
import {BlogPost} from "../../../BlogPost";
import {BlogPostService} from "../../../services/blog-post.service";

@Component({
  selector: 'polecamman-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  posts: BlogPost[] = [];

  constructor(private blogPostService: BlogPostService) {}

  ngOnInit(): void {
    this.blogPostService.getPosts().subscribe((blogPosts) => {
      this.posts = blogPosts;
    });
  }
}
