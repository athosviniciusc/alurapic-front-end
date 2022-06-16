import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrosModule } from './erros/erros.module';
import { PhotosModules } from './photos/photos.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotosModules,
    ErrosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
