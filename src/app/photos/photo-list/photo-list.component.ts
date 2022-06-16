import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Photos } from '../model/photos.model';
import { PhotoService } from '../services/photos.services';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: Photos[] = [];
  newPhotos: Photos[] = [];
  filter: any = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(
    private activeRouter: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) { }


  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params['userName'];
    this.photos= this.activeRouter.snapshot.data['photos'];
  }

  load(){
    this.photoService.getPhotosPaginator(this.userName, ++this.currentPage)
    .subscribe(photos => {
      this.filter = '';
      this.photos = this.photos.concat(photos);
      if(photos.length == 0) this.hasMore = false;
    })
  }
}
