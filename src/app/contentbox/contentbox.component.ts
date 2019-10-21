import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contentbox',
  templateUrl: './contentbox.component.html',
  styleUrls: ['./contentbox.component.css']
})
export class ContentboxComponent implements OnInit {
@Input()
  public heading :string;

  @Input()
public contentText : string;
  constructor() { }

  ngOnInit() {
  }

}
