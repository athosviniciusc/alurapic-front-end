import { Component, EventEmitter, Input, OnDestroy, Output } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
    selector: 'ap-search',
    templateUrl: './search.component.html'
})


export class SearchComponent implements  OnDestroy{
    @Output() onType: EventEmitter<string> = new EventEmitter<string>();
    @Input() value: string = '';

    filter: any = '';
    debounch: Subject<string> = new Subject<string>();

    filtrar(event : any){
        this.debounch.next(event.target.value);
        this.debounch
        .pipe(debounceTime(300))
        .subscribe( filter => 
          this.onType.emit(filter)
        )
      }
      ngOnDestroy(): void {
        this.debounch.unsubscribe();
      }

}