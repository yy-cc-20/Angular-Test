import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { Location } from '@angular/common';
import { BreadcrumbService } from '../breadcrumb/breadcrumb.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {
  breadcrumb = ""
  private subscription: Subscription = new Subscription();

    constructor(
      private location: Location,
      private router: Router,
      private breadcrumbService: BreadcrumbService
    ) {
        this.subscription = this.breadcrumbService.productName$.subscribe(name => {
          this.setBreadcrumb(name);
        });

        this.router.events.subscribe((event) => {
          this.setBreadcrumb();
        })
    }

  setBreadcrumb(productName = '') {
    if (this.location.isCurrentPathEqualTo("/Login"))
      this.breadcrumb = "Log-In"

    else if (this.location.isCurrentPathEqualTo("/ForgetPswd"))
      this.breadcrumb = "Forget Password"

    else if (this.location.isCurrentPathEqualTo("/Unauthorized"))
      this.breadcrumb = "Unauthorized"

    else if (this.location.isCurrentPathEqualTo("/MyProfile"))
      this.breadcrumb = "My Profile"

    else if (this.location.isCurrentPathEqualTo("/ChangePswd"))
      this.breadcrumb = "Profile/Change Password"

    else if (this.location.isCurrentPathEqualTo("/Product"))
      this.breadcrumb = "Product"

    else if (this.location.path().includes("Product"))
      this.breadcrumb = `Product/${productName}`
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
