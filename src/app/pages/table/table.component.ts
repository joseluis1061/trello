import { Component, signal, inject, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../service/products.service';
import { CdkTableModule } from '@angular/cdk/table';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CdkTableModule],
  templateUrl: './table.component.html'
})


export class TableComponent implements OnInit {

  products = signal<Product[]>([])

  private productsService = inject(ProductsService);

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe({
      next: ((respone) => {this.products.set(respone)})
    })
  }



}
