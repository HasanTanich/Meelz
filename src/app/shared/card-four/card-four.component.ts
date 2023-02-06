import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TrendingMenu } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-card-four',
  templateUrl: './card-four.component.html',
  styleUrls: ['./card-four.component.css']
})
export class CardFourComponent implements OnInit {

  @Input() cards: any;
  @Input() dashboard: boolean;
  @Input() title: string;
  @Input() urlRoute:string;


  constructor() { }

  dataSource: MatTableDataSource<TrendingMenu>;

  ngOnInit(): void {
    this.cards.subscribe(mc => {
      this.dataSource = new MatTableDataSource<TrendingMenu>(mc);
      this.cards = this.dataSource.connect();
    });
  }
  cropString(str:string){
    return str.slice(0, 25)+" ...";
  }
  likePost(card) {
    console.log(card);
    // if (!this.authService.isLoggedIn()) {
    //   this.dialog.open(LoginComponent);
    // }
    // else {
      if (card.liked) {
        return card.liked = false;
      } else {
        return card.liked = true;
      }
    // }
  }

}
