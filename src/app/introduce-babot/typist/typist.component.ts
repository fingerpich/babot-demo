import {Component, OnInit, Input, Output, ContentChildren} from '@angular/core';
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'app-typist',
  templateUrl: './typist.component.html',
  styleUrls: ['./typist.component.scss']
})
export class TypistComponent implements OnInit {
  // @ContentChildren(String) paragraph;
  @Input() paragraph:string;
  @Input() time:number = 2000;

  constructor() {
  }

  activeWords:string = "";
  activeParagraph:number = 0;

  ngOnInit() {

  }
  ngOnChanges(){
    this.activeWords = "";
    this.activeParagraph = 0;
    Observable
      .interval(this.time / this.paragraph.length)
      .timeInterval()
      .take(this.paragraph.length)
      .subscribe(
        (d)=> {
          this.activeWords += this.paragraph[d.value];
        }
      );
  }
}
