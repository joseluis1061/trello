import { Component, signal, inject, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../service/products.service';
import { DataSourceProduct } from './data-source';
import { debounceTime } from 'rxjs';
import { BtnComponent } from '../../shared/components/btn/btn.component';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';

import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CdkTableModule, CommonModule, ReactiveFormsModule, BtnComponent],
  templateUrl: './table.component.html'
})

export class TableComponent implements OnInit {

  // products = signal<Product[]>([]);
  dataSource = new DataSourceProduct();
  columns: string[] = ['#No', 'Name', 'price', 'cover', 'url', 'actions'];
  input = new FormControl('', { nonNullable: true });
  total = 0;
  private productsService = inject(ProductsService);

  constructor(private sanitizer: DomSanitizer) { }

  getSafeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe({
      next: ((respone) => {
        this.dataSource.init(respone);
        this.total = this.dataSource.getTotal();
      })
    });

    this.input.valueChanges
      .pipe(
        debounceTime(300)
      )
      .subscribe(value => {
        this.dataSource.find(value);
      });
    }

  update(product: Product) {
    this.dataSource.update(product.id, { price: 20 });
  }


}
