import { Injectable, OnInit } from '@angular/core';
import { IFirebaseService } from './IFirebaseService';
import { Topic } from '../models/Topics';
import { Content } from '../models/Content';
import { FirebaseApp } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { resolve } from 'q';
import { Observable, from, Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';
//import { AngularFireDatabase } from 'angularfire2/database';




@Injectable({
  providedIn: 'root'
})
export class FirebaseService implements IFirebaseService {

  public subjet = new Subject();
  private response$: Observable<any>;


  public GetTopicsByUsers(string: any): Topic[] {
    var t = this.db.collection("v1")
    throw new Error("Method not implemented.");
  }

  public GetContentObjectsByTopic(topic: string): Observable<any> {
    this.response$ = this.db.collection("v1").doc("/SaPrQwOQFBkUz9y0CNb2/").valueChanges();
    this.response$ = this.response$.pipe(map(x => x.users[0].topic.filter(y => y.name === topic)));
    this.response$.subscribe((data) => {      
      this.subjet.next({ response: data });
    })

    return this.response$;

  }

  public GetContentObjects(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.db.collection("v1").doc("/SaPrQwOQFBkUz9y0CNb2/").valueChanges()
        .subscribe(snapshots => {
          resolve(snapshots)
          console.log(snapshots)
        })
    })

  }

  public GetContentOnClick(): Subject<any> {
    return this.subjet
  }



  constructor(public firebase: FirebaseApp, public db: AngularFirestore) { }
}
