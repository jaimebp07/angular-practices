import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BeginComponent } from './COMPONENTES/begin/begin.component';
import { BeginningComponent } from './COMPONENTES/beginning/beginning.component';
import { AddComponent } from './COMPONENTES/add/add.component';
import { ModifyComponent } from './COMPONENTES/modify/modify.component';

@NgModule({
  declarations: [
    AppComponent,
    BeginComponent,
    BeginningComponent,
    AddComponent,
    ModifyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
