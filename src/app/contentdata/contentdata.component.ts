import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contentdata',
  templateUrl: './contentdata.component.html',
  styleUrls: ['./contentdata.component.css']
})
export class ContentdataComponent implements OnInit {
@Input()
  public  contentText : string
  constructor() { }

  ngOnInit() {
  }

}
