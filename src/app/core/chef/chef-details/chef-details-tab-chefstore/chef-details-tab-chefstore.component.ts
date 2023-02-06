import { Component, OnInit } from '@angular/core';
import {forkJoin, Observable, of} from "rxjs";
import { DataService } from "../../../services/data.service";
import { ChefStore } from "../chef-details.component";
import {ActivatedRoute, Params} from "@angular/router";
import {mergeMap, switchMap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-chef-details-tab-chefstore',
  templateUrl: './chef-details-tab-chefstore.component.html',
  styleUrls: ['./chef-details-tab-chefstore.component.css']
})
export class ChefDetailsTabChefstoreComponent implements OnInit {
  meelz;
  meelsobs: Observable<any> = this.dataService.getAllMeelz();

  chefStoreRating: boolean;
  chefStorePrice: boolean;

  reverseSeafood = false;
  reverseGroceries = false;
  reverseChocolate = false;
  reverseTableware = false;
  reverseKitchen = false;
  reverseSauces = false;
  reverseVegi = false;
  reverseAll = false;
  reverseMeat = false;

  chefStoreData: ChefStore[] = [
    {
      id: 0,
      liked: 0,
      amount: 0,
      rating: 5,
      style: 'Canadian',
      title: 'Fish',
      description: 'Lorem ipsum lorem ipsum, lorem ipsum, lorem ipsum.',
      price: 150,
      imageUrl: '../assets/img/img_9.png',
      seafood: true,
      meat: true,
      groceries: false,
      chocolate: false,
      tableware: false,
      kitchen: false,
      sauces: false,
      vegi: false
    },
    {
      id: 1,
      liked: 0,
      amount: 0,
      rating: 2,
      style: 'American',
      title: 'Teriyaki-Glazed-Salmon',
      description: 'Lorem ipsum lorem ipsum, lorem ipsum, lorem ipsum.',
      price: 100,
      imageUrl: '../assets/img/img_3.png',
      seafood: false,
      meat: false,
      groceries: false,
      chocolate: false,
      tableware: false,
      kitchen: true,
      sauces: false,
      vegi: false
    },
    {
      id: 2,
      liked: 0,
      amount: 0,
      rating: 7,
      style: 'German',
      title: 'Garlicky Chicken',
      description: 'Lorem ipsum lorem ipsum, lorem ipsum, lorem ipsum.',
      price: 150,
      imageUrl: '../assets/img/img_4.png',
      seafood: false,
      meat: false,
      groceries: false,
      chocolate: false,
      tableware: false,
      kitchen: true,
      sauces: false,
      vegi: false
    },
    {
      id: 3,
      liked: 0,
      amount: 0,
      rating: 8,
      style: 'Ukranian',
      title: 'Garlicky Chicken 2',
      description: 'Lorem ipsum lorem ipsum, lorem ipsum, lorem ipsum.',
      price: 90,
      imageUrl: '../assets/img/img_5.png',
      seafood: false,
      meat: false,
      groceries: false,
      chocolate: false,
      tableware: true,
      kitchen: false,
      sauces: false,
      vegi: false
    },
    {
      id: 4,
      liked: 0,
      amount: 0,
      rating: 9,
      style: 'Macedonian',
      title: 'Garlicky best ever Chicken 2',
      description: 'Lorem ipsum lorem ipsum, lorem ipsum, lorem ipsum.',
      price: 150,
      imageUrl: '../assets/img/img_6.png',
      seafood: false,
      meat: false,
      groceries: false,
      chocolate: true,
      tableware: false,
      kitchen: false,
      sauces: false,
      vegi: false
    },
    {
      id: 5,
      liked: 0,
      amount: 0,
      rating: 1,
      style: 'Syrian',
      title: 'Garlicky best ever Chicken 2',
      description: 'Lorem ipsum lorem ipsum, lorem ipsum, lorem ipsum.',
      price: 50,
      imageUrl: '../assets/img/img_7.png',
      seafood: false,
      meat: false,
      groceries: true,
      chocolate: false,
      tableware: false,
      kitchen: false,
      sauces: false,
      vegi: false
    },
    {
      id: 6,
      liked: 0,
      amount: 0,
      rating: 6,
      style: 'Pakistani',
      title: 'Chicken',
      description: 'Lorem ipsum lorem ipsum, lorem ipsum, lorem ipsum.',
      price: 50,
      imageUrl: '../assets/img/img_8.png',
      seafood: false,
      meat: true,
      groceries: false,
      chocolate: false,
      tableware: false,
      kitchen: false,
      sauces: false,
      vegi: false
    },
    {
      id: 7,
      liked: 0,
      amount: 0,
      rating: 5,
      style: 'Canadian',
      title: 'Fish',
      description: 'Lorem ipsum lorem ipsum, lorem ipsum, lorem ipsum.',
      price: 50,
      imageUrl: '../assets/img/img_9.png',
      seafood: true,
      meat: true,
      groceries: false,
      chocolate: false,
      tableware: false,
      kitchen: false,
      sauces: false,
      vegi: false
    },
    {
      id: 8,
      liked: 0,
      amount: 0,
      rating: 4,
      style: 'Bosnian',
      title: 'Tortilla Chicken Soup',
      description: 'Lorem ipsum lorem ipsum, lorem ipsum, lorem ipsum.',
      price: 50,
      imageUrl: './assets/img/img_2.png',
      seafood: false,
      meat: false,
      groceries: false,
      chocolate: false,
      tableware: false,
      kitchen: false,
      sauces: true,
      vegi: true
    },
    {
      id: 9,
      liked: 0,
      amount: 0,
      rating: 9,
      style: 'Bosnian',
      title: 'Tortilla Chicken Soup',
      description: 'Lorem ipsum lorem ipsum, lorem ipsum, lorem ipsum.',
      price: 50,
      imageUrl: './assets/img/img_2.png',
      seafood: false,
      meat: false,
      groceries: true,
      chocolate: false,
      tableware: false,
      kitchen: false,
      sauces: true,
      vegi: true
    },
    {
      id: 10,
      liked: 0,
      amount: 0,
      rating: 1,
      style: 'Syrian',
      title: 'Garlicky best ever Chicken 2',
      description: 'Lorem ipsum lorem ipsum, lorem ipsum, lorem ipsum.',
      price: 50,
      imageUrl: '../assets/img/img_7.png',
      seafood: false,
      meat: false,
      groceries: true,
      chocolate: false,
      tableware: false,
      kitchen: true,
      sauces: false,
      vegi: false
    }
  ];

