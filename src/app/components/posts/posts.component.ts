import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

export interface Post {
  author: string;
  id: number;
  title: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  @Input() userName = '';
  posts: any = [];
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((res: Post[]) => {
      this.posts = res;
      debugger;
    });
  }

  ngOnChanges() {
    debugger;
  }
}
