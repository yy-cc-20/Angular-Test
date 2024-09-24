import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//import { HeaderComponent } from './Navigation/header/header.component';
//import { LeftMenuComponent } from './Navigation/left-menu/left-menu.component';
//import { BreadcrumbComponent } from './Navigation/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, /*HeaderComponent, LeftMenuComponent, BreadcrumbComponent*/],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent /*implements OnInit*/ {
  //time: string = '';
  //ngOnInit(): void {
  //  this.updateTime();
  //  //setInterval(() => this.updateTime(), 1000);
  //}

  //updateTime(): void {
  //  this.time = new Date().toLocaleTimeString();
  //}
}
