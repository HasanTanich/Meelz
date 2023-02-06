import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LoginComponent } from '../login/login.component';
import { DataService } from "../services/data.service";

export interface Card {
  id: number;
  title: string;
  style: string;
  text: string;
  rating: number;
  liked: boolean;
}

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})

export class ChefComponent implements OnInit {

  isActive: boolean;
  searchText: string;

  reverseRating: boolean;
  reverseStyle: boolean;
  reverseName: boolean;

  condition = false;
  next = true;
  previous = false;

  allChefs: Observable<any>;

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // dataSource: MatTableDataSource<Card>;

  constructor(public dialog: MatDialog, private changeDetectorRef: ChangeDetectorRef, private router: Router,
    private authService: AuthService, private dataService: DataService) { }

  ngOnInit(): void {
    this.condition = this.authService.isLoggedIn(); // return true is user is logged in
    this.allChefs = this.dataService.getAllChefs();  // get all chefs from database

    // this.allChefs.subscribe(chef => {
    //   this.dataSource = new MatTableDataSource<Card>(chef);
    //   this.dataSource.paginator = this.paginator;
    //   this.allChefs = this.dataSource.connect();
    // });

    this.changeDetectorRef.detectChanges();
    window.scroll(0, 0);

  }
  ngOnDestroy() {
    // if (this.dataSource) {
    //   this.dataSource.disconnect();
    // }
  }
  onIsActive(value: boolean) {
    this.isActive = value;
  }
  onIsActiveChanged(value: any) {
    this.isActive = value;
    this.searchText = value.text;
  }
  onSortRating(value: boolean) {
    this.reverseRating = value;
  }
  onSortStyle(value: boolean) {
    this.reverseStyle = value;
  }
  onSortName(value: boolean) {
    this.reverseName = value;
  }
  likePost(i) {
    if (!this.authService.isLoggedIn()) {
      this.dialog.open(LoginComponent);
    }
  }
}
