import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Product } from '../models/product.model';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ProducrService {
  private url: string = 'https://api.escuelajs.co/api/v1/products';
  products: Product[] | null = null;

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts():Observable<Product[] | null> {
    return this.http.get<Product[]>(this.url).pipe(
      catchError( (error: null) => {
        return of(null)
      })
    )
  }

}
