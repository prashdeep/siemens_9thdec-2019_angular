import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TemplateComponent } from './template/template.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { NameFormatPipe } from './pipes/name-format.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { FilterUsersPipe } from './pipes/filter-users.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TemplateComponent,
    TwoWayComponent,
    NameFormatPipe,
    SortPipe,
    FilterUsersPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
