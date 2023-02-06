import { Injectable } from '@angular/core';
import { trendingMenuVM } from 'src/app/shared/models/trendingMenuVM.model';
import { Auth,API  } from 'aws-amplify';
@Injectable({
  providedIn: 'root'
})


export class TrendingMenuCartService {

  
  constructor() { }

  quantity:number;
  tredningMenus: Array<trendingMenuVM>=[]; 

  addTrendingMenu(card:trendingMenuVM){
    if(card.quantity==undefined)
     {
        card.quantity=0;
      }
    this.tredningMenus.push(card);
    card.selected=true;
    card.quantity++;
    console.log(card.quantity);

    return card.quantity;
  }
  removeTrendingMenu(card:trendingMenuVM){

    let index=0;

    for(let i=0;i<this.tredningMenus.length;i++)
      if(this.tredningMenus[i].id==card.id){
        index=i;
      }

    this.tredningMenus.splice(index,1);
    card.quantity--;

    if(card.quantity<1)
      card.selected=false;

    return card.quantity;
  }
  getTrendingMenuCartNumberofItems(){
    return this.getAllLocalStorage();
  }
  getTrendingMenuCardQuantity(card:trendingMenuVM)
  {
    // console.log(card.quantity + "cartina test");
    if(card.quantity==undefined)
      return 0;
      else return card.quantity;
  }
  getAllLocalStorage()
  {
    let counter=0;
    for (var i = 0; i < localStorage.length; i++) {

      var key = localStorage.key(i);
    
      if(key.indexOf('.') !== -1){}
      else if(key.indexOf('-') !== -1){}
      else if(key.indexOf('_') !== -1){}
      else{
        counter++;
      }  
    }

    return counter;
  }
  getItems()
  {
    let items=[];
    for (var i = 0; i < localStorage.length; i++) {

      var key = localStorage.key(i);
    
      if(key.indexOf('.') !== -1){}
      else if(key.indexOf('-') !== -1){}
      else if(key.indexOf('_') !== -1){}
      else{
        let x=localStorage.getItem(key);
        items.push(JSON.parse(x));
      }  
    }
    return items;
  }
  getItemsPrice()
  {
    let items=[];
    for (var i = 0; i < localStorage.length; i++) {

      var key = localStorage.key(i);
    
      if(key.indexOf('.') !== -1){}
      else if(key.indexOf('-') !== -1){}
      else if(key.indexOf('_') !== -1){}
      else{
        let x=localStorage.getItem(key);
        items.push(JSON.parse(x));
      }  
    }
    var price=0;
    items.forEach(element => {
      if(element.mealKitInfo!=null)
        price+=element.mealKitInfo.totalPrice*element.quantity;
      else
      price+=element.menu.totalPrice*element.quantity;
    });
    return price;
  }
  getQuantity(card:any)
  {
    let x=localStorage.getItem(card.id);
    if(x==null)
      return 0;
    let obj=JSON.parse(x)
    return obj.quantity;
  }
  addToLocalStorage(card:any,onRemove?:boolean){

    var cardID=card.id;

    if(onRemove==true)
    {
      console.log("on remove"+ card.quantity);
      localStorage.setItem( cardID, JSON.stringify(card));
      return;
    }
    
    let x=localStorage.getItem(cardID);
    if(x==null)
    {
      card.quantity=1;
      localStorage.setItem( cardID, JSON.stringify(card));
    }
    else 
    {
      let y=JSON.parse(x)
      let newCard=card;
      let staraKolicina=y.quantity;
      newCard.quantity=staraKolicina+1;
      localStorage.setItem( cardID, JSON.stringify(newCard));

      console.log(y.quantity);
    }

  }
  removeFromLocalStorage(card:any)
  {
    let x=localStorage.getItem(card.id);
    let obj=JSON.parse(x);

    if(obj.quantity>1)
    {
      obj.quantity-=1;
      this.addToLocalStorage(obj,true);
      return;
    }
    var cardID=card.id;
    localStorage.removeItem(cardID);

  }
  removeAllItemsFromLocalStorage()
  {
    let arrayOfKeys=[];
    for (var i = 0; i < localStorage.length; i++) {

      var key = localStorage.key(i);
    
      if(key.indexOf('.') !== -1){}
      else if(key.indexOf('-') !== -1){}
      else if(key.indexOf('_') !== -1){}
      else{
        arrayOfKeys.push(key);
      }  
    }
    console.log("KOLICINA ITEMA U LOCAL STOREGU: "+ arrayOfKeys.length);
    
      for(let j=0;j<arrayOfKeys.length;j++)
      {
        for (var i = 0; i < localStorage.length; i++) {

          var key = localStorage.key(i);
            if(arrayOfKeys[j]==key)
              localStorage.removeItem(key);
        }
      }
  }
  getChefs()
  {
    let items=[];
    for (var i = 0; i < localStorage.length; i++) {

      var key = localStorage.key(i);
    
      if(key.indexOf('.') !== -1){}
      else if(key.indexOf('-') !== -1){}
      else if(key.indexOf('_') !== -1){}
      else{
        let x=localStorage.getItem(key);
        items.push(JSON.parse(x));
      }  
    }
    var chefs=[];
    items.forEach(element => {
      if(element.chef.blogID!=null)
          chefs.push(element.chef.id);
      else
      chefs.push(element.chef);
    });
    var uniq = [ ...new Set(chefs) ]

    return uniq;
  }
  async checkKorisnika(){

    let user = await Auth.currentAuthenticatedUser();
    const { attributes } = user;  

    let email=user.signInUserSession.idToken.payload.email;
    console.log(email+" Email adress");

    return email;
  }

  

}
