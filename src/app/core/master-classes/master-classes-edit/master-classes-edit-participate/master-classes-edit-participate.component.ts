import {Component, Input, OnInit} from '@angular/core';
import {MasterClass} from "../../../../shared/models/masterclass.model";

@Component({
  selector: 'app-master-classes-edit-participate',
  templateUrl: './master-classes-edit-participate.component.html',
  styleUrls: ['./master-classes-edit-participate.component.css']
})
export class MasterClassesEditParticipateComponent implements OnInit {
  @Input() masterClass;
  masterClassArray: MasterClass;

  constructor() { }

  ngOnInit(): void {
    this.masterClass.subscribe(data => {
      this.masterClassArray = data;
    })
  }
}
