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


    new Quote(1, 'Benard Akaka', '"In three words I can sum up everything  I ve learned about life: it goes on"', 'henry Kanyoro', new Date(2019, 6, 9)),
    new Quote(2, 'Kerry Kogei', '"It is better to be hated for what  you are than to be loved for what you are not."', 'Mariga Mwita',new Date(2019, 1, 12)),
    new Quote(3, 'Philipia', '"It does not do to dwell on dreams and forget to live."', 'Stellah Anne', new Date(2019, 11, 18)),
    new Quote(4, 'Slyvia Anne', '"There are only two ways to live your life. One is as though nothing is a miracle.The other is as though everything is a miracle."', 'Ken Swalla', new Date(2020, 11, 3)),
    new Quote(5, 'Henr y Ali', '"Good friends, good books, and a sleepy conscience: this is the ideal life."', 'Dceddy Otieno', new Date(2020+ 3, 14))
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

  constructor() { }
  ngOnInit() {   
  }
}
