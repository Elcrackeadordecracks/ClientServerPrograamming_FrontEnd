import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post, PostResult} from '../interfaces/post'
import { Comment, CommentResult } from '../interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<PostResult>('http://localhost:3000/posts');
  }
  getComments() {
    return this.http.get<CommentResult>('http://localhost:3000/comments');
  }
}
