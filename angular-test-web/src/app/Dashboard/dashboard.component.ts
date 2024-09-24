import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, UpperCasePipe, Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgIf],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  showPopup = false;
  popupShown = false; // todo first time loading

  ngOnInit(): void {
    if (!this.popupShown) {
      this.showPopup = true
    }
  }

  closePopup(): void {
    this.showPopup = false
    this.popupShown = true;
  }
}
