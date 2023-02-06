import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChefTable } from "../../shared/models/cheftable.model";
import { MealKit } from "../../shared/models/mealkit.model";
import { Menu } from "../../shared/models/menu.model";
import { MasterClass } from "../../shared/models/masterclass.model";
import { AuthService } from './auth.service';
import { trendingMenuVM } from 'src/app/shared/models/trendingMenuVM.model';
import { concat, forkJoin, Observable, Subject } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { map, share, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { mealKitVM } from 'src/app/shared/models/MealKitsVM.model';

export interface User {
  birthdate: any;
  cart_id: string;
  email: string;
  firstName: string;
  gender: string;
  id: string;
  image: string;
  lastName: string;
  password: string;
  phone: any;
}
export interface Chef {
  chefName: string;
  chefStatus: string;
  cover: string;
  description: string;
  id: string;
  imageURL: string;
  jobRole: string;
  workingExperience: {
    companyDescription: string;
    companyName: string;
    photo: string;
  };
}
export interface Meel {
  likes: number;
  media: {
    name: string,
    url: string
  };
  instruction: string;
  status: string;
  additionalInfo: {
    duration: number,
    type: string,
  };
  price: number;
}

export interface MasterClass1 {
  backgroundPicture: string;
  classDescription: string;
  groupSize: number;
  id: string;
  kitchenAccessories: string[];
  likes: number;
  productID: string;
  programDescription: string;
}
export interface TrendingMenu {
  likes: number;
  media: {
    name: string;
    imageURL: string;
  };
  price: number;
}
export interface Blog {
  likes: number;
  id: string;
  blogType: string;
  dataScreen: string;
  blog: {
    text: string;
    heading: string;
    subHeading: string;
    background: string;
    imageUrl: string;
  };
}
// export interface ChefTable {
//   backgroundPicture: string;
//   chefID: number;
//   chefsTableName: string;
//   duration: number;
//   fullDescription: string;
//   id: string;
//   importatNotes: string;
//   kitchenAccessories: string[];
//   language: string;
//   menu: string;
//   numberOfSeats: number;
//   price: number;
//   productID: number;
//   specialRequests: string;
//   tableDescription: string;
//   timeAtTable: string;
//   type: string;
// }

// Cart:{
// 	One cart:
// 	const Cart=http://chefbe-dev.eba-2ykf2ut3.us-east-1.elasticbeanstalk.com/api/cart/<cart_id>
// }

// Chef:{
// 	All chefs with auth:
// 	http://chefbe-dev.eba-2ykf2ut3.us-east-1.elasticbeanstalk.com/api/chefs_table_auth/<page_id>

// 	All chefs without auth:
// 	http://chefbe-dev.eba-2ykf2ut3.us-east-1.elasticbeanstalk.com/api/chefs_table_noauth/<page_id>

// 	One chef:
// 	http://chefbe-dev.eba-2ykf2ut3.us-east-1.elasticbeanstalk.com/api/chefs/<chef_id>
// }

// Cuisines:{
// 	One cuisine:
// 	http://chefbe-dev.eba-2ykf2ut3.us-east-1.elasticbeanstalk.com/api/cuisines/<cuisine_id>
// }

// Ingridients:{
// 	One ingridient:
// 	http://chefbe-dev.eba-2ykf2ut3.us-east-1.elasticbeanstalk.com/api/ingredients/<ingredient_id>
// }

// MasterClass:{
// 	All MasterClasses with auth:
// 	http://chefbe-dev.eba-2ykf2ut3.us-east-1.elasticbeanstalk.com/api/masterclasses_table_auth/<page_id>

// 	All MasterClasses without auth:
// 	http://chefbe-dev.eba-2ykf2ut3.us-east-1.elasticbeanstalk.com/api/masterclasses_table_noauth/<page_id>

// 	One MasterClass:
// 	http://chefbe-dev.eba-2ykf2ut3.us-east-1.elasticbeanstalk.com/api/masterclasses/<masterclass_id>

// 	Like MasterClass:
// 	http://chefbe-dev.eba-2ykf2ut3.us-east-1.elasticbeanstalk.com/api/masterclasses/like

// 	Unlike MasterClass:
// 	http://chefbe-dev.eba-2ykf2ut3.us-east-1.elasticbeanstalk.com/api/masterclasses/unlike
// }

// Product:{
// 	All products with auth:
// 	http://chefbe-dev.eba-2ykf2ut3.us-east-1.elasticbeanstalk.com/api/products_table_auth/<page_id>

// 	All products without auth:
// 	http://chefbe-dev.eba-2ykf2ut3.us-east-1.elasticbeanstalk.com/api/products_table_noauth/<page_id>

// 	Product like:
// 	http://chefbe-dev.eba-2ykf2ut3.us-east-1.elasticbeanstalk.com/api/products/like

// 	Products unlike:
// 	http://chefbe-dev.eba-2ykf2ut3.us-east-1.elasticbeanstalk.com/api/products/unlike

// 	One product:
// 	http://chefbe-dev.eba-2ykf2ut3.us-east-1.elasticbeanstalk.com/api/products/<product_id>
// }

// Supplier:{
// 	One suppliers:
// 	http://chefbe-dev.eba-2ykf2ut3.us-east-1.elasticbeanstalk.com/api/suppliers/<supplier_id>
// }

// User:{
// 	One user:
// 	http://chefbe-dev.eba-2ykf2ut3.us-east-1.elasticbeanstalk.com/api/users/<user_id>
// }//


const TrendingMenu = 'http://chefbe-dev.eba-2ykf2ut3.us-east-1.elasticbeanstalk.com/api/products_table_noauth/1';
const SingleChefTable = 'http://chefbe-dev.eba-2ykf2ut3.us-east-1.elasticbeanstalk.com/api/chefstable/';
const ChefTable = 'https://mellz-backend.makinistproject.com/api/chefstable/';
const MealKit = 'https://mellz-backend.makinistproject.com/api/mealkits/';
const Menu = 'https://mellz-backend.makinistproject.com/api/products/';
const MasterClass = 'https://mellz-backend.makinistproject.com/api/masterclasses/'
const trendingMealKits = 'https://mellz-backend.makinistproject.com/api/mealkits_table_auth/1';
const trendingMenu = "https://mellz-backend.makinistproject.com/api/products_table_noauth/1";
const Blog = 'https://mellz-backend.makinistproject.com/api/blogs_table_noauth/1'

const baseURL = "https://mellz-backend.makinistproject.com/api/";

export var searchResultGlobal: Observable<any[]>;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  arrayData: Observable<any>;

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) { }

  LikeCard(body: any, page: string) {
    if (page == 'meal-kits') {
      return this.http.put<any>('https://mellz-backend.makinistproject.com/api/mealkits/like', body).subscribe(data => data.id = body.id)
    }
    else if (page == 'menu') {
      return this.http.put<any>('https://mellz-backend.makinistproject.com/api/products/like', body).subscribe(data => data.id = body.id)
    }
    else if (page == 'master-classes') {
      return this.http.put<any>('https://mellz-backend.makinistproject.com/api/masterclasses/like', body).subscribe(data => data.id = body.id)
    }
    else if (page == 'chef-table') {
      return this.http.put<any>('https://mellz-backend.makinistproject.com/api/chefstable/like', body).subscribe(data => data.id = body.id)
    }
    else if (page == 'chef') {
      return this.http.put<any>('https://mellz-backend.makinistproject.com/api/chefs/like', body).subscribe(data => data.id = body.id)
    }
    else {
      return this.http.put<any>('https://mellz-backend.makinistproject.com/api/chefsstore/like', body).subscribe(data => data.id = body.id)
    }
  }
  UnLikeCard(body: any, page: string) {
    if (page == 'meal-kits') {
      return this.http.put<any>('https://mellz-backend.makinistproject.com/api/mealkits/unlike', body).subscribe(data => data.id = body.id)
    }
    else if (page == 'menu') {
      return this.http.put<any>('https://mellz-backend.makinistproject.com/api/products/unlike', body).subscribe(data => data.id = body.id)
    }
    else if (page == 'master-classes') {
      return this.http.put<any>('https://mellz-backend.makinistproject.com/api/masterclasses/unlike', body).subscribe(data => data.id = body.id)
    }
    else if (page == 'chef-table') {
      return this.http.put<any>('https://mellz-backend.makinistproject.com/api/chefstable/unlike', body).subscribe(data => data.id = body.id)
    }
    else if (page == 'chef') {
      return this.http.put<any>('https://mellz-backend.makinistproject.com/api/chefs/unlike', body).subscribe(data => data.id = body.id)
    }
    else {
      return this.http.put<any>('https://mellz-backend.makinistproject.com/api/chefsstore/unlike', body).subscribe(data => data.id = body.id)
    }
  }

  // LIKE-UNLIKE Methods
  LikeTrendingMealKits(body: any) {
    return this.http.put<any>('https://mellz-backend.makinistproject.com/api/mealkits/like', body).subscribe(
      data => data.id = body.id
    )
  }
  UnLikeTrendingMealKits(body: any) {
    return this.http.put<any>('https://mellz-backend.makinistproject.com/api/mealkits/unlike', body).subscribe(
      data => data.id = body.id
    )
  }
  LikeTrendingMenu(body: any) {
    return this.http.put<any>('https://mellz-backend.makinistproject.com/api/products/like', body).subscribe(
      data => data.id = body.id
    )
  }
  UnLikeTrendingMenu(body: any) {
    return this.http.put<any>('https://mellz-backend.makinistproject.com/api/products/unlike', body).subscribe(
      data => data.id = body.id
    )
  }
  LikeMasterClass(body: any) {
    return this.http.put<any>('https://mellz-backend.makinistproject.com/api/masterclasses/like', body).subscribe(
      data => data.id = body.id
    )
  }
  UnLikeMasterClass(body: any) {
    return this.http.put<any>('https://mellz-backend.makinistproject.com/api/masterclasses/unlike', body).subscribe(
      data => data.id = body.id
    )
  }
  LikeChefTable(body: any) {
    return this.http.put<any>('https://mellz-backend.makinistproject.com/api/chefstable/like', body).subscribe(
      data => data.id = body.id
    )
  }
  UnLikeChefTable(body: any) {
    return this.http.put<any>('https://mellz-backend.makinistproject.com/api/chefstable/unlike', body).subscribe(
      data => data.id = body.id
    )
  }
  LikeChef(body: any) {
    return this.http.put<any>('https://mellz-backend.makinistproject.com/api/chefs/like', body).subscribe(
      data => data.id = body.id
    )
  }
  UnLikeChef(body: any) {
    return this.http.put<any>('https://mellz-backend.makinistproject.com/api/chefs/unlike', body).subscribe(
      data => data.id = body.id
    )
  }

  getPythonData() {
    return this.http.get<any>(baseURL + 'chefs/e80e2dc606d043659ad7959ad551d222').pipe(share());
  }
  getAllChefs() {
    if (this.authService.isLoggedIn())
      return this.http.get<Chef[]>(baseURL + 'chefs_table_auth/1').pipe(share());
    else
      return this.http.get<Chef[]>(baseURL + 'chefs_table_noauth/1').pipe(share());
  }
  getChefs(index) {
    return this.http.get<Chef[]>(baseURL + 'chefs/' + index).pipe(share());
  }
  getSingleChefbyId(id) {
    return this.http.get<any>(baseURL + 'chefs/' + id).pipe(share());
  }
  getTrendingMenu() {
    if (this.authService.isLoggedIn())
      return this.http.get<trendingMenuVM[]>(baseURL + 'products_table_auth/1').pipe(share());
    else
      return this.http.get<trendingMenuVM[]>(baseURL + 'products_table_noauth/1').pipe(share());

  }
  getTrendingMealKits() {
    if (this.authService.isLoggedIn())
      return this.http.get<mealKitVM[]>(baseURL + 'mealkits_table_auth/1').pipe(share()); // CHEF inteface -> MealKitVM
    else
      return this.http.get<mealKitVM[]>(baseURL + 'mealkits_table_noauth/1').pipe(share());

  }
  getAllMeelz() {
    return this.http.get<Meel[]>(baseURL + "products_table_noauth/1").pipe(share());
  }
  getAllChefTables() {
    if (this.authService.isLoggedIn())
      return this.http.get<Chef[]>(baseURL + 'chefstable_table_auth/1').pipe(share());
    else
      return this.http.get<Chef[]>(baseURL + 'chefstable_table_noauth/1').pipe(share());

  }
  getAllChefStoreItems() {
    if (this.authService.isLoggedIn())
      return this.http.get<any>(baseURL + 'chefsstore_table_noauth/1').pipe(share());
    else
      return this.http.get<any>(baseURL + 'chefsstore_table_noauth/1').pipe(share());

  }
  getAllChefStoreItems1() {
    for (let i = 0; i < 5; i++) {
      let x = forkJoin(this.http.get<any>(baseURL + 'chefsstore_table_noauth/' + i).pipe(share()));
    }
    //   .pipe(map(data => {
    //   data.filter(data => {
    //     if (data.chefID == '342e9fc257404abfa5ff80b4c73de3fc') {
    //       console.log('prosao uslov')
    //       return data.chefID === '342e9fc257404abfa5ff80b4c73de3fc';
    //     }})
    // }))
    //   );
    //
    // }
    // for (let i=0; i<20; i++) {
    //   console.log(this.arrayData[i])
    // }
    //
    // return this.arrayData;
  }

  getAllMasterClasses() {
    return this.http.get<TrendingMenu[]>(baseURL + 'products_table_noauth/1').pipe(share());
  }
  getAllMasterClasses1(numb?) {
    if (numb == null) {
      if (this.authService.isLoggedIn())
        return this.http.get<MasterClass>(baseURL + 'masterclasses_table_auth/1').pipe(share());
      else
        return this.http.get<Chef[]>(baseURL + 'masterclasses_table_noauth/1').pipe(share());
    }
    if (this.authService.isLoggedIn())
      return this.http.get<Chef[]>(baseURL + 'masterclasses_table_auth/' + numb).pipe(share());
    else
      return this.http.get<Chef[]>(baseURL + 'masterclasses_table_noauth/' + numb).pipe(share());
  }
  getAllMasterClasses2(index) {
    return this.http.get<MasterClass1[]>(baseURL + 'masterclasses/' + index).pipe(share());
  }
  getSingleChefTable(index) {
    return this.http.get<ChefTable>(ChefTable + index).pipe(share());
  }
  getSingleMealKit(index) {
    return this.http.get<MealKit>(MealKit + index).pipe(share());
  }
  getSingleMenu(index) {
    return this.http.get<Menu>(Menu + index).pipe(share());
  }
  getSingleMasterClass(index) {
    return this.http.get<MasterClass>(MasterClass + index).pipe(share());
  }
  getAllBlogs(index?) {
    if (index! = null)
      return this.http.get<Blog>(Blog + index).pipe(share());
    else {
      return this.http.get<Blog>(Blog).pipe(share());
    }
  }
  getSingleBlog(index) {
    return this.http.get<Blog>('https://mellz-backend.makinistproject.com/api/blogs/' + index.pipe(share()));
  }

  getChefsFromPage(tabData: Observable<any[]>, chefsData: Observable<any[]>, id): Observable<any[]> {
    var menuchefid;
    var menuchefs;
    var chefsInTabData: Observable<any[]>;

    chefsInTabData = tabData.pipe(
      switchMap(tab => {
        return chefsData.pipe(
          map(chef => {
            menuchefid = tab.map(attribute => {
              return attribute[id];
            });
            menuchefs = chef.filter(chef => {
              return menuchefid.includes(chef.id);
            });
            menuchefs = menuchefs.map(a => { return a.chefName });
            return menuchefs;
          })
        );
      })
    );
    return chefsInTabData;
  }

  dashboardSearchResults(form: FormGroup, tabData: Observable<any[]>, chefsData: Observable<any[]>, id, parentAttribute, tabPage): Observable<any[]> {
    let filteredtab;
    let chefName;
    let tabchefid;
    let searchResult;

    if (tabPage == 'chef') {
      form.get('price').setValue(form.get('price').value?.toLowerCase());
      searchResult = chefsData.pipe(map(a => {
        // if status and rating are filled in (price => status)
        if (form.get('price').value && !form.get('chef').value && form.get('rating').value && !form.get('cuisine').value) {
          a = a.filter(item => {
            return (item.likes >= form.get('rating').value && item.chefStatus.toLowerCase() == form.get('price').value);
          });
        } else if (form.get('price').value && !form.get('chef').value && !form.get('rating').value && !form.get('cuisine').value) {
          a = a.filter(item => {
            return item.chefStatus.toLowerCase() == form.get('price').value;
          });
        }
        else if (!form.get('price').value && !form.get('chef').value && form.get('rating').value && !form.get('cuisine').value) {
          a = a.filter(item => {
            return item.likes >= form.get('rating').value;
          });
        }
        return a;
      })
      );
    } else {
      form.get('chef').setValue(form.get('chef').value?.toLowerCase());
      if (form.get('chef').value || form.get('price').value || form.get('rating').value || form.get('cuisine').value) {
        searchResult = tabData.pipe(
          switchMap(tab => {
            tabchefid = tab.map(a => {
              return a[id];
            });
            return chefsData.pipe(
              map(chef => {
                chefName = chef.map(a => {
                  if (a.chefName?.toLowerCase() == form.get('chef').value && tabchefid.includes(a.id)) { return a; }
                  else return null;
                });
                chefName = chefName.filter(a => {
                  return a != null;
                });
                // only cuisine is not filled in 
                if (form.get('price').value && form.get('chef').value && form.get('rating').value && !form.get('cuisine').value) {
                  filteredtab = tab.filter(item => {
                    return (chefName[0]?.id == item[id] && item[parentAttribute].price <= form.get('price').value && item.likes >= form.get('rating').value);
                  });
                }
                // only rating is not filled in 
                else if (form.get('price').value && form.get('chef').value && !form.get('rating').value && form.get('cuisine').value) {
                  filteredtab = tab.filter(item => {
                    return (chefName[0]?.id == item[id] && item[parentAttribute].price <= form.get('price').value);
                  });
                }
                // only price is not filled in 
                else if (!form.get('price').value && form.get('chef').value && form.get('rating').value && form.get('cuisine').value) {
                  filteredtab = tab.filter(item => {
                    return (chefName[0]?.id == item[id]);
                  });
                }
                // only chef is not filled in 
                else if (form.get('price').value && !form.get('chef').value && form.get('rating').value && form.get('cuisine').value) {
                  filteredtab = tab.filter(item => {
                    return (item[parentAttribute].price <= form.get('price').value && item.likes >= form.get('rating').value);
                  });
                }
                // only price is filled in 
                else if (form.get('price').value && !form.get('chef').value && !form.get('rating').value && !form.get('cuisine').value) {
                  filteredtab = tab.filter(item => {
                    return item[parentAttribute].price <= form.get('price').value;
                  });
                }
                // only chef is filled in 
                else if (!form.get('price').value && form.get('chef').value && !form.get('rating').value && !form.get('cuisine').value) {
                  filteredtab = tab.filter(item => {
                    return chefName[0]?.id == item[id];
                  });
                }
                // only rating is filled in 
                else if (!form.get('price').value && !form.get('chef').value && form.get('rating').value && !form.get('cuisine').value) {
                  filteredtab = tab.filter(item => {
                    return item.likes >= form.get('rating').value;
                  });
                }
                // only cuisine is filled in 
                else if (!form.get('price').value && !form.get('chef').value && !form.get('rating').value && form.get('cuisine').value) {
                  filteredtab = tab.filter(item => {
                    return item[parentAttribute].price <= form.get('price').value;
                  });
                }
                // only chef and price are filled in
                else if (form.get('price').value && form.get('chef').value && !form.get('rating').value && !form.get('cuisine').value) {
                  filteredtab = tab.filter(item => {
                    return (chefName[0]?.id == item[id] && item[parentAttribute].price <= form.get('price').value);
                  });
                }
                // only rating and price are filled in
                else if (form.get('price').value && !form.get('chef').value && form.get('rating').value && !form.get('cuisine').value) {
                  filteredtab = tab.filter(item => {
                    return (item[parentAttribute].price <= form.get('price').value && item.likes >= form.get('rating').value);
                  });
                }
                // only rating and chef are filled in
                else if (!form.get('price').value && form.get('chef').value && form.get('rating').value && !form.get('cuisine').value) {
                  filteredtab = tab.filter(item => {
                    return (chefName[0]?.id == item[id] && item.likes >= form.get('rating').value);
                  });
                }
                // all fields are filled in
                else {
                  filteredtab = tab.filter(item => {
                    return (chefName[0]?.id == item[id] && item[parentAttribute].price <= form.get('price').value && item.likes >= form.get('rating').value);
                  });
                }
                return filteredtab;
              })
            )
          })
        );
      } else {
        // this.router.navigate([tabPage]);
      }
    }
    searchResultGlobal = searchResult;
    return searchResult;
  }

  getSearchResult(): Observable<any[]> {
    return searchResultGlobal;
  }

}
