import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getConfig() {
    return this.http.get('http://localhost:3000/users');
  }

  getPosts() {
    return this.http.get('http://localhost:3000/posts');
  }
  getPostsForUser(authorId) {
    return this.http.get(`http://localhost:3000/posts?authorId=${authorId}`);
  }
  getComments() {
    return this.http.get(`http://localhost:3000/comments`);
  }
  getCommentsForPost(postId) {
    return this.http.get(`http://localhost:3000/comments?postId=${postId}`);
  }
  addUser(user) {
    return this.http.post(`http://localhost:3000/users`, user);
  }
  addPost(title, authorId) {
    return this.http.post(`http://localhost:3000/posts`, { title, authorId });
  }
  removeUser(id) {
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }
  searchUsers(name) {
    return this.http.get(`http://localhost:3000/users?name=${name}`);
  }
}
