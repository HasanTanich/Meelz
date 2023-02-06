import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chef-table-detail-info',
  templateUrl: './chef-table-detail-info.component.html',
  styleUrls: ['./chef-table-detail-info.component.css']
})
export class ChefTableDetailInfoComponent implements OnInit {
  @Input() chefData;

  constructor() { }

  ngOnInit(): void {
  }

}
