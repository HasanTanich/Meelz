import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { LoginComponent } from '../../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { Observable, Subscribable } from "rxjs";
import {Chef} from "../../../shared/models/chef.model";

export interface ChefStore {
  id: number;
  liked: number;
  amount: number;
  style: string;
  rating: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  seafood: boolean;
  meat: boolean;
  groceries: boolean;
  chocolate: boolean;
  tableware: boolean;
  kitchen: boolean;
  sauces: boolean;
  vegi: boolean;
}

export interface BlogPosts {
  id: number;
  liked: number;
  rating: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Recepie {
  id: number;
  liked: number;
  rating: number;
  amount: number;
  title: string;
  imageUrl: string;
  price: number;
}

interface OptionSelect {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-chef-details',
  templateUrl: './chef-details.component.html',
  styleUrls: ['./chef-details.component.css']
})
export class ChefDetailsComponent implements OnInit {

  pythonUser;

  reverseAll = false;
  dummyData: Array<any>;


  options: OptionSelect[] = [
    { value: 'popularity-0', viewValue: 'Popularity' },
    { value: 'date-1', viewValue: 'Date' },
    { value: 'price-2', viewValue: 'Price' }
  ];
  selectedOption = this.options[0].value;

  start: number = 0;
  end: number = 6;

  active: number;
  chefArray: Chef;



  constructor(private route: ActivatedRoute, private dataService: DataService, private authService: AuthService,
    private dialog: MatDialog, private router: Router) { }

  chefDetails;
  @Input() index: number;
  id;

  meelz;
  meelsobs : Observable<any> = this.dataService.getAllMeelz(); // get meelz from server



  ngOnInit(): void {
    this.router.navigate(['meelz'], { relativeTo: this.route });
    this.reverseAll = true;
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.chefDetails = this.dataService.getChefs(params.id);
      console.log(this.chefDetails)
    });
    this.chefDetails.subscribe(data => {
      this.chefArray = data;
      console.log(this.chefArray.chefName);
    })
    console.log(this.id)
    window.scroll(0,0);
  }

  likePost(i) {
    if (!this.authService.isLoggedIn()) {
      this.dialog.open(LoginComponent);
    }
    else {
      this.dummyData[i].liked = !this.dummyData[i].liked;
    }

  }

  // increaseAmount(n, id) {
  //   console.log(n);
  //   console.log(id);
  //   const x = n.id;
  //   this.allStoreItems[x].amount += 1;
  // }
  // increaseAmountMeelz(n, id) {
  //   console.log(n);
  //   console.log(id);
  //   const x = n.id;
  //   this.meelz[x].amount += 1;
  // }
  // increaseAmountRecepie(n, id) {
  //   console.log(n);
  //   console.log(id);
  //   const x = n.id;
  //   this.recepieData[x].amount += 1;
  // }
  // decreaseAmount(n, id) {
  //   console.log(n);
  //   console.log(id);
  //   const x = n.id;
  //   this.allStoreItems[x].amount -= 1;
  // }
  // decreaseAmountMeelz(n, id) {
  //   console.log(n);
  //   console.log(id);
  //   const x = n.id;
  //   this.meelz[x].amount -= 1;
  // }
  // decreaseAmountRecepie(n, id) {
  //   console.log(n);
  //   console.log(id);
  //   const x = n.id;
  //   this.recepieData[x].amount -= 1;
  // }
}
