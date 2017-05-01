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
  public paragraphs=[
    "This bot has been created by babot service to answer your question about babot service.",
    "you could make your bot to answer your users.",
    "your bot could work on telegram and filan messanger or web.",
  ];
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

  public userEmail:string = "";

  public emailHasSent = false;
  sendEmailToSubscribe() {
    setTimeout(()=>{
      this.emailHasSent = true;
    },300);
  }
}
