import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUri = `http://localhost:5000/v1`;

  constructor(private http: HttpClient) { }

  getProductByDate(date: any): Observable<any>{
    return this.http.post<any>(this.baseUri + '/posts', date);
  }

  filterProductByTopic(topic, date): Observable<any>{
    return this.http.get<any>(this.baseUri + `/${date}/${topic}`)
    .pipe(map((response) => {
      return response;
    }));
  }
}
