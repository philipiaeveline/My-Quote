import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
}) 
export class QuoteDetailComponent implements OnInit {
 
  @Input() quote : Quote;
  @Output () isComplete = new EventEmitter <boolean>();
  quoteDel(complete:boolean){
    this.isComplete.emit(complete)
  } 
  upVote (index){
    this.quote.upVote++
  }
  downVote (index){
    this.quote.downVote++
  } 
  
  constructor() { }

  ngOnInit(): void {
  }

}
