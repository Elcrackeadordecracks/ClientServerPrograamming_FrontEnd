import { Component, OnInit } from '@angular/core';
import { PostResult, Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts: Post[] = [];



  constructor(private service: PostsService) {
    this.getPosts();
   }

  ngOnInit(): void {
  }

  getPosts() : void {
    this.service.getPosts().subscribe((result: PostResult) => {
      console.log(result.data);
      this.posts = result.data;
    });
  }

}

