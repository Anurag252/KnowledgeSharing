import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-navtab',
  templateUrl: './navtab.component.html',
  styleUrls: ['./navtab.component.css']
})
export class NavtabComponent implements OnInit {
  public response: RootObject;
  public response$: Observable<RootObject>
  public selectedItem: string;
  constructor(public firebaseService: FirebaseService) {
    this.response$ = from(this.firebaseService.GetContentObjects())
    this.response$.subscribe((data) => {
    this.response = data;
      this.selectedItem = this.response.users[0].topic[0].name;
      this.changeTopic(this.selectedItem)
    })
    
  }

  ngOnInit() {
  }

  changeTopic(name) {

    this.firebaseService.GetContentObjectsByTopic(name)
      .subscribe((data) => { console.log(data[0].data) })
    this.selectedItem = name;

  }

}
