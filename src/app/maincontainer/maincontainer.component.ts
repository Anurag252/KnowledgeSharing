import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
import { Observable, from, Subject } from 'rxjs';

@Component({
  selector: 'app-maincontainer',
  templateUrl: './maincontainer.component.html',
  styleUrls: ['./maincontainer.component.css']
})
export class MaincontainerComponent implements OnInit {
  public response$: Observable<RootObject>
  private subject$: Subject<any>
  public contents: any;

  constructor(public fb: FirebaseService) {
    this.subject$ = fb.GetContentOnClick();
    if (this.subject$ != undefined) {
      this.subject$.subscribe((data) => {
        this.contents = data.response[0].data
      })
    }

  }

  ngOnInit() {
    this.subject$ = this.fb.GetContentOnClick();
  }

}
