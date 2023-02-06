import {Component, Input, OnInit} from '@angular/core';
import {ChefTable} from "../../../../shared/models/cheftable.model";

@Component({
  selector: 'app-chef-table-details-required',
  templateUrl: './chef-table-details-required.component.html',
  styleUrls: ['./chef-table-details-required.component.css']
})
export class ChefTableDetailsRequiredComponent implements OnInit {
  @Input() chefData;
  chefTableArray: ChefTable;

  constructor() { }

  ngOnInit(): void {
    this.chefData.subscribe(data => {
      this.chefTableArray = data;
    });
  }

}
