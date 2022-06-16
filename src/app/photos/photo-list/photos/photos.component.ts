import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photos } from '../../model/photos.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {
  
  @Input() photos: Photos[] = [];
  rows: any[] = [];

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges) {
      if(changes['photos']) {
          this.rows = this.groupColuns(this.photos);
      }
  }

  groupColuns(photos: Photos[]){
    const newRows = [];

    for(let index = 0; index < this.photos.length; index+=3){
      newRows.push(photos.slice(index, index + 3 ));
    }
    return newRows;
  }
}
