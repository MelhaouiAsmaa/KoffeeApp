import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

// tslint:disable-next-line: max-line-length
// const corsHeaders = new HttpHeaders({
//   'Content-Type': 'application/json',
//   Accept: 'application/json', 'Access-Control-Allow-Origin': 'https://random-data-api.com/api/coffee/random_coffee'
// });
@Injectable({
  providedIn: 'root',
})

export class ProductService {
  private baseUrl = 'https://random-data-api.com/api/coffee/random_coffee';

  constructor(private http: HttpClient) { }

  getProductListWithParams(params: any): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl, { params });
  }
  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + '?size=50');
  }

  getProduct(id: any): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + '?id=' + id);
  }
}