export interface ChefTable {
  backgroundImg: string;
  chefID: {
    chefName: string;
    chefStatus: string;
    cover: string;
    description: string;
    id: string;
    imageURL: string;
    jobRole: string;
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
  };
  chefTableInfo: {
    description: string;
    duration: 90;
    groupSize: 10;
    heading: string;
    language: string;
    price: 220;
    type: string;
  };
  dataScreen: string;
  id: string;
  importatNotes: string [];
  kitchenAccessories: [
    {
      id: string;
      imageURL: string;
    }
  ];
  likes: 0;
  menu: string [];
  productID: {};
  requestsAndAllergies: string;
  timeAtTable: string;

}
