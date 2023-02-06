import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-chef-table',
  templateUrl: './chef-table.component.html',
  styleUrls: ['./chef-table.component.css']
})
export class ChefTableComponent implements OnInit {
  isActive: boolean;
  searchText: string;
  reverseRating: boolean;
  reverseDuration: boolean;
  reverseSeats: boolean;
  reversePrice: boolean;

  condition = false;
  next = true;
  previous = false;

  allChefTable: Observable<any>;
  allChefTableArr;

  constructor(private authService: AuthService, public dialog: MatDialog, private dataService: DataService) { }

  ngOnInit(): void {
    this.condition = this.authService.isLoggedIn(); // return true is user is logged in
    this.allChefTable = this.dataService.getAllChefTables();  // get all chef tables from database

    this.allChefTable.subscribe(chef => {
      console.log(chef);
      this.allChefTableArr = chef;
      // this.dataSource = new MatTableDataSource<Card>(this.allChefTableArr);
      // this.dataSource.paginator = this.paginator;
      // this.allChefTable = this.dataSource.connect();
    });

    // this.changeDetectorRef.detectChanges();
    window.scroll(0, 0);
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
  onSortDuration(value: boolean) {
    this.reverseDuration = value;
  }
  onSortSeats(value: boolean) {
    this.reverseSeats = value;
  }
  onSortPrice(value: boolean) {
    this.reversePrice = value;
  }
}
