import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './Components/basic/basic.component';
import { FormComponent } from './Components/form/form.component';
import { HeadderComponent } from './Components/headder/headder.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    FormComponent,
    HeadderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