  allStoreItems: ChefStore[];
  key: string;

  id;
  allChefsData;
  allChefsDataArray: [];
  filteredData;
  filteredArray: [];
  loaded = false;
  loadedCharacter;
  dataArray: {};
  chefStoreItems: Observable<{}>;

  constructor(private dataService: DataService, private route: ActivatedRoute, private http: HttpClient) { }

  async ngOnInit(): Promise<void> {
    this.route.parent.params.subscribe((params: Params) => {
      this.id = params.id;
    });
    // let character = this.http.get('https://mellz-backend.makinistproject.com/api/chefsstore_table_noauth/1');
    // let characterHomeworld = this.http.get('https://mellz-backend.makinistproject.com/api/chefsstore_table_noauth/2');
    //
    // forkJoin([character, characterHomeworld]).subscribe(results => {
    //   // results[0] is our character
    //   // results[1] is our character homeworld
    //   (results[0] as any).chefStoreItems = results[1];
    //   this.loadedCharacter = results[0];
    //   console.log(this.loadedCharacter);
    //   var obsof1=of(this.loadedCharacter);
    //   obsof1.subscribe(data => {
    //
    //     var obsof2 = data.filter(data => {
    //         console.log(data);
    //         if (data.chefID == this.id) {
    //           console.log('prosao uslov')
    //           return data.chefID === this.id;
    //         }
    //         this.loaded = true;
    //       }
    //     )
    //     console.log(obsof2);
    //   })
    //   });
    //
    // }

    // console.log(this.loadedCharacter)
    // for (let i=0; i<5; i++) {
    //   var x = this.dataService.getAllChefStoreItems1(i);
    //
    // }
    this.allChefsData = this.dataService.getAllChefStoreItems();
    this.allChefsData = this.allChefsData.toPromise();
    // Observable.forkJoin(this.allChefsData)
    //   .subscribe(dataArray => {
    //     // All observables in `observables` array have resolved and `dataArray` is an array of result of each observable
    //   });

    console.log(this.allChefsData)
    await this.allChefsData.then(data => {
      console.log(data);
      this.allChefsDataArray = data.filter(data => {
        if (data.chefID == this.id) {
          console.log('prosao uslov')
          return data.chefID === this.id;
        }
        this.loaded = true;
      })
      this.filteredData = this.dataService.getAllChefStoreItems();
      this.filteredData = this.filteredData.toPromise();
      this.filteredData.then(data => {
        this.filteredArray = data.filter(data => {
          return data.chefsStore.storeFilter === 'Seafood'

        });
      })
      console.log(this.allChefsDataArray)
      // console.log(this.filteredArray)
      // this.sortSeafood('Seafood');
    })
  }

