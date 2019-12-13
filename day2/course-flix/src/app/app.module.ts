import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TemplateComponent } from './template/template.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { NameFormatPipe } from './pipes/name-format.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { FilterUsersPipe } from './pipes/filter-users.pipe';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { OuterComponent } from './outer/outer.component';
import { InnerComponent } from './inner/inner.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ModelDrivenComponent } from './forms/model-driven/model-driven.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsComponent } from './forms/forms.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { DeactivateComponent } from './deactivate/deactivate.component';
import { PhoneFormatDirective } from './phone-format.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { RatingComponent } from './rating/rating.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './JwtInterceptor';
import { ErrorInterceptor } from './ErrorInterceptor';
import { HttpClientErrorInterceptor } from './HttpClientErrorInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TemplateComponent,
    TwoWayComponent,
    SortPipe,
    FilterUsersPipe,
    CoursesComponent,
    CourseComponent,
    OuterComponent,
    InnerComponent,
    ViewchildComponent,
    TemplateDrivenComponent,
    ModelDrivenComponent,
    NotFoundComponent,
    NavbarComponent,
    FormsComponent,
    CourseDetailsComponent,
    PhoneFormatDirective,
    CustomDirectiveComponent,
    RatingComponent,
    LoginComponent,
    NameFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DeactivateComponent,
    { provide: HTTP_INTERCEPTORS, useClass: HttpClientErrorInterceptor, multi:true}
    //{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true },
    //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
