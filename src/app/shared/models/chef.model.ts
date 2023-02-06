export interface Chef {
  blogID: {
    blog: {
      background: string;
      heading: string;
      imageUrl: string[];
      subHeading: string;
      text: string []
    };
    blogType: string;
    dataScreen: string;
    id: string;
    likes: number;
  };
  chefName: string;
  chefStatus: string;
  chefsTableID: {
    backgroundImg: string;
    chefID: string;
    chefTableInfo: {
      description: string;
      duration: number;
      groupSize: number;
      heading: string;
      language: string;
      price: number;
      type: string;
    };
    dataScreen: string;
    id: string;
    importatNotes: string [];
    kitchenAccessories: string [];
    likes: number;
    menu: string [];
    productID: string;
    requestsAndAllergies: string;
    timeAtTable: string;
  };
  cover: string;
  description: string;
  id: string;
  imageURL: string;
  jobRole: string;
  likes: 1;
  masterClassID: [
    {
      chefID: string;
      dataScreen: string;
      id: string;
      kitchenAccessories: string [];
      likes: number;
      masterClass: {
        background: string;
        description: string;
        duration: number;
        groupSize: number;
        heading: string;
        language: string;
        price: number;
        privatePrice: number;
        program: string;
        type: string;
      };
      productID: string;
    },
    {
      chefID: string;
      dataScreen: string;
      id: string;
      kitchenAccessories: string [
      ];
      likes: 1;
      masterClass: {
        background: string;
        description: string;
        duration: number;
        groupSize: number;
        heading: string;
        language: string;
        price: number;
        privatePrice: number;
        program: string;
        type: string;
      };
      productID: string;
    }
  ];
  mealKitsID: {
    chef: string;
    cuisine: string;
    dataScreen: string;
    id: string;
    imageURL: string [];
    ingredients: string [];
    likes: number;
    mealKitInfo: {
      calories: number;
      carbs: number;
      description: string;
      fat: number;
      heading: string;
      mealKitDetails: string [];
      onlineExperience: string;
      price: number;
      proteins: number;
      totalPrice: number
    };
    requiredRecipe: [
      {
        imgUrl: string;
        title: string;
      },
      {
        imgUrl: string;
        title: string;
      },
      {
        imgUrl: string;
        title: string;
      }
    ];
    supplier: string;
  };
  productID: {
    chef: string;
    dataScreen: string;
    id: string;
    likes: number;
    menu: {
      calories: number;
      carbs: number;
      cloudKitchen: {
        imageUrl: string;
        title: string;
      };
      description: string;
      fat: number;
      heading: string;
      imageUrl: string [];
      menuDetails: string [];
      price: number;
      proteins: number;
      totalPrice: number
    }
  };
  socialMedia: {
    facebookURL: string;
    instagramURL: string;
    pinterestURL: string;
    youtubeURL: string;
  };
  workingExperience: {
    companyDescription: string;
    companyName: string;
    photo: string;
  }

}
