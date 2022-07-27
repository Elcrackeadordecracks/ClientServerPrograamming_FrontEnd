export interface PostResult{
  data: Post[];
  meta: number;
}

export interface Meta {
  page: number;
}

export interface Post{
  date: string | number | Date;
  idpost: number;
  tittle: string;
  description: string;
  day: number;
  month: string;
  author: string;
  category: string;
}