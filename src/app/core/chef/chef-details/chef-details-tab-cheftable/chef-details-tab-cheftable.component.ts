import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { DataService } from "../../../services/data.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-chef-details-tab-cheftable',
  templateUrl: './chef-details-tab-cheftable.component.html',
  styleUrls: ['./chef-details-tab-cheftable.component.css']
})
export class ChefDetailsTabCheftableComponent implements OnInit {
  meelz;
  meelsobs: Observable<any> = this.dataService.getAllMeelz();

  chefTableRating: boolean;
  chefTablePrice: boolean;
  id;
  allChefsData;
  allChefsDataArray: [];
  loaded = false;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.route.parent.params.subscribe((params: Params) => {
      this.id = params.id;
    });
    this.allChefsData = this.dataService.getAllChefTables();
    this.allChefsData = this.allChefsData.toPromise();
    console.log(this.allChefsData)
    await this.allChefsData.then(data => {
      console.log(data);
      this.allChefsDataArray = data.filter(data => {
        if (data.chefID == this.id){
          console.log('prosao uslov')
          return data.chefID === this.id;
        }
      this.loaded = true;
      });
      console.log(this.allChefsDataArray)
    })
    this.meelsobs.subscribe(meel => {
      this.meelz = meel;
    });
  }

  onChefTableSortRating(value: boolean) {
    this.chefTableRating = value;
  }
  onChefTableSortPrice(value: boolean) {
    this.chefTablePrice = value;
  }

}
