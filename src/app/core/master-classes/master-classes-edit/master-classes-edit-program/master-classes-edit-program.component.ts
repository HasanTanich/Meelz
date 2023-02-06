import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {DataService} from "../../../services/data.service";
import {MasterClass} from "../../../../shared/models/masterclass.model";

@Component({
  selector: 'app-master-classes-edit-program',
  templateUrl: './master-classes-edit-program.component.html',
  styleUrls: ['./master-classes-edit-program.component.css']
})
export class MasterClassesEditProgramComponent implements OnInit {
  @Input() masterClass;
  masterClassArray: MasterClass;

  constructor() { }

  ngOnInit(): void {
    this.masterClass.subscribe(data => {
      this.masterClassArray = data;
    })
  }
}
