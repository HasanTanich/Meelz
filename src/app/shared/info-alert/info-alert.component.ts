import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA } from '@angular/material/dialog';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Component({
  selector: 'app-info-alert',
  templateUrl: './info-alert.component.html',
  styleUrls: ['./info-alert.component.css']
})
export class InfoAlertComponent implements OnInit {

  title:string;
  red=false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { 
    this.title=data;
  }

  ngOnInit(): void {
    console.log("title"+this.title)
    if(this.title=="User Authentication failed ! Check Password and Username")
      this.red=true;
  }

}
