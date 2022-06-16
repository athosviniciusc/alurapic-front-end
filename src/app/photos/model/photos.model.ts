export interface Photos {
    id: number;
    userId: number;
    allowComments: boolean;
    comments: number;
    description: string;
    likes: number;
    postDate: Date;
    url: string;
  }