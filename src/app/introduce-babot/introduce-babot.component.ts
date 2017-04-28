import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'app-introduce-babot',
  templateUrl: './introduce-babot.component.html',
  styleUrls: ['./introduce-babot.component.scss']
})
export class IntroduceBabotComponent implements OnInit {

  constructor() {
  }

  private wordsSelector = 0;

  ngOnInit() {
    Observable
      .interval(2000)
      .timeInterval()
      .subscribe(
        (x) => {
          this.wordsSelector = x.value;
        },
        function (err) {
          console.log('Error: ' + err);
        },
        function () {
          console.log('Completed');
        }
      );
  }

  public userEmail:string = ""

  sendEmailToSubscribe() {

  }
}
