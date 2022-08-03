import { Component, OnInit } from '@angular/core';
import {BlogPost} from "../../../data-types/BlogPost";
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
      let length = blogPosts.length;
      for (let i = 0; i < length; i++) {
        this.posts[i] = blogPosts[length-i-1];
        this.posts[i].id = length-i-1;
      }
    });
  }
}
