import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundsComponent } from '../erros/not-founds/not-founds.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoListResolver } from './photo-list/photo-list.resolver';


const routes: Routes = [
    {   path: '',  
        component: PhotoListComponent,
        resolve: {photos:  PhotoListResolver}
    },
    { path: '**',  component: NotFoundsComponent},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
}) 
export class PhotosRoutingModule { }