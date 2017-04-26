import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
  animations: [
    trigger('StartPageState', [
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class StartPageComponent implements OnInit {
  @Output('onclick')
  onclick = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  start(){
    this.onclick.emit();
  }
}
