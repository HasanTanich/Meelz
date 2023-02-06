import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-master-classes',
  templateUrl: './master-classes.component.html',
  styleUrls: ['./master-classes.component.css']
})
export class MasterClassesComponent implements OnInit {

  masterClassObs: Observable<any> = this.dataService.getAllMasterClasses1();

  start = 0;
  end = 100;

  isActive: boolean;
  searchText: string;

  reverseRating: boolean;
  reverseStyle: boolean;
  reverseName: boolean;
  reversePrice: boolean;

  condition = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private changeDetectorRef: ChangeDetectorRef,
    private authService: AuthService, public dataService: DataService) { }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
    this.condition = this.authService.isLoggedIn();
    this.masterClassObs = this.dataService.getAllMasterClasses1();
    window.scroll(0, 0);
  }
  ngOnDestroy() {
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
  onIsActive(value: boolean) {
    this.isActive = value;
  }
  onIsActiveChanged(value: any) {
    this.isActive = value;
    this.searchText = value.text;
  }
  GetPaginatedData(pag) {
    this.masterClassObs = this.dataService.getAllMasterClasses1(pag);
  }
}
