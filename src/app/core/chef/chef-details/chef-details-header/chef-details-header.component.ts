import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Chef} from "../../../../shared/models/chef.model";
import {ActivatedRoute, Params} from "@angular/router";
import {DataService} from "../../../services/data.service";
import {MealKit} from "../../../../shared/models/mealkit.model";

@Component({
  selector: 'app-chef-details-header',
  templateUrl: './chef-details-header.component.html',
  styleUrls: ['./chef-details-header.component.css']
})
export class ChefDetailsHeaderComponent implements OnInit {

  chefData;
  chefHeaderData: Chef;
  @Input() id;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    console.log(this.id + 'hfashfhs')
    // this.chefHeaderData = this.dataService.getSingleChefbyId(this.id);
    // console.log(this.chefHeaderData)
    this.dataService.getSingleChefbyId(this.id).subscribe(data => {
      this.chefHeaderData = data;
      console.log(this.chefHeaderData)
    })
    this.route.params.subscribe((params: Params) => {
      this.chefData = this.dataService.getSingleChefbyId(this.id);
    });
    this.chefData.subscribe(data => {
      this.chefHeaderData = data;
      console.log(this.chefHeaderData.imageURL);
    })
  }

}
