import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { DataService } from "../../../services/data.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-chef-details-tab-masterclasses',
  templateUrl: './chef-details-tab-masterclasses.component.html',
  styleUrls: ['./chef-details-tab-masterclasses.component.css']
})
export class ChefDetailsTabMasterclassesComponent implements OnInit {
  meelz;
  meelsobs: Observable<any> = this.dataService.getAllMeelz();

  chefMasterClassesRating: boolean;
  chefMasterClassesPrice: boolean;

  id;
  allChefsData;
  allChefsDataArray: [];
  loaded = false;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.route.parent.params.subscribe((params: Params) => {
      this.id = params.id;
    });
    this.allChefsData = this.dataService.getAllMasterClasses1();
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

  onChefMasterClasseszSortRating(value: boolean) {
    this.chefMasterClassesRating = value;
  }
  onChefMasterClasseszSortPrice(value: boolean) {
    this.chefMasterClassesPrice = value;
  }

}
