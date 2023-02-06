import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService, MasterClass1 } from '../../core/services/data.service';
import { LoginComponent } from "../../core/login/login.component";
import { AuthService } from "../../core/services/auth.service";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-card-two',
  templateUrl: './card-two.component.html',
  styleUrls: ['./card-two.component.css']
})
export class CardTwoComponent implements OnInit, OnDestroy {

  @Input() cards: any;
  @Input() dashboard: boolean;
  @Input() title: string;
  @Input() searchText: string;
  @Input() isActive: string;
  @Input() reverseRating: string;
  @Input() reverseName: string;
  @Input() reversePrice: string;
  start: number = 0;
  end: number = 100;
  @Input() chefsPage: boolean;

  pagLoad = false;

  dataSource: MatTableDataSource<MasterClass1>;
  @Input() urlRoute: string;

  constructor(private authService: AuthService, private dialog: MatDialog, private dataService: DataService) { }

  ngOnInit(): void {
    this.cards.subscribe(mc => {
      this.dataSource = new MatTableDataSource<MasterClass1>(mc);
      this.cards = this.dataSource.connect();
    });
  }

  like(event, card) {
    event.preventDefault();
    event.stopPropagation();
    console.log(card);
    if (!this.authService.isLoggedIn()) {
      this.dialog.open(LoginComponent);
    }
    else {
      if (card.liked == true) {
        this.dataService.UnLikeMasterClass(card);
        card.likes--;
        card.liked = false;
      } else {
        let x = this.dataService.LikeMasterClass(card);
        card.likes++;
        card.liked = true;
      }
    }
  }

  addItem(newItem: string) {
    this.pagLoad = true;
  }
  ngOnDestroy(): void {
    this.cards.unsubscribe();
  }


}
