import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search-filters-box',
  templateUrl: './search-filters-box.component.html',
  styleUrls: ['./search-filters-box.component.css'],
  providers: [DataService],
})
export class SearchFiltersBoxComponent implements OnInit {

  constructor(public formBuilder: FormBuilder, public router: Router, private dataService: DataService, private route: ActivatedRoute) { }

  @Input() chefsData: Observable<any[]>;
  @Input() tabData: Observable<any[]>;

  @Input() filter1;
  @Input() filter2;
  @Input() filter3;
  @Input() filter4;

  @Input() parentAttribute;
  @Input() id;
  @Input() tabPage;
  @Input() menuPage;
  @Input() mealKitPage;
  @Input() masterClassPage;
  @Input() chefTablePage;
  @Input() chefStorePage;
  @Input() chefPage;

  @Input() cardImage;
  @Input() cardTitle;
  @Input() cardDescription;
  @Input() cardTags;

  tabChefs;
  form: FormGroup;

  status: string[] = ['One', 'Two', 'Three'];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      cuisine: [null, Validators.required],
      chef: [null, Validators.required],
      rating: [null, Validators.required],
      price: [null, Validators.required],
    });

    this.tabChefs = this.dataService.getChefsFromPage(this.tabData, this.chefsData, this.id);

    // this.tabChefs = this.form.get('chef').valueChanges
    // .pipe(
    //   startWith(''),
    //   map(value => this._filter(value))
    // );
  }
  // private _filter(value: string) : string[] {
  //   const filterValue = value.toLowerCase();
  //   console.log(filterValue);
  //   return array.filter(option => option.toLowerCase().includes(filterValue));
  // }

  onSearch() {
    let ratingBool;
    let priceBool;
    if (this.dataService.dashboardSearchResults(this.form, this.tabData, this.chefsData, this.id, this.parentAttribute, this.tabPage)) {
      if (this.form.get('rating').value) {
        ratingBool = true;
      }
      if (this.tabPage != 'chef') {
        if (this.form.get('price').value) {
          priceBool = true;
        }
      }
      this.router.navigateByUrl('/search-results',
        {
          state:
          {
            id: this.id,
            parentAttribute: this.parentAttribute,
            menuPage: this.menuPage,
            mealKitPage: this.mealKitPage,
            masterClassPage: this.masterClassPage,
            chefsPage: this.chefPage,
            chefStorePage: this.chefStorePage,
            chefTablePage: this.chefTablePage,
            image: this.cardImage,
            title: this.cardTitle,
            description: this.cardDescription,
            tags: this.cardTags,
            tabPage: this.tabPage,
            rating: ratingBool,
            price: priceBool,
          }
        });
    }
  }

}
