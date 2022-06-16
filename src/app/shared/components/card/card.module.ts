import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CardComponent } from "./card.component";

@NgModule({
    declarations: [ CardComponent],
    exports: [ CardComponent],
    imports: [
        HttpClientModule,
        CommonModule,    
      ],

})

export class CardModule{}