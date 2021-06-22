import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  baseUri = `http://localhost:5000/v1/topics`;

  constructor(private http: HttpClient) { }

  getAllTopics(): Observable<any>{
    return this.http.get<any>(this.baseUri);
  }

}
