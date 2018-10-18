import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardUserService } from '../card-user/card-user.service';
import { Post } from './post';
import { GithubService } from '../github.service';
@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cardUserService: CardUserService,
    private githubServise: GithubService
  ) {}
  post: Post;
  name: string;
  comments: any;
  ngOnInit() {
    this.route.params.subscribe(({ id }) =>
      this.cardUserService.getPost(id).subscribe((post: Post) => {
        this.post = post;
        this.cardUserService.getUser(post.authorId).subscribe((user: any) => (this.name = user.name));
        this.githubServise.getCommentsForPost(post.id).subscribe(comments => (this.comments = comments));
      })
    );
  }
}
