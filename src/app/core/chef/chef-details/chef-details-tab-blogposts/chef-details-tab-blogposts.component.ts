import { Component, OnInit } from '@angular/core';
import { BlogPosts } from "../chef-details.component";
import { Observable } from "rxjs";
import { DataService } from "../../../services/data.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-chef-details-tab-blogposts',
  templateUrl: './chef-details-tab-blogposts.component.html',
  styleUrls: ['./chef-details-tab-blogposts.component.css']
})
export class ChefDetailsTabBlogpostsComponent implements OnInit {
  meelz;
  meelsobs: Observable<any> = this.dataService.getAllMeelz();

  chefBlogsPrice: boolean;
  chefBlogsRating: boolean;

  id;
  allChefsData;
  allChefsDataArray: [];
  loaded = false;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.route.parent.params.subscribe((params: Params) => {
      this.id = params.id;
    });
    this.allChefsData = this.dataService.getAllBlogs();
    this.allChefsData = this.allChefsData.toPromise();
    console.log(this.allChefsData)
    await this.allChefsData.then(data => {
      console.log(data);
      this.allChefsDataArray = data.filter(data => {
        if (data.chefID == this.id) {
          console.log('prosao uslov')
          return data.chefID === this.id;
        }
      this.loaded = true;
      });
      console.log(this.allChefsDataArray)
    })
  }

  onChefBlogsSortRating(value: boolean) {
    this.chefBlogsRating = value;
  }
  onChefBlogsSortPrice(value: boolean) {
    this.chefBlogsPrice = value;
  }

}
