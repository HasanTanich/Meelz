import {Component, HostListener, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { getMatIconFailedToSanitizeUrlError } from '@angular/material/icon';
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { LoginComponent } from 'src/app/core/login/login.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { Chef, DataService } from "../../core/services/data.service";

@Component({
  selector: 'app-chef-table-card',
  templateUrl: './chef-table-card.component.html',
  styleUrls: ['./chef-table-card.component.css']
})
export class ChefTableCardComponent implements OnInit, OnDestroy {

  @ViewChild('paginatorChefs') paginator: MatPaginator;

  @Input() cards: any;
  cardsArr;

  @Input() dashboardMenu: boolean;
  @Input() dashboardMenu1: boolean;

  @Input() dashboardChefTable: boolean;
  @Input() dashboardChefs: boolean;
  @Input() chefsPage: boolean;
  @Input() menuPage: boolean;
  @Input() chefTablePage: boolean;

  @Input() cardTitle: string;
  @Input() cardImage: string;
  @Input() cardSeats: string;
  @Input() cardPrice: string;
  @Input() cardDescription: string;
  @Input() title: string;
  @Input() attribute: string;

  @Input() reverseName: string;
  @Input() reverseRating: string;
  @Input() reversePrice: string;
  @Input() reverseFamily: string;
  @Input() reverseDuration: string;
  @Input() reverseSeats: string;
  @Input() searchText: string;
  @Input() isActive: string;

  @Input() pageSizeNumber: number;
  @Input() urlRoute: string;

  start = 0;
  end = 100;
  chefs;

  // temp variable
  amount: number = 0;

  pageSize = 4;
  next = true;
  previous = false;
  dataSource: MatTableDataSource<Chef>;

  public innerWidth: any;
  mobileScreen = false

  constructor(private authService: AuthService, public dialog: MatDialog, private dataService : DataService) { }

  ngOnInit(): void {
    this.cards.subscribe(chef => {
      this.dataSource = new MatTableDataSource<Chef>(chef);
      this.cards = this.dataSource.connect();
      this.cardsArr = chef;
    });
    this.innerWidth = window.innerWidth;
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
    if (!this.dataSource.paginator.hasPreviousPage()) {
      this.previous = false;
    }
  }
  likePost(card) {
    if (!this.authService.isLoggedIn()) {
      this.dialog.open(LoginComponent);
    }
    else {
      if (card.liked) {
        this.dataService.UnLikeChefTable(card);
        card.likes--;
        card.liked = false;
      }
      else {
        this.dataService.LikeChefTable(card);
        card.likes++;
        card.liked = true;
      }
    }
  }
  addAmount() {
    this.amount++;
  }
  removeAmount() {
    this.amount--;
  }
  cropString(str: string) {
    if (str.length > 30 && this.innerWidth > 425)
      return str.slice(0, 26) + "...";
    return str.slice(0, 16) + "...";
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    let broj = 415;
    console.log(this.innerWidth)
    if (this.innerWidth < broj)
      this.mobileScreen = true;
    else
      this.mobileScreen = false;
  }
  ngOnDestroy(): void {
    this.cards.unsubscribe();
  }
}