  onChefStoreSortRating(value: boolean) {
    this.chefStoreRating = value;
  }
  onChefStoreSortPrice(value: boolean) {
    this.chefStorePrice = value;
  }

  async sortSeafood() {
    this.filteredData = this.dataService.getAllChefStoreItems();
    this.filteredData = this.filteredData.toPromise();
    await this.allChefsData.then(data => {
      this.allChefsDataArray = data.filter(data => {
        return data.chefsStore.storeFilter === 'Seafood'

      });
    })
  //   console.log(this.allChefsDataArray)
  //   // this.allStoreItems = this.chefStoreData.filter((ChefStoreData) => {
  //   //   return ChefStoreData.seafood === true;
  //   // });
  //   // this.reverseGroceries = false;
  //   // this.reverseChocolate = false;
  //   // this.reverseTableware = false;
  //   // this.reverseKitchen = false;
  //   // this.reverseSauces = false;
  //   // this.reverseVegi = false;
  //   // this.reverseAll = false;
  //   // this.reverseMeat = false;
  //   // this.key = key;
    this.reverseSeafood = !this.reverseSeafood;
    if (this.reverseSeafood === false) {
      this.allChefsData.then(data => {
        this.allChefsDataArray = data.filter(data => {
          if (data.chefID == this.id) {

            return data.chefID === this.id;
          }
        });
      })
    }
  }

  sortMeat(key) {
    this.allStoreItems = this.chefStoreData.filter((ChefStoreData) => {
      return ChefStoreData.meat === true;
    });
    this.reverseGroceries = false;
    this.reverseChocolate = false;
    this.reverseTableware = false;
    this.reverseKitchen = false;
    this.reverseSauces = false;
    this.reverseVegi = false;
    this.reverseAll = false;
    this.reverseSeafood = false;
    this.key = key;
    this.reverseMeat = !this.reverseMeat;
    if (this.reverseMeat === false) {
      this.allStoreItems = this.chefStoreData;
    }
  }

  sortGroceries(key) {
    this.allStoreItems = this.chefStoreData.filter((ChefStoreData) => {
      return ChefStoreData.groceries === true;
    });
    this.reverseSeafood = false;
    this.reverseChocolate = false;
    this.reverseTableware = false;
    this.reverseKitchen = false;
    this.reverseSauces = false;
    this.reverseVegi = false;
    this.reverseAll = false;
    this.reverseMeat = false;
    this.key = key;
    this.reverseGroceries = !this.reverseGroceries;
    if (this.reverseGroceries === false) {
      this.allStoreItems = this.chefStoreData;
    }
  }

