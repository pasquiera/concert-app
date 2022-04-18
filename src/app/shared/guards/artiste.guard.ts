import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArtisteGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    const id = route.params['id'];

    if (isNaN(id) || id <= 0) {
      alert('Artiste inconnu');
      this.router.navigate(['/home']);
      return false
    }

    return true;
  }

}
