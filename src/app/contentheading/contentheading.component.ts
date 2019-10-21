import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contentheading',
  templateUrl: './contentheading.component.html',
  styleUrls: ['./contentheading.component.css']
})
export class ContentheadingComponent implements OnInit {

  @Input()
  public heading : string
  constructor() { }

  ngOnInit() {
  }

}
