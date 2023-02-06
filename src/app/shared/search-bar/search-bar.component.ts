import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {


  @Output() isActive = new EventEmitter<any>(false);
  searchText: string = '';
  @Input() pageItems: string;

  constructor() { }

  ngOnInit(): void {
  }

  onActiveChange() {
    if (this.searchText != '') {
      this.isActive.emit({ isActive: true, text: this.searchText });
    }
  }
  onChange() {
    this.isActive.emit(false);
  }

}
