import { apiCall } from "~/api/apiCall";
import { Post } from "~/models/Post";
import { Comment } from "~/models/Comment";

export const fetchPosts = (start: number, limit: number, userId: number): Promise<Post[]> =>
  apiCall<Post[]>({
    url: `posts?_start=${start}&_limit=${limit}${userId ? `&userId=${userId}` : ""}`
  });

export const fetchPost = (postId: string): Promise<Post> =>
  apiCall<Post>({
    url: `posts/${postId}`
  });

export const fetchPostComments = (
  start: number,
  limit: number,
  postId: number
): Promise<Comment[]> =>
  apiCall<Comment[]>({
    url: `posts/${postId}/comments?_start=${start}&_limit=${limit}`
  });
