import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

interface BreadcrumbItem {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {
  breadcrumbsList = [{
    title: String,
    url: String
  }];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const fullRouteArray = this.getFullRouteArray(this.route.snapshot);
    console.log('Full route array:', fullRouteArray);
  }

  // Recursive method to traverse the route tree and get the full path
  getFullRouteArray(routeSnapshot: ActivatedRouteSnapshot): string[] {
    let routesArray: string[] = [];

    // Traverse up the route tree to the parent
    let currentRoute = routeSnapshot;
    while (currentRoute) {
      if (currentRoute.url && currentRoute.url.length) {
        const routePath = currentRoute.url.map(segment => segment.path).join('/');
        routesArray.unshift(routePath);  // Add at the beginning to maintain the correct order
      }
      currentRoute = currentRoute.parent;
    }

    // Add any child routes if present
    if (routeSnapshot.children && routeSnapshot.children.length) {
      routeSnapshot.children.forEach(child => {
        const childPaths = this.getFullRouteArray(child);  // Recursively get child routes
        routesArray = routesArray.concat(childPaths);
      });
    }

    return routesArray;
  }
}
