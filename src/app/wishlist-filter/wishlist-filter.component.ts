import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
];

@Component({
  selector: 'wishlist-filter',
  templateUrl: './wishlist-filter.component.html',
  styleUrl: './wishlist-filter.component.css'
})
export class WishlistFilterComponent implements OnInit {
  @Input() filter : any;
  @Output() filterChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit() : void {
    this.updateFilter("0")
  }

  
  listFilter : any = '0';

  updateFilter(value : any){
    this.filter = filters[value]
    this.filterChange.emit(this.filter);
  }
}
