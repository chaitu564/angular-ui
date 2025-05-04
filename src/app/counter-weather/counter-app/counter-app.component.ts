import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiServiceService } from 'src/app/api-service.service';
import { decrement, increment, reset } from 'src/app/Shared/store/counter.action';

@Component({
  selector: 'app-counter-app',
  templateUrl: './counter-app.component.html',
  styleUrls: ['./counter-app.component.scss']
})
export class CounterAppComponent implements OnInit {
  countersArr: number[] = [];
  countNo: number = 0;
  // constructor(private store: Store<{ counter: { counter: number } }>,
   constructor(private store: Store<{ counters: { counters: number } }>,
    private service:ApiServiceService
  ) {

  }
  ngOnInit() {
    this.store.select('counters').subscribe(res => {
      this.countNo = res.counters;
    }
    )
  }

  addCounter() {
    this.countersArr.push(0);   
    this.service.updateCounterLength(this.countersArr.length);
  }

  resetCounters() {
    this.countersArr = [];
  }

  increment(i:number) {
    // if(this.countersArr[index])
    // {
      this.store.dispatch(increment({index:i}));
    // }
  
  }

  decrement(i:number) {
    this.store.dispatch(decrement({index:i}));

  }

  delete(index: number) {

    this.countersArr.splice(index, 1);
  }

}
