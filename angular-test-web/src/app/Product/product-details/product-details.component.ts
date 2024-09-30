import { Component } from '@angular/core';
import { AngularTestApiService } from '../../angular-test-api.service';
import { DecimalPipe } from '@angular/common';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from '../../Navigation/breadcrumb/breadcrumb.service'

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
    private breadcrumbService: BreadcrumbService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.apiService.getProductDetails(
      this.route.snapshot.paramMap.get('id')!)
      .subscribe({
        next: (response) => {
          this.product = response;
          this.breadcrumbService.setProductName(this.product.name)
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
    this.router.navigate(['Product'])
  }
}
