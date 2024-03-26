import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Product } from '../models/product.model';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url: string = "https://api.escuelajs.co/api/v1/products";
  products= signal<Product[]>([]);
  totalPrice= signal<number>(0);
  private http = inject(HttpClient);
  getAllProducts() {
    return this.http.get<Product[]>(this.url)
  }

}
