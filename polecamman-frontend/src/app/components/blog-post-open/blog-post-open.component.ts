import {Component, Input, OnInit} from '@angular/core';
import {BlogPost} from "../../data-types/BlogPost";
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../../services/album.service";
import {BlogPostService} from "../../services/blog-post.service";

@Component({
  selector: 'app-blog-post-open',
  templateUrl: './blog-post-open.component.html',
  styleUrls: ['./blog-post-open.component.scss']
})
export class BlogPostOpenComponent implements OnInit {
  blogPost !: BlogPost;
  constructor(private route: ActivatedRoute, private blogPostService: BlogPostService) { }

  ngOnInit(): void {
    let slug = this.route.snapshot.paramMap.get('slug');
    this.blogPostService.getBySlug(slug!).subscribe((blogPost) => {
      this.blogPost = blogPost;
    });
  }

}
