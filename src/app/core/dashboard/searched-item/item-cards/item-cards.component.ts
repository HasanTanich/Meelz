import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/core/login/login.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { DataService } from 'src/app/core/services/data.service';
@Component({
  selector: 'app-item-cards',
  templateUrl: './item-cards.component.html',
  styleUrls: ['./item-cards.component.css']
})
export class ItemCardsComponent implements OnInit {

  // boolean values which become true depending on the tab/page the user searches
  menuPage;
  mealKitPage;
  masterClassPage;
  chefTablePage;
  chefStorePage;
  chefsPage;

  // dynamic names of tables' attributes
  data;
  parentAttribute;
  cardTitle;
  cardImage;
  cardPrice;
  cardDescription;
  cardTags;
  tabPage: string;

  // loading is true until subscription data is loaded
  loading = true;
  // temp variable
  amount: number = 0;
  // to check if search results array is empty
  array;

  // filters tab boolean values to emit true when a filter tab is clicked
  reverseRating: boolean;// not sure if needed or not
  reversePrice: boolean;// not sure if needed or not
  reverseStyle: boolean; // not sure if needed or not
  reverseName: boolean;// not sure if needed or not
  reverseFamily: boolean;// not sure if needed or not

  // if rating or price fields are filled, these will be true
  rating: boolean;
  price: boolean;

  start = 0;
  end = 10;

  constructor(private dataService: DataService,
    private router: Router,
    private authService: AuthService,
    public dialog: MatDialog) {

    // getting state data from calling route
    this.parentAttribute = this.router.getCurrentNavigation().extras.state.parentAttribute;
    this.menuPage = this.router.getCurrentNavigation().extras.state.menuPage;
    this.mealKitPage = this.router.getCurrentNavigation().extras.state.mealKitPage;
    this.masterClassPage = this.router.getCurrentNavigation().extras.state.masterClassPage;
    this.chefTablePage = this.router.getCurrentNavigation().extras.state.chefTablePage;
    this.chefStorePage = this.router.getCurrentNavigation().extras.state.chefStorePage;
    this.chefsPage = this.router.getCurrentNavigation().extras.state.chefsPage;
    this.cardTitle = this.router.getCurrentNavigation().extras.state.title;
    this.cardImage = this.router.getCurrentNavigation().extras.state.image;
    this.cardDescription = this.router.getCurrentNavigation().extras.state.description;
    this.cardTags = this.router.getCurrentNavigation().extras.state.tags;
    this.tabPage = this.router.getCurrentNavigation().extras.state.tabPage;
    this.rating = this.router.getCurrentNavigation().extras.state.rating;
    this.price = this.router.getCurrentNavigation().extras.state.price;
  }

  ngOnInit(): void {
    this.data = this.dataService.getSearchResult();
    this.data.subscribe(a => {
      this.array = a;
      this.loading = false;
      console.log(a);
    });
    console.log(this.rating);
    console.log(this.price);
  }

  likePost(card) {
    if (!this.authService.isLoggedIn()) {
      this.dialog.open(LoginComponent);
    }
    else {
      if (card.liked) {
        this.dataService.UnLikeCard(card, this.tabPage);
        card.likes--;
        card.liked = false;
      }
      else {
        this.dataService.LikeCard(card, this.tabPage);
        card.likes++;
        card.liked = true;
      }
    }
  }

  // onSortRating(value: boolean) {
  //   this.reverseRating = value;
  // }
  // onSortStyle(value: boolean) {
  //   this.reverseStyle = value;
  // }
  // onSortFamily(value: boolean) {
  //   this.reverseFamily = value;
  // }
  // onSortPrice(value: boolean) {
  //   this.reversePrice = value;
  // }
  // onSortName(value: boolean) {
  //   this.reverseName = value;
  // }

  addAmount() {
    this.amount++;
  }
  removeAmount() {
    this.amount--;
  }

  cropString(str: string) {
    if (str.length > 30 && window.innerWidth > 425)
      return str.slice(0, 26) + "...";
    return str.slice(0, 16) + "...";
  }

}
