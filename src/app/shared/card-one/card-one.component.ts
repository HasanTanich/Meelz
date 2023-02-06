import { Component, HostListener, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { LoginComponent } from 'src/app/core/login/login.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { Chef, DataService } from "../../core/services/data.service";

@Component({
  selector: 'app-card-one',
  templateUrl: './card-one.component.html',
  styleUrls: ['./card-one.component.css']
})
export class CardOneComponent implements OnInit, OnDestroy {

  @Input() cards: any;

  @Input() dashboardMenu: boolean;
  @Input() dashboardMenu1: boolean;

  @Input() dashboardChefTable: boolean;
  @Input() dashboardChefs: boolean;
  @Input() chefsPage: boolean;
  @Input() menuPage: boolean;
  @Input() chefTablePage: boolean;

  @Input() cardTitle: string;
  @Input() cardImage: string;
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

  next = true;
  previous = false;

  public innerWidth: any;
  mobileScreen = false

  dataSource: MatTableDataSource<Chef>;

  constructor(private authService: AuthService, public dialog: MatDialog, private dataService: DataService) { }

  ngOnInit(): void {
    this.cards.subscribe(chef => {
      this.dataSource = new MatTableDataSource<Chef>(chef);
      this.cards = this.dataSource.connect();
    });
    this.innerWidth = window.innerWidth;
  }

  likePost(card) {
    if (!this.authService.isLoggedIn()) {
      this.dialog.open(LoginComponent);
    }
    else {
      if (card.liked) {
        this.dataService.UnLikeChef(card);
        card.likes--;
        card.liked = false;
      }
      else {
        this.dataService.LikeChef(card);
        card.likes++;
        card.liked = true;
      }
    }
  }
  cropString(str: string) {
    if (str.length > 30 && this.innerWidth > 425)
      return str.slice(0, 26) + "...";
    return str.slice(0, 16) + "...";
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    let broj = 415;
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < broj)
      this.mobileScreen = true;
    else
      this.mobileScreen = false;
  }

  ngOnDestroy(): void {
    // this.cards.unsubscribe();
  }
}
