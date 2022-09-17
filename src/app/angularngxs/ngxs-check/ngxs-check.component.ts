import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ngxs-check',
  templateUrl: './ngxs-check.component.html',
  styleUrls: ['./ngxs-check.component.scss']
})
export class NgxsCheckComponent {
  error$: Observable<boolean>;
  constructor(private store: Store) {
    this.error$ = store.select((state) => state.taskbox.error);
  }
}
