import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  baseUri = `http://localhost:5000/v1/topics`

  constructor(private http: HttpClient) { }

  getAllTopics(){
    return this.http.get<any>(this.baseUri)
    // .pipe(map((response) => {
    //   console.log(response)
    //   return response;
    // }))
  }

  // getTopicsNames(){
  //   return this.http.get<any>(this.baseUri)
  //   .pipe(map((response) => {
  //     console.log(response)
  //     return response;
  //   }))
  // }
}
