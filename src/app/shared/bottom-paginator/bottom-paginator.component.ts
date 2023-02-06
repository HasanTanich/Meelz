import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bottom-paginator',
  templateUrl: './bottom-paginator.component.html',
  styleUrls: ['./bottom-paginator.component.css']
})
export class BottomPaginatorComponent implements OnInit {

  constructor() { }

  @Output() pressedKey = new EventEmitter<string>();

  ngOnInit(): void {
    this.generisiZadnjaDvaBroja();
  }

  paginatorLeft: boolean = false;
  paginatorRight: boolean = true;
  selectedSecond = false;

  prvi: number = 1;
  drugi: number = 2;
  treci: number = 3;
  cetvrti: string = "...";
  peti: number = 5;
  sesti: number = 6;
  numberofPages: number = 0;
  numberofData: number = 0;
  dataStart: number = 1;
  dataEnd: number = 9;
  more = "...";
  activeButton = true;

  paginatorButtonsArray = [this.prvi, this.drugi, this.treci, this.cetvrti, this.peti, this.sesti];

  generisiZadnjaDvaBroja() {

    let x = 72;//testni broj, zavisno od broja podataka koje backedn posalje kada zavrsi 
    let y = 0;
    y = x / 9;
    if (x % 2 != 0) {
      y + 1;
    }
    this.sesti = Math.round(y);
    this.peti = Math.round(y - 1);
    this.paginatorButtonsArray[5] = this.sesti;
    this.paginatorButtonsArray[4] = this.peti;
    console.log("paginator 5"+this.paginatorButtonsArray[5]);
    this.numberofPages = Math.round(y);
    this.numberofData = x;
  }
  PaginatorButtonClicked(numb: any) {

    this.ShowStats(numb);

    if (typeof numb == 'number') {
      window.scroll(200, 200);
      if (numb == 1)
        this.activeButton = true;
      else
        this.activeButton = false;
      this.selectedSecond = false;
      console.log("prije emita" +numb);
      this.pressedKey.emit(numb.toString())
      console.log("poslije emita" +numb);
    }
  }
  PreviousArrow() {
    this.selectedSecond = false;

    if (!this.paginatorRight)
      this.MoveDotsToMiddle();

    this.paginatorRight = true;
    this.activeButton = true;
    window.scroll(200, 200);

    for (var i = 0; i < this.paginatorButtonsArray.length; i++) {
      if (i < 3) {
        if (+this.paginatorButtonsArray[i] > 3) {
          var numb: number = +this.paginatorButtonsArray[i] - 3;
          this.paginatorButtonsArray[i] = numb;
          if (numb == 1)
            this.paginatorLeft = false;
          if (!this.paginatorLeft) {
            this.paginatorButtonsArray[0] = 1;
            this.paginatorButtonsArray[1] = 2;
            this.paginatorButtonsArray[2] = 3;
            this.paginatorLeft = false;
          }
        }
      }
    }
    this.ShowStats();
    this.GetPaginatetData(this.paginatorButtonsArray[0]);
  }
  GetPaginatetData(pag) {
    this.pressedKey.emit(pag)
  }
  NextArrow() {

    this.paginatorLeft = true;
    this.activeButton = true;
    window.scroll(200, 200);

    for (var i = 0; i < this.paginatorButtonsArray.length; i++) {
      if (i != 3 && i < 3) {
        if (i == 0) {
          if (+this.paginatorButtonsArray[i] < this.numberofPages - 4) {
            var numb: number = +this.paginatorButtonsArray[i] + 3;
            this.paginatorButtonsArray[i] = numb;
          }
        }
        else if (i == 1) {
          if (+this.paginatorButtonsArray[i] < this.numberofPages - 3) {
            var numb: number = +this.paginatorButtonsArray[i] + 3;
            this.paginatorButtonsArray[i] = numb;
          }
        }
        else if (i == 2) {
          if (+this.paginatorButtonsArray[i] < this.numberofPages - 2) {
            var numb: number = +this.paginatorButtonsArray[i] + 3;
            this.paginatorButtonsArray[i] = numb;
          }
        }
        if (+this.paginatorButtonsArray[2] == +this.paginatorButtonsArray[5]) {
          var numb: number = +this.paginatorButtonsArray[2] - 1;
          this.paginatorButtonsArray[2] = numb;
          numb = +this.paginatorButtonsArray[1] - 1;
          this.paginatorButtonsArray[1] = numb;
          numb = +this.paginatorButtonsArray[0] - 1;
          this.paginatorButtonsArray[0] = numb;
        }
        this.ShowStats();
        
        if(this.paginatorButtonsArray[0]=="...")
          {
            this.GetPaginatetData(this.paginatorButtonsArray[1]);
          }
        else
        this.GetPaginatetData(this.paginatorButtonsArray[0]);
        if (+this.paginatorButtonsArray[2] == +this.paginatorButtonsArray[4]) {
          var numb: number = +this.paginatorButtonsArray[2] - 1;
          console.log(numb);
          this.paginatorButtonsArray[2] = numb;
        }
        if (+this.paginatorButtonsArray[1] == +this.paginatorButtonsArray[2]) {
          var numb: number = +this.paginatorButtonsArray[1] - 1;
          console.log(numb);
          this.paginatorButtonsArray[1] = numb;
        }
        if (+this.paginatorButtonsArray[0] == +this.paginatorButtonsArray[1]) {
          var numb: number = +this.paginatorButtonsArray[0] - 1;
          console.log(numb);
          this.paginatorButtonsArray[0] = numb;
        }
      }
    }
    if (+this.paginatorButtonsArray[2] + 1 == this.paginatorButtonsArray[4]) {
      this.MoveDotsToStart();
      this.selectedSecond = true;
      this.activeButton = false;
    }
    this.ShowStats();

    if (this.paginatorButtonsArray[0] == "...") {
      this.GetPaginatetData(this.paginatorButtonsArray[1]);
    }
    else
      this.GetPaginatetData(this.paginatorButtonsArray[0]);

  }
  MoveDotsToStart() {
    this.paginatorRight = false;
    let dots = this.paginatorButtonsArray[3];
    for (let i = this.paginatorButtonsArray.length; i > 0; i--) {
      if (i <= 3) {
        let temp = this.paginatorButtonsArray[i - 1];
        this.paginatorButtonsArray[i] = temp;
      }
    }
    this.paginatorButtonsArray[0] = dots;
  }
  MoveDotsToMiddle() {
    let dots = this.paginatorButtonsArray[0];
    for (let i = 0; i < this.paginatorButtonsArray.length; i++) {
      if (i < 3) {
        let temp = this.paginatorButtonsArray[i + 1];
        this.paginatorButtonsArray[i] = temp;
      }
    }
    this.paginatorButtonsArray[3] = dots;
  }
  ShowStats(numb?) {
    if (numb != null && numb != "...") {
      this.dataStart = (numb * 9) - 8;
      this.dataEnd = this.dataStart + 8;
    }
    else {
      let index = 0;
      if (this.selectedSecond)
        index = 1;
      let numb1 = +this.paginatorButtonsArray[index];
      this.dataStart = (numb1 * 9) - 8;
      this.dataEnd = this.dataStart + 8;
    }
  }
}
