import {Component, Input, OnInit} from '@angular/core';
import {MealKit} from "../../../../shared/models/mealkit.model";
import {Menu} from "../../../../shared/models/menu.model";

@Component({
  selector: 'app-menu-details-info',
  templateUrl: './menu-details-info.component.html',
  styleUrls: ['./menu-details-info.component.css']
})
export class MenuDetailsInfoComponent implements OnInit {
  @Input() menuData;
  menuArray: Menu;

  constructor() { }

  ngOnInit(): void {
    this.menuData.subscribe(data => {
      this.menuArray = data;
    })
  }

}
