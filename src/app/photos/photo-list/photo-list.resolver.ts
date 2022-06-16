import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Photos } from "../model/photos.model";
import { PhotoService } from "../services/photos.services"

@Injectable({
    providedIn: 'root'
  })
  
export class PhotoListResolver implements Resolve<Observable<Photos[]>> {

    constructor( private photolistService: PhotoService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photos[]> {
    
        const userName = route.params['userName'];

        return this.photolistService.getPhotosPaginator(userName, 1);
        
    }

}