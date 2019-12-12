import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ModelDrivenComponent } from './forms/model-driven/model-driven.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsComponent } from './forms/forms.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AuthService } from './auth.service';
import { DeactivateComponent } from './deactivate/deactivate.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { CompOneComponent } from './admin/comp-one/comp-one.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'courses',
    pathMatch:'full'
  },
  {
    path:'courses',
    component:CoursesComponent
  },
  {
    path:'courses/:id',
    component:CourseDetailsComponent,
    canActivate:[AuthService]

  },
  {
    path:'forms',
    component:FormsComponent,
    children:[
      {
        path:'',
        redirectTo:'template',
        pathMatch:'full'
      },
      {
        path:'model',
        component:ModelDrivenComponent
      },
      {
        path:'template',
        component:TemplateDrivenComponent,
        canDeactivate:[DeactivateComponent]
      },
    ]
  },
  {
    path:'custom-directive',
    component:CustomDirectiveComponent
  },
  {
    path:'admin',
    component:CompOneComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
