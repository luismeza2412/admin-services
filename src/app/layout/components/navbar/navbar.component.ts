import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { BreadcrumbService } from 'src/app/services/breadcrump.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  breadcrumbs$ = this.breadcrumbService.breadcrumbs$;

  constructor(private breadcrumbService: BreadcrumbService) {}
}
