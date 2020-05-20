import { Component, OnInit } from '@angular/core';
import { GetNewsByCategoryAction, GetEventsByCategoryAction, GetMealByCategoryAction } from 'src/app/store/actions/interests.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-interests-tab',
  templateUrl: './interests-tab.component.html',
  styleUrls: ['./interests-tab.component.scss']
})
export class InterestsTabComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {

    this.store.dispatch(new GetNewsByCategoryAction('game'));
    this.store.dispatch(new GetEventsByCategoryAction('music'));
    this.store.dispatch(new GetMealByCategoryAction('Beef'));
  }

}
