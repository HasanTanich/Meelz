import {Component, Input, OnInit} from '@angular/core';
import {MasterClass} from "../../../../shared/models/masterclass.model";
import {ChefTable} from "../../../../shared/models/cheftable.model";

@Component({
  selector: 'app-chef-table-details-dates',
  templateUrl: './chef-table-details-dates.component.html',
  styleUrls: ['./chef-table-details-dates.component.css']
})
export class ChefTableDetailsDatesComponent implements OnInit {
  @Input() chefTable;
  chefTableArray: ChefTable;

  constructor() { }

  ngOnInit(): void {
    this.chefTable.subscribe(data => {
      this.chefTableArray = data;
    })
  }
}
