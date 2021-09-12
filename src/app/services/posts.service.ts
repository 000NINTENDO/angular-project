import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Post } from '../components/posts/posts.component';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  options = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  private url = "http://localhost:3000/posts"

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(this.url);
  }
}
