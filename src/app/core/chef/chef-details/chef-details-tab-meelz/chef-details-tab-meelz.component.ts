import { Component, Input, OnInit } from '@angular/core';
import { BlogPosts } from "../chef-details.component";
import { Observable } from "rxjs";
import { DataService } from "../../../services/data.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-chef-details-tab-meelz',
  templateUrl: './chef-details-tab-meelz.component.html',
  styleUrls: ['./chef-details-tab-meelz.component.css']
})
export class ChefDetailsTabMeelzComponent implements OnInit {
  meelz;
  meelsobs: Observable<any> = this.dataService.getAllMeelz();

  chefMeelzRating: boolean;
  chefMeelzPrice: boolean;
  id;
  allChefsData;
  allChefsDataArray: [];
  loaded = false;

  constructor(private dataService: DataService, private route:ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.route.parent.params.subscribe((params: Params) => {
      this.id = params.id;
    });
    this.allChefsData = this.dataService.getAllMeelz();
    this.allChefsData = this.allChefsData.toPromise();
    console.log(this.allChefsData)
    await this.allChefsData.then(data => {
      console.log(data);
      this.allChefsDataArray = data.filter(data => {
        if (data.chef == this.id){
          console.log('prosao uslov')
          return data.chef === this.id;
        }
      this.loaded = true;
      });
      console.log(this.allChefsDataArray)
    })
    console.log(this.allChefsDataArray)
    this.meelsobs.subscribe(meel => {
      this.meelz = meel;
    });


  }

  onChefMeelzSortPrice(value: boolean) {
    this.chefMeelzPrice = value;
  }
  onChefMeelzSortRating(value: boolean) {
    this.chefMeelzRating = value;
  }

}
