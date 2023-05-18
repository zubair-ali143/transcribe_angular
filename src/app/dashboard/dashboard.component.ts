import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

  nav = 'active';
  show = true
  isActiveLink = false;
  constructor(public router: Router, private route: ActivatedRoute) {}
}
