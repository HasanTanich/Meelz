import { Component, Input, OnInit } from '@angular/core';
import { LoginComponent } from "../../core/login/login.component";
import { AuthService } from "../../core/services/auth.service";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-three',
  templateUrl: './card-three.component.html',
  styleUrls: ['./card-three.component.css']
})
export class CardThreeComponent implements OnInit {

  @Input() data: any;
  @Input() cardPrice: boolean;
  @Input() cardDesc: boolean;
  @Input() cardLevel: boolean;
  @Input() cardBtn: boolean;
  @Input() reverseRating: boolean;
  @Input() reversePrice: boolean;
  @Input() reverseName: boolean;
  @Input() meelzScreen: boolean;
  @Input() recipeScreen: boolean;
  @Input() masterClassScreen: boolean;
  @Input() chefTableScreen: boolean;
  @Input() blogScreen: boolean;
  @Input() chefStoreScreen: boolean;
  start: number = 0;
  end: number = 6;

  constructor(private authService: AuthService, private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.data);
  }
  likePost(i) {
    if (!this.authService.isLoggedIn()) {
      this.dialog.open(LoginComponent);
    }
    else {
      if (this.data[i].liked) {
        this.data[i].liked = false;
      } else {
        this.data[i].liked = true;
      }
    }
  }

  decreaseAmountMeelz(n: any, i: number) {
    const x = n.id;
    this.data[x].amount -= 1;
  }

  increaseAmountMeelz(n: any, i: number) {
    const x = n.id;
    this.data[x].amount += 1;
  }
  expandLoop() {
    this.end = this.end + 3;
  }
}
