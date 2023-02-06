import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chef-table-details-header',
  templateUrl: './chef-table-details-header.component.html',
  styleUrls: ['./chef-table-details-header.component.css']
})
export class ChefTableDetailsHeaderComponent implements OnInit {
  @Input() chefTable;

  constructor() { }

  ngOnInit(): void {
  }

}
