export class trendingMenuVM {
    menu:
      {
        heading: string;
        carbs: number;
        totalPrice: number;
        proteins: number;
        price: number;
        imageUrl: string [];
        fat: number;
        description: string;
        calories: number;
        cloudKitchen:
          {
            title: string;
            imageUrl: string;
          };
        menuDetails: string [];
      };
    likes: number;
    id: string;
    dataScreen: string;
    selected:boolean;
    quantity:number;
    chef:string;
  
  }
  