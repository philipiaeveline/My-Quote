export class Quote{
    public showDescription: boolean;
    downVote:number;
    upVote:number;
    constructor(public id: number,public name: string,public description: string, public author:string, public completeDate: Date){
      this.showDescription=false;
      this.downVote=0;
      this.upVote=0;
    }
  }

