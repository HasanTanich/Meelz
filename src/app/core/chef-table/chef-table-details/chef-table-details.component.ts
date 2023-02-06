import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {DataService} from "../../services/data.service";
import {Observable} from "rxjs";
import {ChefTable} from "../../../shared/models/cheftable.model";

@Component({
  selector: 'app-chef-table-details',
  templateUrl: './chef-table-details.component.html',
  styleUrls: ['./chef-table-details.component.css']
})
export class ChefTableDetailsComponent implements OnInit {
  chefTableData;
  id;
  chefTableArray: ChefTable;


  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.chefTableData = this.dataService.getSingleChefTable(params.id);
    });
    this.chefTableData.subscribe(data => {
      this.chefTableArray = data;
    });
  }
}
