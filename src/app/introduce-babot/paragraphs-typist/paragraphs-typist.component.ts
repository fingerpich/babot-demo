import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-paragraphs-typist',
  templateUrl: './paragraphs-typist.component.html',
  styleUrls: ['./paragraphs-typist.component.scss']
})
export class ParagraphsTypistComponent implements OnInit {

  @Input('paragraphs') paragraphList:[string];
  @Input() interval:number = 3000;

  constructor() {
  }

  activeParagraph = "";
  activeParagraphIndex = 0;

  ngOnInit() {
    setInterval(()=> {
      this.activeParagraphIndex = (this.activeParagraphIndex + 1) % this.paragraphList.length;
      this.activeParagraph = this.paragraphList[this.activeParagraphIndex];
    }, this.interval);
  }

}
