export interface MasterClass {
  chefID: {
    chefName: string;
    chefStatus: string;
    cover: string;
    description: string;
    id: string;
    imageURL: string;
    jobRole: string;
    likes: number;
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
  dataScreen: string;
  id: string;
  kitchenAccessories: [
    {
      id: string;
      imageURL: string;
    }
  ];
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
    type: string
  };
  productID: {}
}
