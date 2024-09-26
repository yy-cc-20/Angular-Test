import { Component } from '@angular/core';
import { AngularTestApiService } from '../../angular-test-api.service';
import { DecimalPipe } from '@angular/common';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [DecimalPipe, NgFor, NgIf],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product = {
    id: '',
    name: '',
    description: '',
    image_path: '',
    product_variance_list: [{
      id: '',
      info: '',
      price: 0
    }]
  }

  invalidProduct = false;

  constructor(
    private apiService: AngularTestApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.apiService.getProductDetails(
      this.route.snapshot.paramMap.get('id')!)
      .subscribe({
        next: (response) => {
          this.product = response;
        },
        error: (error) => {
          this.invalidProduct = true;
          //console.error('Product details error:', error);
        },
        complete: () => {

        }
      });
  }

  goBack() {
    window.history.back();
  }
}
