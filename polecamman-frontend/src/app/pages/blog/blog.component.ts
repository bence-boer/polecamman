import {Component, OnInit} from '@angular/core';
import {BlogPost} from "../../data-types/BlogPost";
import {BlogPostService} from "../../services/blog-post.service";
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'blog-page',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  posts: BlogPost[] = [];
  language = 'en';

  constructor(private blogPostService: BlogPostService, private languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe((language) => {
      this.language = language;
      this.blogPostService.getPosts(language).subscribe((blogPosts) => {
        this.posts = blogPosts.reverse();
      });
    });
  }
}