  async sortChocolate(key) {
    await this.allChefsData.then(data => {
      this.allChefsDataArray = data.filter(data => {
        return data.chefsStore.storeFilter === 'Chocolate'

      });
    })
    console.log(this.allChefsDataArray)
    this.reverseChocolate = !this.reverseChocolate;
    if (this.reverseChocolate === false) {
      this.allChefsData.then(data => {
        this.allChefsDataArray = data.filter(data => {
          if (data.chefID == this.id) {
            return data.chefID === this.id;
          }
        });
      })
    }
  //   // this.allStoreItems = this.chefStoreData.filter((ChefStoreData) => {
  //   //   return ChefStoreData.chocolate === true;
  //   // });
  //   // this.reverseGroceries = false;
  //   // this.reverseSeafood = false;
  //   // this.reverseTableware = false;
  //   // this.reverseKitchen = false;
  //   // this.reverseSauces = false;
  //   // this.reverseVegi = false;
  //   // this.reverseAll = false;
  //   // this.reverseMeat = false;
  //   // this.key = key;
  //   // this.reverseChocolate = !this.reverseChocolate;
  //   // if (this.reverseChocolate === false) {
  //   //   this.allStoreItems = this.chefStoreData;
  //   // }
  }

  sortTableware(key) {
    this.allStoreItems = this.chefStoreData.filter((ChefStoreData) => {
      return ChefStoreData.tableware === true;
    });
    this.reverseGroceries = false;
    this.reverseChocolate = false;
    this.reverseSeafood = false;
    this.reverseKitchen = false;
    this.reverseSauces = false;
    this.reverseVegi = false;
    this.reverseAll = false;
    this.reverseMeat = false;
    this.key = key;
    this.reverseTableware = !this.reverseTableware;
    if (this.reverseTableware === false) {
      this.allStoreItems = this.chefStoreData;
    }
  }

  sortKitchen(key) {
    this.allStoreItems = this.chefStoreData.filter((ChefStoreData) => {
      return ChefStoreData.kitchen === true;
    });
    this.reverseGroceries = false;
    this.reverseChocolate = false;
    this.reverseTableware = false;
    this.reverseSeafood = false;
    this.reverseSauces = false;
    this.reverseVegi = false;
    this.reverseAll = false;
    this.reverseMeat = false;
    this.key = key;
    this.reverseKitchen = !this.reverseKitchen;
    if (this.reverseKitchen === false) {
      this.allStoreItems = this.chefStoreData;
    }
  }

  sortSauces(key) {
    this.allStoreItems = this.chefStoreData.filter((ChefStoreData) => {
      return ChefStoreData.sauces === true;
    });
    this.reverseGroceries = false;
    this.reverseChocolate = false;
    this.reverseTableware = false;
    this.reverseKitchen = false;
    this.reverseSeafood = false;
    this.reverseVegi = false;
    this.reverseAll = false;
    this.reverseMeat = false;
    this.key = key;
    this.reverseSauces = !this.reverseSauces;
    if (this.reverseSauces === false) {
      this.allStoreItems = this.chefStoreData;
    }
  }

  sortVegi(key) {
    this.allStoreItems = this.chefStoreData.filter((ChefStoreData) => {
      return ChefStoreData.vegi === true;
    });
    this.reverseGroceries = false;
    this.reverseChocolate = false;
    this.reverseTableware = false;
    this.reverseKitchen = false;
    this.reverseSauces = false;
    this.reverseSeafood = false;
    this.reverseAll = false;
    this.reverseMeat = false;
    this.key = key;
    this.reverseVegi = !this.reverseVegi;
    if (this.reverseVegi === false) {
      this.allStoreItems = this.chefStoreData;
    }
  }

  sortAll(key) {
    this.allStoreItems = this.chefStoreData;
    this.reverseGroceries = false;
    this.reverseChocolate = false;
    this.reverseTableware = false;
    this.reverseKitchen = false;
    this.reverseSauces = false;
    this.reverseVegi = false;
    this.reverseMeat = false;
    this.reverseSeafood = false;
    this.key = key;
    this.reverseAll = !this.reverseAll;
  }
}
