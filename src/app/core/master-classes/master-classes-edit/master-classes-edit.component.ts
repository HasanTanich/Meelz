import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {DataService} from "../../services/data.service";
import {MasterClass} from "../../../shared/models/masterclass.model";

@Component({
  selector: 'app-master-classes-edit',
  templateUrl: './master-classes-edit.component.html',
  styleUrls: ['./master-classes-edit.component.css']
})
export class MasterClassesEditComponent implements OnInit {
  masterClassData;
  masterClassArray: MasterClass;
  id;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.masterClassData = this.dataService.getSingleMasterClass(params.id);
    });
    this.masterClassData.subscribe(data => {
      this.masterClassArray = data;
    })
  }
}
