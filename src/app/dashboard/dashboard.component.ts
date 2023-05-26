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
  // show = true
  // isActiveLink = false;
  constructor(public router: Router, private route: ActivatedRoute) {}
  shouldShowButton(): boolean {
    // Get the current URL
    const currentUrl = this.router.url;
    // const abc = this.router.url;

    // Determine whether to show or hide the button based on the double URL
    return currentUrl.includes('dashboard/estimations') || currentUrl.includes('dashboard/exportfile') || currentUrl.includes('dashboard/addestimation/estimationresult') // Replace '/specific-url' with the URL you want to check
  }
}
