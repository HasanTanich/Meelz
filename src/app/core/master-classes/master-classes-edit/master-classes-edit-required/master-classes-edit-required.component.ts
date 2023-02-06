import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {DataService} from "../../../services/data.service";
import {MasterClass} from "../../../../shared/models/masterclass.model";

@Component({
  selector: 'app-master-classes-edit-required',
  templateUrl: './master-classes-edit-required.component.html',
  styleUrls: ['./master-classes-edit-required.component.css']
})
export class MasterClassesEditRequiredComponent implements OnInit {
  @Input() masterClass;
  masterClassArray: MasterClass;

  constructor() { }

  ngOnInit(): void {
    this.masterClass.subscribe(data => {
      this.masterClassArray = data;
    })
  }
}
