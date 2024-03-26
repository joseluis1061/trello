import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ProductsService } from '../../service/products.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [CommonModule, ScrollingModule],
  templateUrl: './scroll.component.html'
})
export class ScrollComponent implements OnInit {
  productService = inject(ProductsService);
  products = signal<Product[] | null>(null);

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (data => this.products.set(data))
    })
    console.log(this.products())
  }


}
