import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {DataService} from "../../../services/data.service";
import {MasterClass} from "../../../../shared/models/masterclass.model";

@Component({
  selector: 'app-master-classes-edit-header',
  templateUrl: './master-classes-edit-header.component.html',
  styleUrls: ['./master-classes-edit-header.component.css']
})
export class MasterClassesEditHeaderComponent implements OnInit {
  @Input() masterClass;
  masterClassArray: MasterClass;

  constructor() { }

  ngOnInit(): void {
    this.masterClass.subscribe(data => {
      this.masterClassArray = data;
    })
  }

}
