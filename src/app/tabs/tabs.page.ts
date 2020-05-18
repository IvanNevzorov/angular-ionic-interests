import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { CheckLoginAction } from '../store/actions/user.action';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new CheckLoginAction);
  }
}
