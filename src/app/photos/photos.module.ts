import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { PhotosRoutingModule } from "./photos-routing.module";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PhotoListModules } from "./photo-list/photo-list.module";
import { PhotoModules } from "./photo/photoModule";
import { PhotoListResolver } from "./photo-list/photo-list.resolver";
import { PhotoListComponent } from "./photo-list/photo-list.component";

@NgModule({
    imports: [
        PhotoListModules,
        PhotoModules,
        PhotosRoutingModule,
    ],
})
export class PhotosModules{}