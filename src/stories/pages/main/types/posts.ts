export type Posts = {
  userId: number;
  id: number;
  type: string;
  title: string;
  content: string;
  date: string;
  author: string;
};

export type PostsResponse = {
  records: Posts[];
};
