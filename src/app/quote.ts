export class Quote{
    public showDescription: boolean;
    id: number;
    name: string;
    description: string;
    author:string;
    completeDate: Date;
    downVote:number;
    upVote:number;
    constructor( id: number,name: string,description: string, author:string,completeDate: Date){
      this.showDescription=false;
      this.id= id;
      this.name= name;
      this.description=  description;
      this.author=author;
      this.completeDate= completeDate;
      this.downVote=0;
      this.upVote=0;
    }
  }

