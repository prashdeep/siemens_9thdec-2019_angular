import { CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { TemplateDrivenComponent } from '../forms/template-driven/template-driven.component';


export class DeactivateComponent implements CanDeactivate<TemplateDrivenComponent> {
  canDeactivate(component: TemplateDrivenComponent, 
                currentRoute: ActivatedRouteSnapshot, 
                currentState: RouterStateSnapshot, 
                nextState?: RouterStateSnapshot):   boolean {
                  
                return confirm("Are you sure, you want to exit from this form ? ");
  }


}
