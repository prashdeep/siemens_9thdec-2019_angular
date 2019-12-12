import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export class AuthService  implements CanActivate{
  
  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const auth_token = localStorage.getItem('auth_token');
 
    if(auth_token){
      return true;
    }
    return false;
  }

  constructor() { }
}
