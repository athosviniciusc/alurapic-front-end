import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosModules } from './photos/photos.module';

const routes: Routes = [
  
  { path: '', redirectTo: 'photos', pathMatch: 'full'},
  { path: 'photos/:userName', loadChildren: () => PhotosModules},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
