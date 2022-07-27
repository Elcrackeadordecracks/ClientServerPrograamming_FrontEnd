export interface CommentResult {
  data: Comment[];
  meta: number;
}

export interface Meta {
  page: number;
}

export interface Comment{
  id_comment: number;
  idpost:number;
  name: string;
  comment: string;
  date: number;
 
}