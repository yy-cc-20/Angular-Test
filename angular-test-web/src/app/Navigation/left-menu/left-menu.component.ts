import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { NgFor, NgIf, UpperCasePipe, Location } from '@angular/common';
import { AuthenticationService } from '../../Authentication/authentication.service';

@Component({
  selector: 'app-left-menu',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.css'
})
export class LeftMenuComponent  {

}
