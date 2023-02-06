export interface Menu {
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
    }
  chef:
    {
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
  likes: number;
  id: string;
  dataScreen: string;

}
