export interface MealKit {

  imageURL: string [];
  requiredRecipe: [
    {
      title: string;
      imgUrl: string;
    },
    {
      title: string;
      imgUrl: string;
    },
    {
      title: string;
      imgUrl: string;
    }
  ];
  dataScreen: string;
  chef: {
    imageURL: string;
    chefStatus: string;
    workingExperience: [
      {
        photo: string;
        companyDescription: string;
        companyName: string;
      }
    ];
    jobRole: string;
    cover: string;
    socialMedia: [
      {
        facebookURL: string;
        instagramURL: string;
        pinterestURL: string;
        youtubeURL: string;
      }
    ];
    description: string;
    id: string;
    chefName: string;
  };
  ingredients: [
    {
      slug: string;
      imageUrl: string;
      id: string;
      ingredientName: string;
    },
    {
      slug: string;
      imageUrl: string;
      id: string;
      ingredientName: string;
    },
    {
      slug: string;
      imageUrl: string;
      id: string;
      ingredientName: string;
    },
    {
      slug: string;
      imageUrl: string;
      id: string;
      ingredientName: string;
    }
  ];
  id: string;
  supplier: {
    slug: string;
    supplierName: string;
    imageUrl: string;
    id: string;
  };
  cuisine: {
    slug: string;
    id: string;
    cuisineName: string;
  };
  mealKitInfo: {
    onlineExperience: string;
    mealKitDetails: string [];
    heading: string;
    carbs: number;
    totalPrice: number;
    proteins: number;
    price: number;
    fat: number;
    description: string;
    calories: number;
    likes: number;
  }

}
