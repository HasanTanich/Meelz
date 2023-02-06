import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TrendingMenuCartService } from 'src/app/core/services/trending-menu-cart.service';
import {loadStripe, Stripe} from '@stripe/stripe-js';
import { InfoAlertComponent } from '../info-alert/info-alert.component';
import { environment } from 'src/environments/environment';
import { AngularFireFunctions } from "@angular/fire/functions";
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { Chef } from '../models/chef.model';
import { trendingMenuVM } from '../models/trendingMenuVM.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = [
    { title: "Adults", amount: 2 },
    { title: "Children", amount: 0 },
  ];
  kolicina:19500;
  @ViewChild('paypalRef',{static:true}) private paypalRef:ElementRef;
  // amount: number = 0;
  // transactionCompleted=false;
  // handler:any=null;
  quantity:number;
  amount=10;
  KOLICINA=0;
  private stripe:Stripe;
  proces=false;

  addedItems:any[]=[];
  addedChefs:any[]=[];
  Chefs:Chef[]=[];
  HAHA:Chef;
  priceToPay=0;
  hehe=true;

  constructor(private dialog: MatDialog,private cartSerivce:TrendingMenuCartService,private fns:AngularFireFunctions,
    private route : Router,private dataService:DataService) { }
  
 
  async ngOnInit(){
    
    window.scrollTo(0, 0);

    this.KOLICINA=this.cartSerivce.getItemsPrice();
    this.priceToPay=this.KOLICINA*100;
    let xyz=await this.checkKorisnika()
    const userEmail = xyz;

    this.addedItems=this.cartSerivce.getItems();
    this.addedChefs=this.cartSerivce.getChefs();

    this.getMealzChefs();

    this.stripe=await loadStripe(environment.stripe.testKey);
    const elements=this.stripe.elements();

    const style = {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: (window.innerWidth <= 500) ? '12px' : '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };
    const card = elements.create('card', { style });
    card.mount('#card-element');
    card.on('change', (event) => {
      const displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }

    });
    
    const button = document.getElementById('button');
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const ownerInfo = {
        owner: {
          name : 'IME USERA',
          email: userEmail
        },
        amount: this.priceToPay,
        currency: 'usd',
      };

      this.stripe.createSource(card, ownerInfo).then((result) => {
        console.log(result);
        if (result.error) {
          const errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          this.stripeSourceHandler(result.source);
        }
      });
    });
    this.quantity=this.cartSerivce.getTrendingMenuCartNumberofItems();
    window.paypal.Buttons({
      style:{
        layout:'horizontal',
        color:'blue',
        shape:'pill',
        label:'paypal',
        // span:'hehe',
        tagline :'false'
      },
      
      createOrder:(data,actions)=>{
        return actions.order.create({
          purchase_units:[
            {
              amount:{
                value:this.KOLICINA,
                currency_code:'USD',
                // details: {
                //   subtotal: '30.00',
                //   tax: '0.07',
                //   shipping: '0.03',
                //   handling_fee: '1.00',
                //   shipping_discount: '-1.00',
                //   insurance: '0.01'
                // }
              }
            }
          ]
        });
      },

      onApprove:(data,actions)=>{
        return actions.order.capture().then(details=>{
          this.dialog.open(InfoAlertComponent, {
            width: '30%', data: "Transaction succesfully completed !"
          });
          this.cartSerivce.removeAllItemsFromLocalStorage();
          if(this.cartSerivce.getAllLocalStorage()==0)
          this.route.navigate(['home']);
         
        });
      },
      // onAuthorize:(data,actions)=>{
      //   return actions.payment.execute().then()
      // }

      onError:error=>{
        console.log(error);
      }
      

    }).render(this.paypalRef.nativeElement);
  }
  private stripeSourceHandler(source): void {
    this.proces=true;
    const callable = this.fns.httpsCallable('stripeChargeCall');
    const obs = callable(source);
    obs.subscribe(res => {
      console.log(res);
      if (res.result === 'SUCCESSFUL') {
        this.proces=false;
        this.dialog.open(InfoAlertComponent, {
          width: '30%', data: "Transaction succesfully completed !"
        });
        this.cartSerivce.removeAllItemsFromLocalStorage();
        if(this.cartSerivce.getAllLocalStorage()==0)
          this.route.navigate(['home']);
      } else {
        document.getElementsByClassName('text')[0].innerHTML = 'Something went wrong. 😞';
      }
    });
  }
  addAmount(card: any) {
    this.cartSerivce.addToLocalStorage(card);
    this.KOLICINA=this.cartSerivce.getItemsPrice();
    this.priceToPay=this.KOLICINA*100;
  }
  minusAmount(card: any) {

    this.cartSerivce.removeFromLocalStorage(card);
    this.addedItems=this.cartSerivce.getItems();
    this.KOLICINA=this.cartSerivce.getItemsPrice();
    this.priceToPay=this.KOLICINA*100;
    this.quantity=this.cartSerivce.getAllLocalStorage();
    

    if(this.KOLICINA==0)
      this.route.navigate(['home']);
      
    let tempChefs=this.Chefs;

    for(let i=0;i<tempChefs.length;i++)
    {
      if(!this.checkAssignedMeelz(tempChefs[i].id)) 
        this.Chefs.splice(i, 1);
    }

  }


  // Pay(){
  //   var handler=(<any>window).StripeCheckout.configure({
  //     key:'pk_test_51J5pLGGMvqm1YdKKUFJOjUuZ6hGaIXpMIrRObpgztkVTWH8BGBNM4iqsfziUB4R87YAjraNhD2YhK0rSYJmdQ6Nw00YlveEQf8',
  //     locale:'auto',
  //     token:function(token:any){
  //       console.log(token);
  //       alert('Token created');
  //     }
  //   });
  //   handler.open({
  //     name:'Meelz',
  //     description:'Shepards Pie',
  //     amount:20*100
  //   });
  // }
  // loadStripe(){
  //   if(!window.document.getElementById('stripe-script')){
  //     var s =window.document.createElement("script");
  //     s.id="stripe-script";
  //     s.type="text/javascript";
  //     s.src="https://checkout.stripe.com/checkout.js";
  //     s.onload=()=>{
  //       this.handler=(<any>window).StripeCheckout.configure({
  //         key:'pk_test_51J5pLGGMvqm1YdKKUFJOjUuZ6hGaIXpMIrRObpgztkVTWH8BGBNM4iqsfziUB4R87YAjraNhD2YhK0rSYJmdQ6Nw00YlveEQf8',
  //         locale:'auto',
  //         token:function(token:any){
  //           console.log(token);
  //           alert("payment succesfull");
  //         }
  //       })
  //     }
  //   }

  // }
  
  checkKorisnika(){
    return this.cartSerivce.checkKorisnika();
    // return localStorage.getItem('CognitoIdentityServiceProvider.4o6neking2l7vk5ha8q4lqco1u.LastAuthUser');
  }
  getMealzChefs()
  {
    for(let i=0;i<this.addedChefs.length;i++)
    {
      var obj;
      this.dataService.getSingleChefbyId(this.addedChefs[i]).subscribe(data => {
        this.HAHA=data;
        obj = data;
        this.Chefs.push(obj); 
      });   
    }
  }
  compareIDs(chefsID:any):string
  {
    let title:string="";
    let tempArray=this.addedItems;
    for(let i=0;i<tempArray.length;i++)
    {
      if(tempArray[i].chef==chefsID || tempArray[i].chef.id==chefsID)
      {
        let x;
        
        if(tempArray[i].menu!=undefined)
            x=tempArray[i].menu.heading;
        else
          x=tempArray[i].mealKitInfo.heading;

        title+=x+=". ";
      }
    } 
    return title;
  }
  checkAssignedMeelz(chefID:any)
  {
    let x=this.compareIDs(chefID);
    if(x=="")
      return false;
    return true;
  }
  
}
   

