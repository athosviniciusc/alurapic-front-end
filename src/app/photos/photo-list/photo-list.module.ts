import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhotoListComponent } from "./photo-list.component";
import { PhotosComponent } from "./photos/photos.component";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { FilterByDescription } from "./filter-by-description.pipe";
import { PhotoModules } from "../photo/photoModule";
import { CardModule } from "src/app/shared/components/card/card.module";
import { SearchComponent } from "./search/search.component";
import { DarkenOnHoverDirectiveModule } from "src/app/shared/directives/darken-on-hover/darken-on-hover.module";


@NgModule({
    declarations: [
        PhotoListComponent, 
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription,
        SearchComponent
    ],
    
    imports: [
      HttpClientModule,
      CommonModule,
      PhotoModules,
      CardModule,
      DarkenOnHoverDirectiveModule      
    ],

})
export class PhotoListModules{}