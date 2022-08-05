import {Component, Input, OnInit} from '@angular/core';
import {BlogPost} from "../../../data-types/BlogPost";
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../../../services/album.service";
import {BlogPostService} from "../../../services/blog-post.service";

@Component({
  selector: 'app-blog-post-open',
  templateUrl: './blog-post-open.component.html',
  styleUrls: ['./blog-post-open.component.scss']
})
export class BlogPostOpenComponent implements OnInit {
  blogPost !: BlogPost;
  constructor(private route: ActivatedRoute, private blogPostService: BlogPostService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.blogPostService.getPostByID(+id!).subscribe((blogPost) => {
      this.blogPost = blogPost;
    });
  }

}
