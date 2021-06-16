import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUri = `http://localhost:5000/v1/posts`

  constructor(private http: HttpClient) { }

  getProductByDate(date){
    return this.http.post<any>(this.baseUri, date)
    // .pipe(map((response) => {
    //   console.log(response)
    //   return response;
    // }))
  }
}
