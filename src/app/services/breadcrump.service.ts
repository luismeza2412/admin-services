import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private breadcrumbs = new BehaviorSubject<Array<{ label: string; url: string }>>([]);
  breadcrumbs$ = this.breadcrumbs.asObservable();

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.updateBreadcrumbs());
  }

  private updateBreadcrumbs() {
    const root = this.router.routerState.snapshot.root;
    const breadcrumbs = this.createBreadcrumbs(root);
    this.breadcrumbs.next(breadcrumbs);
  }

  private createBreadcrumbs(
    route: ActivatedRouteSnapshot,
    url: string = '',
    breadcrumbs: Array<{ label: string; url: string }> = []
  ): Array<{ label: string; url: string }> {
    if (route.routeConfig?.data?.['breadcrumb']) {
      // Obtén el label del breadcrumb
      const label = route.routeConfig.data['breadcrumb'];
      // Construye la URL acumulada
      const path = route.routeConfig.path ? `${url}/${route.routeConfig.path}` : url;
      breadcrumbs.push({ label, url: path });
    }

    // Procesa la ruta hija
    if (route.firstChild) {
      return this.createBreadcrumbs(route.firstChild, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
