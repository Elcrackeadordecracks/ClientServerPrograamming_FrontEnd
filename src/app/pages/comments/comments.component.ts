import { Component, OnInit } from '@angular/core';
import { Comment,CommentResult } from 'src/app/interfaces/comment';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})

export class CommentsComponent implements OnInit {
  postFound=false;
  comments: Comment[] = [];
  post: Post[]=[];
  
  

  constructor(private service: PostsService) {
    const postID = new URLSearchParams(window.location.search).get('id');

    this.service.getPosts().subscribe(({data:postsData}) => {
     this.post=postsData.filter(({idpost})=> Number(postID)===idpost);
     if(this.post.length===0)return;
     this.postFound=true;

     this.service
     .getComments()
     .subscribe(({data:commentsData}: CommentResult) =>{
      this.comments = commentsData.filter(
        ({idpost})=> Number(postID)=== idpost
      );
    
    
    });

    });
    
  }
  ngOnInit(): void {

  }
}
  