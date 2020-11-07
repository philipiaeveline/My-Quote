import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'welcome to tech quotes';
  quotes: Quote[] = [    


    new Quote(1, 'Famous Quotes-', '"In three words I can sum up everything  I ve learned about life: it goes on"', ' Dalai Lama', new Date(2019, 6, 9)),
    new Quote(2, 'Book Quotes', '"It is better to be hated for what  you are than to be loved for what you are not."', 'Stephen King',new Date(2019, 1, 12)),
    new Quote(3, 'Love Quotes', '"It does not do to dwell on dreams and forget to live."', 'Mae West', new Date(2019, 11, 18)),
    new Quote(4, 'Life quotes', '"There are only two ways to live your life. One is as though nothing is a miracle.The other is as though everything is a miracle."', 'Thomas A. Edison', new Date(2020, 11, 3)),
    new Quote(5, 'Communication Quotes', '"Good friends, good books, and a sleepy conscience: this is the ideal life."', 'Will Smith', new Date(2020+ 3, 14)),
  ];

  upVote(index){
    this.quotes[index].upVote++;
  }
  downVote(index){
    this.quotes[index].downVote--;
  }
  addedQuote(quote) {
    let arraysize = this.quotes.length;
    quote.id = arraysize + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if (toDelete) {
        this.quotes.splice(index, 1);
      }

    }
  }


  high:number;
  author:string;
  name:String;
  quote:String;
  low:number;
  day:any;

highQuote() {
  this.high = 0;  
  
  for (let i = 0;i<this.quotes.length;i++){
    if(this.quotes[i].upVote>this.high){
      this.high = this.quotes[i].upVote;
      this.author = this.quotes[i].author;
      this.name = this.quotes[i].name;
      this.quote = this.quotes[i].description;
      this.low = this.quotes[i].downVote;
      this.day = this.quotes[i].completeDate;

    }
  }
}
  constructor() { }
  ngOnInit() {   
  }
}
 