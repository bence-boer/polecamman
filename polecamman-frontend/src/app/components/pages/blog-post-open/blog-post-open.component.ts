import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {BlogPost} from "../../../data-types/BlogPost";
import {ActivatedRoute} from "@angular/router";
import {BlogPostService} from "../../../services/blog-post.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-blog-post-open',
  templateUrl: './blog-post-open.component.html',
  styleUrls: ['./blog-post-open.component.scss']
})
export class BlogPostOpenComponent implements OnInit {
  blogPost !: BlogPost;
  @ViewChild('text', {static: true}) text !: ElementRef<HTMLElement>;
  serverURL = environment.serverURL;

  constructor(private route: ActivatedRoute, private blogPostService: BlogPostService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.blogPostService.getPostByID(+id!).subscribe((blogPost) => {
      this.blogPost = blogPost;
      this.blogPost.attributes.publishedAt = this.blogPost.attributes.publishedAt.substring(0,10);
      this.text.nativeElement.innerHTML = this.blogPost.attributes.content;
    });
  }
}
