import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-top-paginator',
  templateUrl: './top-paginator.component.html',
  styleUrls: ['./top-paginator.component.css']
})
export class TopPaginatorComponent implements OnInit,OnDestroy {

  @Input() pageSize: number;
  @Input() cards: any;
  @Input() dataSource: any;
  // @Input() dataSource: MatTableDataSource<any>;

  @Input() title: string;
  @Input() chefsPage: string;
  @ViewChild('paginator') paginator: MatPaginator;
  @Input() whiteBackground: boolean;
  @Output() newItemEvent = new EventEmitter<string>();
  next = true;
  previous = false;
  @Input() urlRoute: string;
  @Input() onlySeeAll:false;
  @Input() onlySeeNone:false;
  nesto:Subscription ;
  constructor() { }
  ngOnDestroy(): void {
    // this.nesto.unsubscribe();
  }

  ngAfterViewInit() {
    
    // setTimeout(()=>{
    //   this.nesto=this.cards.subscribe(mc => {
    //       this.dataSource.paginator = this.paginator;//maximum call stack size exceeded 
    //   });
    // }, 700);
    setTimeout(()=>{
      this.cards.subscribe(mc => {
          this.dataSource.paginator = this.paginator;//maximum call stack size exceeded 
      });
   }, 2000);
    }
  ngOnInit(): void {
    this.addNewItem("true");
  }
  NextScreen() {
    this.dataSource.paginator.nextPage();
    this.previous = true;
    if (!this.dataSource.paginator.hasNextPage())
      this.next = false;
  }
  PreviousScreen() {
    this.dataSource.paginator.previousPage();
    this.next = true;
    if (!this.dataSource.paginator.hasPreviousPage())
      this.previous = false;
  }
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
