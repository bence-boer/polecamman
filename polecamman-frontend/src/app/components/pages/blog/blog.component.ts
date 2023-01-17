import { Component, OnInit } from '@angular/core';
import {BlogPost} from "../../../data-types/BlogPost";
import {BlogPostService} from "../../../services/blog-post.service";

@Component({
  selector: 'blog-page',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  posts: BlogPost[] = [];

  constructor(private blogPostService: BlogPostService) {}

  ngOnInit(): void {
    this.blogPostService.getPosts().subscribe((blogPosts) => {
      this.posts = blogPosts.reverse();
    });
  }
}
