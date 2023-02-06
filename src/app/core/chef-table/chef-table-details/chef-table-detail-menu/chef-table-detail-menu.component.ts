import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chef-table-detail-menu',
  templateUrl: './chef-table-detail-menu.component.html',
  styleUrls: ['./chef-table-detail-menu.component.css']
})
export class ChefTableDetailMenuComponent implements OnInit {
  @Input() chefData;

  constructor() { }

  ngOnInit(): void {
  }

}
