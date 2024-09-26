import { Component } from '@angular/core';
import { AngularTestApiService } from '../../angular-test-api.service';
import { DecimalPipe } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [DecimalPipe, NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productList = [{
    id: '',
    name: '',
    description: '',
    image_path: '',
    lower_price_range: 0,
    upper_price_range: 0
  }]

  constructor(private apiService: AngularTestApiService,) { }

  ngOnInit(): void {
    this.apiService.getProducts()
      .subscribe({
        next: (response) => {
          this.productList = response;
        },
        error: (error) => {
          console.error('Product list error:', error);
        },
        complete: () => {

        }
      });
  }
}
