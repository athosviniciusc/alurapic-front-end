import { Pipe, PipeTransform } from "@angular/core";
import { Photos } from "../model/photos.model";

@Pipe({ name: 'filterByDescription'})

export class FilterByDescription implements PipeTransform{
    newPhoto: Photos[]= [];
    transform(photos: Photos[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery.trim().toLowerCase();

        if(descriptionQuery) {
            photos.filter(photo => {
              if(photo.description.toLowerCase().includes(descriptionQuery)) {
                  this.newPhoto.push(photo)
              }
            });
            return this.newPhoto
            
        } else {
            this.newPhoto = []
            return photos;
        }


    }

}